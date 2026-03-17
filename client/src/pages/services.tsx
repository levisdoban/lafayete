import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import africanHRConsultant from "@assets/generated_images/African_American_HR_consultant_2963a66f.png";
import africanExecutiveSearch from "@assets/generated_images/African_executive_search_professional_11aa6d11.png";
import africanAssessmentSpecialist from "@assets/generated_images/African_American_assessment_specialist_f3b49f08.png";
import africanTrainingFacilitator from "@assets/generated_images/African_training_facilitator_f8a0efc7.png";
import africanCareerCoach from "@assets/generated_images/African_American_career_coach_c6c29583.png";
import africanBusinessTeam from "@assets/generated_images/African_business_team_meeting_d47d8c9e.png";
import lafayettePoloModel from "@assets/generated_images/Lafayette_polo_shirt_model_1ab4eb24.png";

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Pillars of Service"
        subtitle="Comprehensive HR Solutions"
        description="Lafayette Resources offers a comprehensive suite of human capital consulting services designed to unlock your organization's potential through innovative talent optimization, assessment tools, and capacity development programs."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Assessments"
        secondaryButtonLink="/assessments"
        imageUrl={africanHRConsultant}
        imageAlt="Asian professionals collaborating in modern office setting"
      />

      {/* Services Overview */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">
              Transforming Organizations Through People
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              In today's rapidly changing business landscape, organizations are facing more challenges than ever before. From employee turnover to productivity struggles, it can be difficult to stay ahead of the curve and achieve your goals. That's where we come in.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Human Capital Consulting"
              description="Our human capital consulting firm specializes in providing valuable insight into workplace behavior and motivation, delivering customized solutions, tools, and training programs that turn employees' potential, skills, and talents into sustained, high-performing results."
              imageUrl={africanHRConsultant}
              imageAlt="Asian professionals collaborating in modern office setting"
              linkHref="/contact"
            />

            <ServiceCard
              title="Recruitment & Talent Search"
              description="By partnering with us, organizations can rest assured that they are getting the best talent available in the market. Our recruitment processes are designed to identify not just the technical skills but also the soft skills and personality traits that are essential for success in any role."
              imageUrl={lafayettePoloModel}
              imageAlt="African business professionals in strategic meeting"
              linkHref="/contact"
            />

            <ServiceCard
              title="Executive Search"
              description="Our executive search services are designed to help organizations identify and secure top talent for their critical C-suite positions. Our comprehensive approach involves sourcing potential candidates through a range of channels, conducting thorough assessments to ensure qualifications, cultural fit, and compatibility."
              imageUrl={africanExecutiveSearch}
              imageAlt="African American executive in modern corporate setting"
              linkHref="/contact"
            />

            <ServiceCard
              title="HR Consultancy"
              description="At Lafayette Resources, we understand the impact that people have on an organization's success. That's why we offer comprehensive human resources consulting services, including HR audits, policy and process design, and HR outsourcing solutions."
              imageUrl={africanHRConsultant}
              imageAlt="Modern HR consulting office environment"
              linkHref="/contact"
            />

            <ServiceCard
              title="Job Evaluation & Grading"
              description="Our Job Evaluation process involves a systematic assessment of the duties, responsibilities, and requirements of each role within an organization. We utilize a standardized approach to evaluate the relative complexity and worth of each job, determining an appropriate grade for each."
              imageUrl={africanAssessmentSpecialist}
              imageAlt="Diverse team analyzing performance metrics"
              linkHref="/contact"
            />

            <ServiceCard
              title="Performance Management"
              description="'If you can't measure it, you can't improve it' - Peter Drucker. A performance management process will not only bring clarity to your organizational goals but also clearly define each employee's role in achieving those goals."
              imageUrl={africanTrainingFacilitator}
              imageAlt="Professional coaching session with diverse participants"
              linkHref="/contact"
            />

            <ServiceCard
              title="Organization Design"
              description="Let us help you optimize your organizational structure to align with your business strategy, vision and mission, ensuring efficient and effective operations for optimal results. Streamlining organizational structure for success."
              imageUrl={africanBusinessTeam}
              imageAlt="Professional African business team in conference room"
              linkHref="/contact"
            />

            <ServiceCard
              title="Staff Outsourcing"
              description="Don't let non-core functions hold you back. Partner with us and unlock the full potential of your organization. Every organization is unique, and we work consultatively to create customized solutions that meet your specific needs."
              imageUrl={africanHRConsultant}
              imageAlt="Diverse African American executives in modern office"
              linkHref="/contact"
            />

            <ServiceCard
              title="Assessment Tools"
              description="Our cutting-edge assessment tools are designed to give you a comprehensive understanding of your talent and potential. With our expert team of Human Capital consultants, we take a custom-made approach to talent optimization."
              imageUrl={africanAssessmentSpecialist}
              imageAlt="Modern African business office environment"
              linkHref="/assessments"
            />
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={africanBusinessTeam}
                alt="Successful African business team celebrating achievement"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="why-invest-image"
              />
            </div>
            <div>
              <h2 className="montserrat font-bold text-3xl lg:text-4xl text-accent mb-6">
                Why Invest in Performance Management?
              </h2>
              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  A performance management process will not only bring clarity to your organizational goals but also clearly define each employee's role in achieving those goals. Your employees will have a clear understanding of what is expected of them and how their work contributes to the larger picture.
                </p>
                <p>
                  This level of understanding will drive their motivation and engagement, leading to higher job satisfaction and reduced employee turnover.
                </p>
                <p>
                  Do not miss the opportunity to improve your company's success. Invest in a comprehensive Performance Management process today and see the difference it makes.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                    data-testid="invest-performance-cta"
                  >
                    Get Started with Performance Management
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Ready to Optimize Your Human Capital?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Investing in our services is a smart move for organizations looking to achieve long-term success. By finding and retaining the best talent, organizations can ensure that they have the resources to meet their goals and overcome challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
                data-testid="optimize-human-capital-cta"
              >
                Start Your Transformation
              </Button>
            </Link>
            <Link href="/assessments">
              <Button 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
                data-testid="explore-assessments-cta"
              >
                Explore Assessment Tools
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
