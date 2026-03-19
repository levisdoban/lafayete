import HeroSection from "@/components/ui/hero-section";
import ContactForm from "@/components/ui/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import africanBusinessTeam from "@assets/generated_images/African_business_team_meeting_d47d8c9e.png";
import africanAssessmentSpecialist from "@assets/generated_images/African_American_assessment_specialist_f3b49f08.png";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Get In Touch"
        subtitle="Ready to Unlock Your Organization's Potential?"
        description="Contact our team today to discuss how Lafayette Resources can help you achieve your organizational objectives through innovative talent optimization solutions. We're here to partner with you for success."
        primaryButtonText="Call Us Now"
        primaryButtonLink="tel:+254722709005"
        secondaryButtonText="Send Email"
        secondaryButtonLink="mailto:service@lafayette.africa"
        imageUrl={africanAssessmentSpecialist}
        imageAlt="Modern African business office environment"
      />

      {/* Contact Information & Form */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="montserrat font-semibold text-2xl lg:text-3xl text-accent mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-accent mb-2">Email</h4>
                    <a 
                      href="mailto:service@lafayette.africa" 
                      className="text-foreground hover:text-primary transition-colors text-lg"
                      data-testid="contact-email-link"
                    >
                      service@lafayette.africa
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-accent mb-2">Phone</h4>
                    <div className="space-y-2">
                      <a 
                        href="tel:+254722709005" 
                        className="block text-foreground hover:text-primary transition-colors text-lg"
                        data-testid="contact-phone-1"
                      >
                        +254 722 709005
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday, 8:00 AM - 6:00 PM EAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-xl p-3 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-accent mb-2">Service Areas</h4>
                    <p className="text-foreground text-lg leading-relaxed">
                      East Africa & West Africa
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We serve organizations across the African continent
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="mt-12 bg-card rounded-xl p-8">
                <h4 className="montserrat font-semibold text-xl text-accent mb-6">Why Contact Lafayette Resources?</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Free initial consultation to understand your HR needs</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Customized solutions designed for your organization</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">Proven track record across African markets</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">International partnerships for enhanced service delivery</p>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <div className="mt-12">
                <img 
                  src={africanBusinessTeam}
                  alt="Professional African business team in conference room"
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="contact-office-image"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Access */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">How Can We Help You?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of HR services and solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 rounded-xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0V6a2 2 0 00-2 2v6m0 0v2a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                </svg>
              </div>
              <h4 className="montserrat font-semibold text-lg text-accent mb-3">Human Capital Consulting</h4>
              <p className="text-foreground text-sm">Strategic HR consulting and workforce optimization solutions</p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 rounded-xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h4 className="montserrat font-semibold text-lg text-accent mb-3">Assessment Tools</h4>
              <p className="text-foreground text-sm">PDA and other scientifically validated assessment solutions</p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 rounded-xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h4 className="montserrat font-semibold text-lg text-accent mb-3">Training & Development</h4>
              <p className="text-foreground text-sm">Customized training programs and capacity building solutions</p>
            </div>

            <div className="text-center group">
              <div className="bg-primary/10 rounded-xl p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h4 className="montserrat font-semibold text-lg text-accent mb-3">Career Coaching</h4>
              <p className="text-foreground text-sm">Career transformation and vocational guidance programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-14 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
            "Unlock Your Potential with Lafayette Resources - Your Trusted Partner in Talent Optimization."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="tel:+254722709005" className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors">
              Call Now: +254 722 709005
            </a>
            <a href="mailto:service@lafayette.africa" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg transition-colors">
              Email Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
