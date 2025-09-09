import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Lightbulb, Wrench, BarChart3, Cloud } from "lucide-react";
import { BusinessConsultingDetail } from "@/components/services/business-consulting-detail";
import { AppDevelopmentDetail } from "@/components/services/app-development-detail";
import { CloudServicesDetail } from "@/components/services/cloud-services-detail";

const services = [
  {
    id: "business-consulting",
    icon: Lightbulb,
    title: "Business Consulting",
    description: "Strategic guidance to optimize your business processes and drive digital transformation initiatives.",
    features: ["Digital Strategy", "Process Optimization", "Technology Roadmap", "Change Management"],
    image: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  {
    id: "app-development",
    icon: Code,
    title: "Application Development",
    description: "Custom software solutions tailored to your specific business requirements and industry needs.",
    features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"],
    image: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  {
    id: "advisory-services",
    icon: BarChart3,
    title: "Advisory Services",
    description: "Expert advice on technology selection, architecture design, and implementation strategies.",
    features: ["Technology Assessment", "Architecture Review", "Best Practices", "Risk Analysis"],
    image: "bg-gradient-to-br from-purple-50 to-violet-100"
  },
  {
    id: "data-migration",
    icon: Database,
    title: "Data Migration",
    description: "Seamless data migration services ensuring data integrity and minimal business disruption.",
    features: ["Data Assessment", "Migration Planning", "Quality Assurance", "Post-Migration Support"],
    image: "bg-gradient-to-br from-orange-50 to-amber-100"
  },
  {
    id: "implementation",
    icon: Wrench,
    title: "Implementation & Transformation",
    description: "End-to-end implementation of enterprise solutions with comprehensive transformation support.",
    features: ["System Implementation", "User Training", "Go-Live Support", "Optimization"],
    image: "bg-gradient-to-br from-red-50 to-rose-100"
  },
  {
    id: "cloud-services",
    icon: Cloud,
    title: "Cloud Services",
    description: "Modern cloud solutions to enhance scalability, security, and operational efficiency.",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps", "Monitoring"],
    image: "bg-gradient-to-br from-cyan-50 to-blue-100"
  }
];

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  if (selectedService === "business-consulting") {
    return <BusinessConsultingDetail onBack={handleBackToServices} />;
  }

  if (selectedService === "app-development") {
    return <AppDevelopmentDetail onBack={handleBackToServices} />;
  }

  if (selectedService === "cloud-services") {
    return <CloudServicesDetail onBack={handleBackToServices} />;
  }
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
            <Card 
              key={index} 
              className="group card-shadow border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden"
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Service Header with Gradient */}
              <div className={`h-24 ${service.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-md text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>

              <CardContent className="p-6 pt-4">
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-primary font-medium">
                      +{service.features.length - 3} more services
                    </div>
                  )}
                </div>
                
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark w-full justify-start group-hover:bg-primary/5">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 mb-8">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the right services for your digital transformation journey. 
              Get a free consultation and custom solution proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-shadow">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};