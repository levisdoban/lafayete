export default function PrivacyPolicy() {
  return (
    <div className="py-14 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Introduction</h2>
              <p className="text-foreground leading-relaxed">
                Lafayette Resources ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-accent mb-2">Personal Information</h3>
                  <p className="text-foreground leading-relaxed">
                    We may collect personal information such as your name, email address, phone number, company name, and any other information you voluntarily provide when contacting us or using our services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-accent mb-2">Usage Information</h3>
                  <p className="text-foreground leading-relaxed">
                    We may collect information about how you access and use our website, including your IP address, browser type, operating system, and pages visited.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">How We Use Your Information</h2>
              <p className="text-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Provide and maintain our services</li>
                <li>Communicate with you about our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Information Sharing</h2>
              <p className="text-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to maintain confidentiality.
              </p>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Data Security</h2>
              <p className="text-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Your Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of the information we have about you</li>
              </ul>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Cookies</h2>
              <p className="text-foreground leading-relaxed">
                Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings, though this may affect website functionality.
              </p>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Third-Party Links</h2>
              <p className="text-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Changes to This Policy</h2>
              <p className="text-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="montserrat font-semibold text-2xl text-accent mb-4">Contact Us</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg">
                <p className="text-foreground">
                  <strong>Email:</strong> <a href="mailto:service@lafayette.africa.com" className="text-primary hover:text-primary/80">service@lafayette.africa.com</a>
                </p>
                <p className="text-foreground mt-2">
                  <strong>Phone:</strong> <a href="tel:+254722709005" className="text-primary hover:text-primary/80">+254 722 709005</a>
                </p>
                <p className="text-foreground mt-2">
                  <strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EAT
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}