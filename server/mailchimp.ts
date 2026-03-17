import mailchimp from '@mailchimp/mailchimp_marketing';

// Initialize Mailchimp
const apiKey = process.env.MAILCHIMP_API_KEY;
const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

// Check if Mailchimp is configured
const isMailchimpConfigured = apiKey && audienceId;

if (isMailchimpConfigured) {
  // Extract server prefix from API key (e.g., 'us1' from 'abc123-us1')
  const serverPrefix = apiKey.split('-').pop();

  mailchimp.setConfig({
    apiKey: apiKey,
    server: serverPrefix,
  });
  
  console.log('Mailchimp integration enabled');
} else {
  console.warn('Mailchimp integration disabled: MAILCHIMP_API_KEY and/or MAILCHIMP_AUDIENCE_ID not configured');
}

export interface MailchimpContact {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  phone?: string;
  serviceInterest?: string;
  message?: string;
}

export async function addContactToMailchimp(contact: MailchimpContact): Promise<boolean> {
  // If Mailchimp is not configured, skip integration
  if (!isMailchimpConfigured) {
    console.log('Mailchimp integration skipped (not configured):', contact.email);
    return false;
  }

  try {
    const mergeFields: Record<string, any> = {};
    
    if (contact.firstName) mergeFields.FNAME = contact.firstName;
    if (contact.lastName) mergeFields.LNAME = contact.lastName;
    if (contact.company) mergeFields.COMPANY = contact.company;
    if (contact.phone) mergeFields.PHONE = contact.phone;

    // Create tags based on service interest
    const tags: string[] = [];
    if (contact.serviceInterest) {
      tags.push(`Interest: ${contact.serviceInterest}`);
    }
    tags.push('Website Lead');
    tags.push('Lafayette Resources');

    const response = await mailchimp.lists.addListMember(audienceId!, {
      email_address: contact.email,
      status: 'subscribed',
      merge_fields: mergeFields,
      tags: tags,
    });

    console.log('Successfully added contact to Mailchimp:', contact.email);
    return true;
  } catch (error: any) {
    // Handle duplicate email (already subscribed)
    if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
      try {
        // Update existing member with new information
        const updateResponse = await mailchimp.lists.updateListMember(
          audienceId!,
          contact.email,
          {
            merge_fields: {
              FNAME: contact.firstName,
              LNAME: contact.lastName,
              COMPANY: contact.company,
              PHONE: contact.phone,
            },
          }
        );
        console.log('Updated existing Mailchimp contact:', contact.email);
        return true;
      } catch (updateError) {
        console.error('Failed to update existing Mailchimp contact:', updateError);
        return false;
      }
    }
    
    console.error('Failed to add contact to Mailchimp:', error);
    return false;
  }
}

export { audienceId };