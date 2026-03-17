import HeroSection from "@/components/ui/hero-section";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import africanBusinessPresenting from "@assets/generated_images/African_businessman_presenting_b8376f1c.png";
import africanTrainingSession from "@assets/generated_images/African_professionals_training_session_81664681.png";
import {
  BarChart3,
  Briefcase,
  BookOpen,
  Users,
  Zap,
  DollarSign,
  ShieldCheck,
  Target,
  HeartHandshake,
  ArrowRightLeft,
  Mic,
  Lock,
  Award,
  UserCheck,
  ClipboardList,
  TrendingUp,
  Layers,
  CheckCircle,
} from "lucide-react";

export default function Assessments() {
  return (
    <div>
      <HeroSection
        title="Assessment Tools & Talent Optimization"
        subtitle="A Strategic Behavioral & Psychometric Talent Management Solution"
        description="Personal Development Analysis (PDA) is a globally recognized behavioral and psychometric assessment platform designed to help organizations select, manage, develop, and retain top talent through scientifically validated people analytics."
        primaryButtonText="Get Assessment"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#pda-section"
        imageUrl={africanBusinessPresenting}
        imageAlt="Diverse team analyzing performance metrics"
      />

      <section id="pda-section" className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="montserrat font-bold text-3xl lg:text-4xl text-accent mb-6">
                Introducing PDA — A Strategic Talent Intelligence Solution
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                PDA applies a simple, precise, and research-backed methodology to analyze individual behavioral profiles and identify:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Core talents and strengths",
                  "Motivational drivers",
                  "Key competencies and skills",
                  "Leadership and management potential",
                  "Decision-making styles",
                  "Areas for development and performance optimization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-lg text-accent mb-2">Scientific Validation</h4>
                <p className="text-foreground">
                  PDA is scientifically validated with over 86% reliability by the AIOBP, providing accurate and actionable workforce data on employee role behavior, competencies, workplace motivation, and performance drivers.
                </p>
              </div>
              <p className="text-foreground leading-relaxed mb-8">
                Recognized globally as one of the most effective tools for self-awareness and talent management, PDA is trusted by leading organizations across industries to enhance people decisions and build high-performance cultures.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <p className="text-foreground font-medium">
                  Lafayette Resources has been a certified PDA International Partner since 2013, delivering PDA solutions across Kenya and the East African region, supporting organizations in strengthening their talent systems and leadership pipelines.
                </p>
              </div>
            </div>
            <div>
              <img
                src={africanTrainingSession}
                alt="Professional assessment session with diverse team"
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="pda-assessment-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">
              PDA Across the Talent Management Lifecycle
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              PDA supports organizations across the entire employee lifecycle, ensuring smarter talent decisions at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-6 h-6 text-primary" />,
                title: "Recruitment & Talent Search",
                points: [
                  "Matches candidates to predefined or customized job profiles",
                  "Reduces hiring risks and improves role-fit accuracy",
                  "Enhances selection confidence and lowers turnover",
                ],
              },
              {
                icon: <ClipboardList className="w-6 h-6 text-primary" />,
                title: "Job Profiling & Workforce Planning",
                points: [
                  "Defines behavioral and competency requirements per role",
                  "Aligns job expectations with performance realities",
                ],
              },
              {
                icon: <BookOpen className="w-6 h-6 text-primary" />,
                title: "Training, Learning & Development",
                points: [
                  "Identifies skill gaps and development priorities",
                  "Personalizes training programs based on behavioral data",
                  "Strengthens team capability and performance",
                ],
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-primary" />,
                title: "Leadership Development & Succession Planning",
                points: [
                  "Identifies leadership potential early",
                  "Guides targeted leadership interventions",
                  "Supports succession planning and internal talent pipelines",
                ],
              },
              {
                icon: <Target className="w-6 h-6 text-primary" />,
                title: "Coaching & Performance Optimization",
                points: [
                  "Enables structured coaching based on individual profiles",
                  "Accelerates behavioral transformation and growth",
                  "Improves accountability and self-awareness",
                ],
              },
              {
                icon: <DollarSign className="w-6 h-6 text-primary" />,
                title: "Sales Performance & Commercial Screening",
                points: [
                  "Benchmarks high-performing sales profiles",
                  "Matches sales talent to proven success traits",
                  "Drives revenue growth through targeted capability development",
                ],
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Team Effectiveness & Organizational Dynamics",
                points: [
                  "Provides team synergy and behavioral trend reports",
                  "Enhances collaboration, cohesion, and productivity",
                  "Supports conflict resolution and team-building initiatives",
                ],
              },
              {
                icon: <UserCheck className="w-6 h-6 text-primary" />,
                title: "Empowering Leaders & Managers",
                points: [
                  "Enables leaders to understand individual work styles",
                  "Supports situational leadership and motivation",
                  "Strengthens people management effectiveness",
                ],
              },
              {
                icon: <HeartHandshake className="w-6 h-6 text-primary" />,
                title: "Conflict Resolution & Workplace Harmony",
                points: [
                  "Helps address personality-driven conflicts",
                  "Improves communication and interpersonal effectiveness",
                ],
              },
              {
                icon: <ArrowRightLeft className="w-6 h-6 text-primary" />,
                title: "Outplacement & Career Transitions",
                points: [
                  "Supports employee career realignment",
                  "Guides transitions into new roles or projects",
                ],
              },
            ].map((item) => (
              <Card key={item.title} className="bg-card shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h4 className="montserrat font-semibold text-lg text-accent mb-3">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span className="text-foreground text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">
              Why PDA? — Strategic Advantages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Scientifically Reliable & Predictive</h4>
                <p className="text-foreground leading-relaxed">
                  PDA is a validated and predictive assessment tool designed to understand and forecast workplace behavior, supporting employees throughout their professional growth journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <Layers className="w-10 h-10 text-primary mb-4" />
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">End-to-End Talent Measurement</h4>
                <p className="text-foreground leading-relaxed">
                  Comprehensive people analytics enabling data-driven decisions in talent identification, performance management, cultural transformation, workforce planning, leadership development, and self-awareness.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Fast, Digital & Scalable</h4>
                <p className="text-foreground leading-relaxed">
                  Online assessment completed in 10–15 minutes. Reports generated quickly and efficiently. Cloud-based platform enabling easy access and scalability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Multilingual & Globally Accessible</h4>
                <p className="text-foreground leading-relaxed">
                  The PDA platform supports nine international languages, making it suitable for diverse and multinational teams.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Flexible Delivery Model</h4>
                <p className="text-foreground leading-relaxed">
                  Partner with Lafayette Resources for full-service assessment and reporting, or acquire your own PDA platform through Lafayette Resources for internal use, supported by PDA Analyst training and accreditation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <UserCheck className="w-10 h-10 text-primary mb-4" />
                <h4 className="montserrat font-semibold text-lg text-accent mb-3">Custom Job Profiling</h4>
                <p className="text-foreground leading-relaxed">
                  Use predefined job profiles or design customized job profiles aligned to required competencies and behaviors. This ensures greater hiring accuracy, reduced turnover, and higher performance alignment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">
              PDA Reports — Transforming Data Into Smart People Decisions
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              PDA provides up to five specialized reports, each designed to support strategic people decisions.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold montserrat">Report Type</th>
                  <th className="px-6 py-4 text-left font-semibold montserrat">Key Outcome</th>
                  <th className="px-6 py-4 text-left font-semibold montserrat">Organizational Application</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: "Behavioral Profile Report",
                    outcome: "Deep insight into work style, motivators, leadership potential, competencies, emotional intelligence, job fit, and development areas",
                    application: "Recruitment, coaching, performance management, leadership development",
                  },
                  {
                    type: "Leadership Matching Report",
                    outcome: "Aligns manager and employee styles to improve communication, motivation, and productivity",
                    application: "Situational leadership, employee engagement, productivity improvement",
                  },
                  {
                    type: "Job Fit Report (Individual/Group)",
                    outcome: "Measures candidate alignment to role requirements",
                    application: "Recruitment, talent search, hiring accuracy, turnover reduction",
                  },
                  {
                    type: "Competency Matching Report",
                    outcome: "Matches individuals to role-specific competencies and ranks capability levels",
                    application: "Selection, training prioritization, talent development",
                  },
                  {
                    type: "Group Trends & Team Mapping Report",
                    outcome: "Analyzes team behavioral trends, strengths, and collaboration dynamics",
                    application: "Team development, conflict management, team-building programs",
                  },
                ].map((row, index) => (
                  <tr key={row.type} className={index % 2 === 0 ? "bg-card" : "bg-card/50"}>
                    <td className="px-6 py-4 font-semibold text-accent">{row.type}</td>
                    <td className="px-6 py-4 text-foreground">{row.outcome}</td>
                    <td className="px-6 py-4 text-foreground">{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground mt-8 text-lg italic">
            PDA reports are not just analytics — they are decision-making tools that enable better hiring, leadership, and development outcomes.
          </p>
        </div>
      </section>

      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">
              Advanced Features & Value-Adding Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Mic className="w-10 h-10 text-primary" />
                <h3 className="montserrat font-semibold text-2xl text-accent">Audio Feedback</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                PDA offers audio-based feedback, enhancing report interpretation and engagement. Lafayette Resources also facilitates group feedback sessions upon request.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <ClipboardList className="w-10 h-10 text-primary" />
                <h3 className="montserrat font-semibold text-2xl text-accent">PDA-Guided Interviews</h3>
              </div>
              <p className="text-foreground leading-relaxed">
                Lafayette Resources provides a scientifically designed PDA-guided interview framework, enabling recruitment teams to conduct more structured and objective interviews, validate assessment insights, and make stronger, evidence-based hiring decisions.
              </p>
            </div>
          </div>

          <div>
            <h3 className="montserrat font-semibold text-2xl text-accent mb-6 text-center">PDA Competency Models</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Future Competencies Model",
                "Generic Competencies Model",
                "Digital Competencies Model",
                "Agile Competencies Model",
                "Entrepreneurship Competencies Model",
                "VUCA Change Leadership Competencies",
              ].map((model) => (
                <div key={model} className="flex items-center gap-3 bg-background rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{model}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 text-center">
              These models help organizations understand performance effort, develop capability, and future-proof talent.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Lock className="w-12 h-12 text-primary mb-6" />
              <h2 className="montserrat font-bold text-3xl text-accent mb-6">
                Security, Compliance & Technology Standards
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                PDA operates on a secure cloud-based platform and complies with General Data Protection Regulation (GDPR) standards, ensuring data privacy, confidentiality, and integrity.
              </p>
            </div>

            <div>
              <h3 className="montserrat font-semibold text-2xl text-accent mb-6">Proven Success & Market Credibility</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Sample clients currently leveraging PDA for talent management include:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "KPLC",
                  "Equity Bank",
                  "Ecobank",
                  "Kenya Airways",
                  "Jubilee Insurance",
                  "Promasidor",
                  "HELP Logistics",
                  "Strathmore University",
                  "Stima Sacco",
                  "Brighter Monday",
                ].map((company) => (
                  <li key={company} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">{company}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                The above demonstrates PDA's credibility, scalability, and effectiveness across different industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="montserrat font-bold text-3xl lg:text-5xl text-accent mb-6">Additional PDA Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="montserrat font-semibold text-xl text-accent mb-4">PDA 360° Feedback</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  Holistic performance insights through comprehensive 360-degree feedback. Quantitative and qualitative assessment of key competencies from co-workers, supervisors, and peers.
                </p>
                <Link href="/contact" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="montserrat font-semibold text-xl text-accent mb-4">MyPDACoach</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  An online coaching platform supporting individual growth journeys. Leverage PDA insights to achieve individual and team success through personalized transformation.
                </p>
                <Link href="/contact" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="montserrat font-semibold text-xl text-accent mb-4">Global Vocational Assessment (GVA)</h3>
                <p className="text-foreground leading-relaxed mb-6">
                  A guide to educational and career planning. Provides possible courses and career options aligned to your individual strengths and interests.
                </p>
                <Link href="/career-coaching" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="montserrat font-bold text-3xl lg:text-5xl mb-6">Why Partner With Lafayette Resources?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Lafayette Resources brings deep expertise in talent assessment, leadership development, and workforce optimization. We facilitate PDA assessments, generate actionable reports and insights, support recruitment, development, and succession planning, and deliver data that strengthens individual growth, team performance, and leadership pipelines.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left">
            {[
              "Hire smarter",
              "Develop stronger leaders",
              "Promote wisely",
              "Apply succession planning scientifically",
              "Align people to purpose",
              "Build sustainable organizational growth",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold"
                data-testid="get-assessment-cta"
              >
                Get Your Assessment Today
              </Button>
            </Link>
            <a href="tel:+254722709005">
              <Button
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold"
                data-testid="speak-expert-cta"
              >
                Speak with an Expert
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
