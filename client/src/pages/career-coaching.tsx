import HeroSection from "@/components/ui/hero-section";
import ServiceCard from "@/components/ui/service-card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import africanBusinessTeam from "@assets/generated_images/African_business_team_meeting_d47d8c9e.png";
import africanAmericanProfessional from "@assets/generated_images/African_American_professional_woman_5181ff38.png";
import africanTrainingSession from "@assets/generated_images/African_professionals_training_session_81664681.png";
import africanCareerCoach from "@assets/generated_images/African_American_career_coach_c6c29583.png";
import africanAssessmentSpecialist from "@assets/generated_images/African_American_assessment_specialist_f3b49f08.png";

export default function CareerCoaching() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Career Transformation, Planning & Coaching"
        subtitle="Shape Your Future with Expert Guidance"
        description="Discover your path to success with comprehensive career assessment, planning, and transformation coaching programs. From high school graduates to experienced professionals seeking career change, we provide the guidance and tools you need to achieve your career goals."
        primaryButtonText="Start Your Journey"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About GVA"
        secondaryButtonLink="#gva-section"
        imageUrl={africanCareerCoach}
        imageAlt="Modern HR consulting office environment"
      />

      {/* Career Assessment Overview */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">
              Career Assessment & Guidance
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              The key to success lies in self-awareness and the right guidance. Our comprehensive career assessment and coaching programs help individuals discover their true potential and make informed decisions about their future.
            </p>
          </div>
        </div>
      </section>

      {/* Global Vocational Assessment Section */}
      <section id="gva-section" className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="montserrat font-semibold text-2xl lg:text-3xl text-accent mb-6">
                Global Vocational Assessment (GVA)
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                GVA is a guide to educational and career planning. It provides a guide of possible courses, and career options for you to consider as you think about your future, aligned to your individual strengths and interests.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                The assessment assists young adults to be self-aware, understand their personality, identify their interests, passions, values and abilities, and ultimately make informed decisions about their future. Whether you're transitioning from school to college or exploring career possibilities, GVA provides a bridge to help you gain clarity of career options.
              </p>
              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-lg text-accent mb-2">Shape Your Future with GVA</h4>
                <p className="text-foreground">
                  Your Guide to Career Success. Do not wait any longer, start your journey to career success with GVA today.
                </p>
              </div>
              <Link href="/contact">
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold"
                  data-testid="gva-assessment-cta"
                >
                  Take GVA Assessment
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src={africanBusinessTeam}
                alt="African business professionals in strategic meeting"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="gva-assessment-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Coaching Programs */}
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Career Coaching Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coaching programs designed for different stages of your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Career Assessment"
              description="Discover Your Path to Success with the Vocational Assessment by Lafayette Resources. Unlock your true potential with a scientific guide to education and career planning. Our Vocational Assessment report provides students with a comprehensive understanding of their personality types, interests, abilities, qualities, and values."
              imageUrl={africanAssessmentSpecialist}
              imageAlt="Career assessment consultation session"
              linkHref="/contact"
            />

            <ServiceCard
              title="Academic & Career Planning - College Ready"
              description="Transform your future with Academic & Career Planning (ACP) College Ready! Our innovative program helps high school graduates discover themselves and identify career possibilities based on natural strengths and abilities. With the Vocational Assessment at the core of our coaching process, students receive personalized reports and expert guidance."
              imageUrl={africanCareerCoach}
              imageAlt="College planning session with young student"
              linkHref="/contact"
            />

            <ServiceCard
              title="Academic & Career Planning - Career Ready"
              description="Transform your career prospects with Academic & Career Planning (ACP) Career Ready! This targets college graduates, who are guided and coached on various career possibilities and they rank their choices in order of priority. Learn strategies of searching for jobs, including internships, presentability, CV writing and self-branding."
              imageUrl={africanCareerCoach}
              imageAlt="Career ready graduate planning session"
              linkHref="/contact"
            />

            <ServiceCard
              title="Career Transformation Coaching"
              description="The Career Transformation Coaching (CTC) program is designed for individuals seeking a shift in their career path and greater fulfillment in their professional lives. This four-step, scientifically-backed process guides individuals through the discovery of their true passions and purpose, helping them to make a successful career transition."
              imageUrl={africanCareerCoach}
              imageAlt="Career transformation coaching session"
              linkHref="/contact"
            />

            <ServiceCard
              title="Life & Soft Skills Training"
              description="Empowering Young Graduates with Essential Life & Soft Skills. While colleges provide students with valuable core skills, many graduates still lack the necessary soft skills needed for success in the workplace. This training program focuses on imparting critical life and soft skills that are highly valued by employers across various industries."
              imageUrl={africanTrainingSession}
              imageAlt="Soft skills training for young graduates"
              linkHref="/contact"
            />

            <ServiceCard
              title="Professional Development"
              description="Comprehensive professional development programs designed to enhance workplace readiness, communication skills, leadership capabilities, and career advancement strategies for professionals at all levels."
              imageUrl={africanCareerCoach}
              imageAlt="Professional development workshop"
              linkHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* Coaching Process */}
      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Our Coaching Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to career development and transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Assessment</h4>
                <p className="text-foreground">
                  Comprehensive evaluation of your personality, interests, values, and abilities through scientifically validated tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Analysis</h4>
                <p className="text-foreground">
                  Expert analysis of assessment results to identify strengths, opportunities, and potential career paths aligned with your profile.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Planning</h4>
                <p className="text-foreground">
                  Collaborative development of a personalized career plan with clear goals, strategies, and actionable steps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg text-center">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Action</h4>
                <p className="text-foreground">
                  Ongoing support and coaching to implement your career plan and achieve your professional goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-14 bg-accent text-accent-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Why Choose Our Career Coaching?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Scientific Approach</h4>
                    <p className="text-accent-foreground/80">Our assessments are scientifically validated and provide reliable insights into your career potential.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Personalized Guidance</h4>
                    <p className="text-accent-foreground/80">Every coaching program is tailored to your unique strengths, interests, and career aspirations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Proven Success</h4>
                    <p className="text-accent-foreground/80">Our clients have successfully transitioned to fulfilling careers across various industries in Africa and beyond.</p>
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
                    <p className="text-accent-foreground/80">We provide continued support throughout your career journey, not just during the initial coaching period.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={africanTrainingSession}
                alt="Successful African business team celebrating achievement"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="career-success-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Whether you're feeling unfulfilled or simply looking to explore new opportunities, our career coaching programs are the perfect starting point for anyone seeking a meaningful and rewarding career change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
                data-testid="transform-career-cta"
              >
                Start Your Career Transformation
              </Button>
            </Link>
            <a href="tel:+254722709005">
              <Button 
                variant="outline" 
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
                data-testid="discuss-career-goals-cta"
              >
                Discuss Your Career Goals
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
