import HeroSection from "@/components/ui/hero-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import africanBusinessTeam from "@assets/generated_images/African_business_team_meeting_d47d8c9e.png";
import africanAmericanProfessional from "@assets/generated_images/African_American_professional_woman_5181ff38.png";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Lafayette Resources"
        subtitle="Partnering for Success"
        description="Our history is driven by innovation, growth and a steadfast commitment to excellence. Spanning years of dedicated service, we have evolved and adapted to meet the changing needs of our clients, consistently pushing the boundaries of what's possible."
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        imageUrl={africanBusinessTeam}
        imageAlt="Diverse African American executives in modern office"
      />

      {/* Our Story Section */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="montserrat font-bold text-3xl lg:text-4xl text-accent mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  Our story is one of passion, dedication, and a commitment to making a difference. It all began in 2005, when our founder saw a need for professional support in helping small to medium-sized organizations scale up their businesses and hire the right talent.
                </p>
                <p>
                  With a day job already providing similar services, the founder saw an opportunity to use his free time to make a difference. He spent his weekends recruiting employees and providing skills training programs, and the impact was phenomenal. Clients were thrilled, and deep relationships were formed, leading to the birth of Lafayette Resources in 2011.
                </p>
                <p>
                  Over the years, we have expanded our services portfolio to cover different pillars: human capital consulting, assessments and talent management solutions, training and capacity building programs, and career guidance and coaching. What started as a side hustle driven by passion has grown into a well-structured and reputable consulting company.
                </p>
                <p>
                  At Lafayette Resources, we believe in building lasting relationships with our clients and extending our services beyond the assignments given to us. We are more than just a consulting firm; we are a partner committed to your success.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={africanAmericanProfessional}
                alt="Professional African business team in conference room"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="our-story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Our Mission & Vision</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="montserrat font-semibold text-2xl text-accent mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To provide innovative human capital consulting solutions that unlock organizational potential through creative custom-made approaches in talent optimization, capacity development, and assessment tools.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg">
              <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="montserrat font-semibold text-2xl text-accent mb-4">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To be the leading human capital consultancy across Africa, recognized for excellence in talent optimization and our commitment to building lasting partnerships that drive organizational success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h4 className="montserrat font-semibold text-lg text-accent mb-3">Innovation</h4>
              <p className="text-foreground">We continuously push boundaries and create custom solutions that meet unique organizational needs.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h4 className="montserrat font-semibold text-lg text-accent mb-3">Excellence</h4>
              <p className="text-foreground">We maintain the highest standards in everything we do, delivering quality results that exceed expectations.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h4 className="montserrat font-semibold text-lg text-accent mb-3">Partnership</h4>
              <p className="text-foreground">We build lasting relationships with our clients, going beyond assignments to become trusted partners.</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="montserrat font-semibold text-lg text-accent mb-3">Impact</h4>
              <p className="text-foreground">We are committed to making a meaningful difference in organizations and communities across Africa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join the organizations across Africa that trust Lafayette Resources for their human capital needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
                data-testid="contact-us-cta"
              >
                Contact Us Today
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
                data-testid="explore-services-cta"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
