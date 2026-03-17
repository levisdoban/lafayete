import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import africanTrainingFacilitator from "@assets/generated_images/African_training_facilitator_f8a0efc7.png";
import africanHRConsultant from "@assets/generated_images/African_American_HR_consultant_2963a66f.png";
import africanExecutiveSearch from "@assets/generated_images/African_executive_search_professional_11aa6d11.png";
import africanBusinessTeam from "@assets/generated_images/African_business_team_meeting_d47d8c9e.png";
import africanAssessmentSpecialist from "@assets/generated_images/African_American_assessment_specialist_f3b49f08.png";

export default function Training() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Lafayette Training School"
        subtitle="Training & Capacity Strengthening"
        description="'The only thing worse than training employees and losing them is not training them and keeping them.' - Zig Ziglar. Capacity Development and training is the Key to Driving Performance and Achieving Desirable organizational Results."
        primaryButtonText="Explore Programs"
        primaryButtonLink="#training-programs"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        imageUrl={africanTrainingFacilitator}
        imageAlt="Professional coaching session with diverse participants"
      />

      {/* Training Philosophy */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="montserrat font-bold text-3xl lg:text-4xl text-accent mb-6">
                Our Training Philosophy
              </h2>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  At Lafayette Resources, we understand the importance of capacity development in driving business success. That's why we offer innovative and customized solutions to assess and enhance the skills of your team.
                </p>
                <p>
                  Our experts will conduct a thorough evaluation of your team's strengths, gaps, and areas for improvement. Based on the results, we will craft tailored programs that address your team's specific development and training needs.
                </p>
                <p>
                  No two organizations are alike, and neither are our solutions. We believe in delivering personalized approaches that meet the unique needs of your business.
                </p>
                <p className="text-primary font-semibold">
                  Empower your team to reach new heights with Lafayette Resources - the experts in capacity development.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={africanTrainingFacilitator}
                alt="Modern HR consulting office environment"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="training-philosophy-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="training-programs" className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Our Training Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive training solutions designed to enhance your team's capabilities and drive organizational success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Customer Experience Training"
              description="Enhance your team's ability to deliver exceptional customer service and create lasting customer relationships through comprehensive customer experience training programs."
              imageUrl={africanHRConsultant}
              imageAlt="Customer service training session"
              linkHref="/contact"
            />

            <ServiceCard
              title="HR Audit Training Workshops"
              description="Equip your HR team with the skills and knowledge needed to conduct thorough HR audits and implement best practices in human resource management."
              imageUrl={africanExecutiveSearch}
              imageAlt="HR audit training workshop"
              linkHref="/contact"
            />

            <ServiceCard
              title="Goal Setting Workshops"
              description="Learn effective goal-setting methodologies and techniques to align individual and team objectives with organizational success through structured workshops."
              imageUrl={africanTrainingFacilitator}
              imageAlt="Goal setting workshop session"
              linkHref="/contact"
            />

            <ServiceCard
              title="Employee Productivity Workshops"
              description="Boost your team's productivity through proven techniques, time management strategies, and workflow optimization methods tailored to your organization."
              imageUrl={africanAssessmentSpecialist}
              imageAlt="Employee productivity training"
              linkHref="/contact"
            />

            <ServiceCard
              title="Experiential Team Building"
              description="Build high performance teams through engaging experiential learning activities designed to improve collaboration, communication, and team dynamics."
              imageUrl={africanBusinessTeam}
              imageAlt="Team building activities"
              linkHref="/contact"
            />

            <ServiceCard
              title="Performance Management Training"
              description="Master the art of performance management with comprehensive training on setting expectations, providing feedback, and conducting effective performance reviews."
              imageUrl={africanTrainingFacilitator}
              imageAlt="Performance management training"
              linkHref="/contact"
            />

            <ServiceCard
              title="PDA Accreditation Training"
              description="Become certified in using Personal Development Analysis (PDA) assessment tools through our comprehensive accreditation training workshop program."
              imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              imageAlt="PDA accreditation training"
              linkHref="/contact"
            />

            <ServiceCard
              title="Leadership Development Programs"
              description="Develop the next generation of leaders with comprehensive leadership training covering strategy, communication, decision-making, and team management."
              imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              imageAlt="Leadership development program"
              linkHref="/contact"
            />

            <ServiceCard
              title="Supervisory Skills Workshops"
              description="Equip first-line supervisors with essential skills for managing teams, handling conflicts, and creating productive work environments."
              imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              imageAlt="Supervisory skills workshop"
              linkHref="/contact"
            />

            <ServiceCard
              title="Management Skills Series"
              description="Comprehensive management training series covering essential skills for effective management including planning, organizing, leading, and controlling."
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              imageAlt="Management skills training"
              linkHref="/contact"
            />

            <ServiceCard
              title="Train the Trainer (ToT)"
              description="Develop internal training capacity by training your staff to become effective trainers within your organization through our Train the Trainer program."
              imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              imageAlt="Train the trainer program"
              linkHref="/contact"
            />

            <ServiceCard
              title="Youth Mentorship Training"
              description="Build mentorship capabilities to guide and develop young professionals in your organization through structured mentorship training workshops."
              imageUrl="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
              imageAlt="Youth mentorship training"
              linkHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Specialized Training Programs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 className="montserrat font-semibold text-2xl text-accent mb-4">Best-in-class Selling Skills Training</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Develop exceptional sales capabilities with our comprehensive selling skills training program designed to increase revenue and build strong customer relationships.
              </p>
              <Link href="/contact" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="montserrat font-semibold text-2xl text-accent mb-4">HR Administration Training</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Master the fundamentals of HR administration including employee records management, compliance, and administrative best practices for HR professionals.
              </p>
              <Link href="/contact" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="montserrat font-semibold text-2xl text-accent mb-4">Organizational Strategies</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Learn how to develop and implement effective organizational strategies that align with business objectives and drive sustainable growth.
              </p>
              <Link href="/contact" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg">
              <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="montserrat font-semibold text-2xl text-accent mb-4">Life & Soft Skills for Graduates</h3>
              <p className="text-foreground leading-relaxed mb-6">
                Bridge the gap between education and workplace demands with essential life and soft skills training for young graduates entering the job market.
              </p>
              <Link href="/career-coaching" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-14 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Why Choose Our Training Programs?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Customized Solutions</h4>
                    <p className="text-accent-foreground/80">We craft tailored programs that address your team's specific development and training needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Expert Facilitators</h4>
                    <p className="text-accent-foreground/80">Our experienced trainers bring real-world expertise and proven methodologies to every session.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Measurable Results</h4>
                    <p className="text-accent-foreground/80">We focus on delivering training that produces measurable improvements in performance and productivity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Ongoing Support</h4>
                    <p className="text-accent-foreground/80">We provide continued support and follow-up to ensure training effectiveness and long-term success.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional African business team in conference room"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="training-benefits-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Ready to Empower Your Team?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Invest in your team's development and watch your organization thrive. Our comprehensive training programs are designed to deliver lasting results and measurable improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
                data-testid="start-training-cta"
              >
                Start Training Today
              </Button>
            </Link>
            <a href="tel:+254722709005">
              <Button 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
                data-testid="discuss-needs-cta"
              >
                Discuss Your Needs
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
