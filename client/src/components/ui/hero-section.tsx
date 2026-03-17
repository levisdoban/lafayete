import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl: string;
  imageAlt: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageUrl,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="montserrat font-bold text-4xl lg:text-6xl leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl lg:text-2xl font-light mb-8 text-primary-foreground/90">
                {subtitle}
              </p>
            )}
            <p className="text-lg mb-8 text-primary-foreground/80 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={primaryButtonLink}>
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                  data-testid="hero-primary-button"
                >
                  {primaryButtonText}
                </Button>
              </Link>
              {secondaryButtonText && secondaryButtonLink && (
                <Link href={secondaryButtonLink}>
                  <Button 
                    variant="outline" 
                    className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                    data-testid="hero-secondary-button"
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="relative">
            <img 
              src={imageUrl}
              alt={imageAlt}
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
