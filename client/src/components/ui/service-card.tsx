import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkHref: string;
  linkText?: string;
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
  imageAlt,
  linkHref,
  linkText = "Learn More",
}: ServiceCardProps) {
  return (
    <Card className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow group">
      <CardContent className="p-8">
        <img 
          src={imageUrl}
          alt={imageAlt}
          className="rounded-lg w-full h-48 object-cover mb-6"
          data-testid={`service-image-${title.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <h3 className="montserrat font-semibold text-xl text-accent mb-4" data-testid={`service-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-foreground leading-relaxed mb-6" data-testid={`service-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
        <Link 
          href={linkHref} 
          className="text-primary font-semibold hover:text-primary/80 transition-colors group-hover:underline"
          data-testid={`service-link-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {linkText} →
        </Link>
      </CardContent>
    </Card>
  );
}
