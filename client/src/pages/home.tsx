import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import africanBusinessTeam from "@assets/generated_images/African_business_team_meeting_d47d8c9e.png";
import africanAmericanProfessional from "@assets/generated_images/African_American_professional_woman_5181ff38.png";
import africanBusinessPresenting from "@assets/generated_images/African_businessman_presenting_b8376f1c.png";
import africanTrainingSession from "@assets/generated_images/African_professionals_training_session_81664681.png";
import africanHRConsultant from "@assets/generated_images/African_American_HR_consultant_2963a66f.png";
import africanExecutiveSearch from "@assets/generated_images/African_executive_search_professional_11aa6d11.png";
import africanAssessmentSpecialist from "@assets/generated_images/African_American_assessment_specialist_f3b49f08.png";
import africanTrainingFacilitator from "@assets/generated_images/African_training_facilitator_f8a0efc7.png";
import africanCareerCoach from "@assets/generated_images/African_American_career_coach_c6c29583.png";
import lafayettePoloModel from "@assets/generated_images/Lafayette_polo_shirt_model_1ab4eb24.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Unlock Your Potential with Lafayette Resources"
        subtitle="Your Trusted Partner in Talent Optimization"
        description="We're an innovative Human capital consultancy, renowned for creative custom-made solutions in talent optimization, capacity development and training, best-in-class behaviour and psychometric assessment tools."
        primaryButtonText="Explore Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Get In Touch"
        secondaryButtonLink="/contact"
        imageUrl={africanBusinessTeam}
        imageAlt="Professional African business team in conference room"
      />

      {/* About Section */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">About Lafayette Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partnering for Success across Africa and beyond
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <img 
                src={africanAmericanProfessional}
                alt="Diverse African American executives in modern office"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="about-image"
              />
            </div>
            <div>
              <h3 className="montserrat font-semibold text-2xl lg:text-3xl text-accent mb-6">Our Story</h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Our story is one of passion, dedication, and a commitment to making a difference. It all began in 2005, when our founder saw a need for professional support in helping small to medium-sized organizations scale up their businesses and hire the right talent.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                What started as a side hustle driven by passion has grown into a well-structured and reputable consulting company. Over the years, we have expanded our services portfolio to cover different pillars: human capital consulting, assessments and talent management solutions, training and capacity building programs, and career guidance and coaching.
              </p>
              <Link href="/about">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="learn-more-about">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Our Pillars of Service</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive HR solutions designed to unlock your organization's potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <ServiceCard
              title="Human Capital Consulting"
              description="Specialized consulting providing valuable insight into workplace behavior and motivation, delivering customized solutions that optimize employee potential and organizational performance."
              imageUrl={africanHRConsultant}
              imageAlt="Asian professionals collaborating in modern office setting"
              linkHref="/services"
            />

            <ServiceCard
              title="Recruitment & Talent Search"
              description="Our recruitment processes identify not just technical skills but also soft skills and personality traits essential for success, helping organizations avoid costly hiring mistakes."
              imageUrl={lafayettePoloModel}
              imageAlt="African business professionals in strategic meeting"
              linkHref="/services"
            />

            <ServiceCard
              title="Executive Search"
              description="Finding top quality talent for senior roles in your organization. Comprehensive approach involving sourcing, assessment, and confidential interviews for critical C-suite positions."
              imageUrl={africanExecutiveSearch}
              imageAlt="African American executive in modern corporate setting"
              linkHref="/services"
            />

            <ServiceCard
              title="Assessment Tools"
              description="Cutting-edge assessment tools including PDA (Personal Development Analysis) designed to give you comprehensive understanding of your talent and potential with 86% reliability."
              imageUrl={africanAssessmentSpecialist}
              imageAlt="Diverse team analyzing performance metrics"
              linkHref="/assessments"
            />

            <ServiceCard
              title="Training & Development"
              description="Innovative and customized training solutions including customer experience, leadership development, performance management, and team building programs."
              imageUrl={africanTrainingFacilitator}
              imageAlt="Professional coaching session with diverse participants"
              linkHref="/training"
            />

            <ServiceCard
              title="Career Coaching"
              description="Career transformation coaching, academic and career planning for graduates, and life skills training to bridge the gap between education and workplace demands."
              imageUrl={africanCareerCoach}
              imageAlt="Modern HR consulting office environment"
              linkHref="/career-coaching"
            />
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4"
                data-testid="view-all-services"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Why Choose Lafayette Resources?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Innovative Custom Solutions</h4>
                    <p className="text-accent-foreground/80">We design solutions that meet your specific needs and goals, understanding that each organization is unique.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Proven Track Record</h4>
                    <p className="text-accent-foreground/80">Years of dedicated service across African countries with consistent growth and adaptation to client needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">International Partnerships</h4>
                    <p className="text-accent-foreground/80">Strategic international affiliate partners enhance our service delivery capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Lasting Partnerships</h4>
                    <p className="text-accent-foreground/80">We're more than just a consulting firm; we're a partner committed to your long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={africanBusinessTeam}
                alt="Successful African business team celebrating achievement"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="why-choose-us-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss how Lafayette Resources can help you achieve your organizational objectives through innovative talent optimization solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
                data-testid="cta-start-journey"
              >
                Start Your Journey
              </Button>
            </Link>
            <a href="tel:+254722709005">
              <Button 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
                data-testid="cta-call-now"
              >
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
