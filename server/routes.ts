import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { addContactToMailchimp, type MailchimpContact } from "./mailchimp";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Save to local storage
      const submission = await storage.createContactSubmission(validatedData);
      
      // Add to Mailchimp
      const mailchimpContact: MailchimpContact = {
        email: validatedData.email,
        firstName: validatedData.name?.split(' ')[0],
        lastName: validatedData.name?.split(' ').slice(1).join(' '),
        company: validatedData.company || undefined,
        phone: validatedData.phone || undefined,
        serviceInterest: validatedData.serviceInterest || undefined,
        message: validatedData.message || undefined,
      };

      // Add to Mailchimp (don't fail if this fails)
      const mailchimpSuccess = await addContactToMailchimp(mailchimpContact);
      
      res.json({ 
        success: true, 
        id: submission.id,
        mailchimpAdded: mailchimpSuccess
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error('Contact form submission error:', error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get contact submissions (for admin use)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
