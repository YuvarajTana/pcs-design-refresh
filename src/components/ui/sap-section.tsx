import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Settings, TrendingUp, Shield, Zap } from "lucide-react";

const sapServices = [
  {
    icon: Settings,
    title: "SAP Implementation",
    description: "Complete SAP system implementation with industry best practices and proven methodologies."
  },
  {
    icon: TrendingUp,
    title: "SAP Optimization",
    description: "Performance tuning and optimization to maximize your SAP investment and efficiency."
  },
  {
    icon: Shield,
    title: "SAP Support",
    description: "24/7 support services to ensure your SAP systems run smoothly and efficiently."
  },
  {
    icon: Zap,
    title: "SAP Migration",
    description: "Seamless migration to latest SAP versions with minimal business disruption."
  }
];

export const SAPSection = () => {
  return (
    <section id="sap" className="py-24 section-gradient">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">SAP Solutions</Badge>
              <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Harness the Full Power of{" "}
                <span className="gradient-text">SAP</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Leverage the power of SAP services by PCS Digital to streamline your business 
                operations, enhance efficiency, and drive sustainable growth with tailored solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold">Industry Expertise</h4>
                  <p className="text-muted-foreground">Deep knowledge across multiple industries and SAP modules.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold">Proven Methodology</h4>
                  <p className="text-muted-foreground">Time-tested implementation approaches ensuring project success.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold">Ongoing Support</h4>
                  <p className="text-muted-foreground">Comprehensive support services for long-term success.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="btn-shadow">
              Explore SAP Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {sapServices.map((service, index) => (
              <Card key={index} className="card-shadow border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-heading font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-navy rounded-2xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-heading font-bold text-navy-foreground mb-4">
              Ready to Transform Your Business with SAP?
            </h3>
            <p className="text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
              Discover tailored SAP solutions that propel your business forward. 
              Let our experts guide you through your digital transformation journey.
            </p>
            <Button variant="secondary" size="lg" className="btn-shadow">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute bottom-0 right-0 w-48 h-48 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};