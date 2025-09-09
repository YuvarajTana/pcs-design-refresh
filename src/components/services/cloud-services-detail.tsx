import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Cloud, Server, Shield, Zap, CheckCircle, Clock, DollarSign } from "lucide-react";
import cloudMigrationImg from "@/assets/cloud-migration.jpg";

interface ServiceDetailProps {
  onBack: () => void;
}

export const CloudServicesDetail = ({ onBack }: ServiceDetailProps) => {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Button>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div>
            <Badge variant="outline" className="mb-4">Cloud Services</Badge>
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-6">
              Modern <span className="gradient-text">Cloud Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Transform your infrastructure with comprehensive cloud services that enhance scalability, 
              security, and operational efficiency while reducing costs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Cloud className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Scalable</div>
                <div className="text-sm text-muted-foreground">Infrastructure</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Secure</div>
                <div className="text-sm text-muted-foreground">Environment</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">High</div>
                <div className="text-sm text-muted-foreground">Performance</div>
              </div>
            </div>

            <Button size="lg" className="btn-shadow">
              Start Migration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={cloudMigrationImg}
              alt="Cloud migration and services"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-xl">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-6">Cloud Services Portfolio</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Cloud className="mr-3 h-5 w-5 text-primary" />
                  Cloud Migration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seamless migration of your applications, data, and infrastructure to the cloud. We ensure minimal 
                  downtime and maximum efficiency throughout the migration process, with comprehensive planning and 
                  risk mitigation strategies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Server className="mr-3 h-5 w-5 text-primary" />
                  Infrastructure Setup
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Design and implement robust cloud infrastructure tailored to your specific needs. From basic hosting 
                  to complex multi-region deployments, we create scalable and cost-effective infrastructure solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Zap className="mr-3 h-5 w-5 text-primary" />
                  DevOps & Automation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Implement DevOps practices and automation pipelines to streamline your development and deployment 
                  processes. Continuous integration, continuous deployment, and automated testing for faster releases.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="mr-3 h-5 w-5 text-primary" />
                  Security & Compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive security implementation including encryption, access controls, monitoring, and compliance 
                  with industry standards. Protect your data and applications with enterprise-grade security measures.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Card className="card-shadow border-0 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Reduced infrastructure costs",
                    "Improved scalability & flexibility",
                    "Enhanced security & compliance",
                    "24/7 monitoring & support",
                    "Disaster recovery & backup",
                    "Global availability & performance"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Migration Time</div>
                      <div className="text-sm text-muted-foreground">2-8 weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Cost Savings</div>
                      <div className="text-sm text-muted-foreground">Up to 30%</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 btn-shadow">
                  Get Assessment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Cloud Providers */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-heading font-bold text-center mb-12">Cloud Platforms We Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amazon Web Services",
                description: "Comprehensive cloud platform with 200+ services",
                services: ["EC2", "S3", "RDS", "Lambda", "CloudFront"]
              },
              {
                name: "Microsoft Azure",
                description: "Enterprise-grade cloud platform and services",
                services: ["Virtual Machines", "Storage", "SQL Database", "Functions", "CDN"]
              },
              {
                name: "Google Cloud Platform",
                description: "Modern cloud infrastructure and AI services",
                services: ["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions", "CDN"]
              }
            ].map((platform, index) => (
              <Card key={index} className="card-shadow border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cloud className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {platform.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">{service}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};