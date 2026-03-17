import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Services */}
          <div>
            <h4 className="montserrat font-semibold text-lg mb-6">Services</h4>
            <div className="space-y-3">
              <Link href="/services" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Human Capital Consulting
              </Link>
              <Link href="/services" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Recruitment Services
              </Link>
              <Link href="/services" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Executive Search
              </Link>
              <Link href="/services" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                HR Consultancy
              </Link>
              <Link href="/assessments" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Assessment Tools
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="montserrat font-semibold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link href="/assessments" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Assessments
              </Link>
              <Link href="/training" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Training
              </Link>
              <Link href="/contact" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="montserrat font-semibold text-lg mb-6">Legal</h4>
            <div className="space-y-3">
              <Link href="/privacy-policy" className="block text-accent-foreground/80 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-12 pt-8">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
            <a 
              href="mailto:service@lafayette.africa.com" 
              className="flex items-center text-accent-foreground/80 hover:text-primary transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-4 h-4 mr-2" />
              service@lafayette.africa.com
            </a>
            <a 
              href="tel:+254722709005" 
              className="flex items-center text-accent-foreground/80 hover:text-primary transition-colors"
              data-testid="footer-phone-1"
            >
              <Phone className="w-4 h-4 mr-2" />
              +254 722 709005
            </a>
          </div>
          
          <p className="text-accent-foreground/60 text-center">
            © 2025 Lafayette Resources. All rights reserved. Partnering for Success.
          </p>
        </div>
      </div>
    </footer>
  );
}
