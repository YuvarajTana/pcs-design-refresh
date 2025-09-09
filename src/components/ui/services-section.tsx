import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Lightbulb, Wrench, BarChart3, Cloud } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Business Consulting",
    description: "Strategic guidance to optimize your business processes and drive digital transformation initiatives.",
    features: ["Digital Strategy", "Process Optimization", "Technology Roadmap", "Change Management"]
  },
  {
    icon: Code,
    title: "Application Development",
    description: "Custom software solutions tailored to your specific business requirements and industry needs.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"]
  },
  {
    icon: BarChart3,
    title: "Advisory Services",
    description: "Expert advice on technology selection, architecture design, and implementation strategies.",
    features: ["Technology Assessment", "Architecture Review", "Best Practices", "Risk Analysis"]
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Seamless data migration services ensuring data integrity and minimal business disruption.",
    features: ["Data Assessment", "Migration Planning", "Quality Assurance", "Post-Migration Support"]
  },
  {
    icon: Wrench,
    title: "Implementation & Transformation",
    description: "End-to-end implementation of enterprise solutions with comprehensive transformation support.",
    features: ["System Implementation", "User Training", "Go-Live Support", "Optimization"]
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Modern cloud solutions to enhance scalability, security, and operational efficiency.",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps", "Monitoring"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">What We Do</Badge>
          <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Discover Our <span className="gradient-text">Expert Services</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Comprehensive solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group card-shadow border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:text-primary-dark">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-shadow">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};