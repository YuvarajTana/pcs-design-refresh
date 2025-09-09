import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Code, Smartphone, Globe, Database, CheckCircle, Clock, DollarSign } from "lucide-react";
import appDevelopmentImg from "@/assets/app-development.jpg";

interface ServiceDetailProps {
  onBack: () => void;
}

export const AppDevelopmentDetail = ({ onBack }: ServiceDetailProps) => {
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
            <Badge variant="outline" className="mb-4">Application Development</Badge>
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-6">
              Custom <span className="gradient-text">Application Development</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Build powerful, scalable applications tailored to your specific business requirements. 
              From web applications to mobile apps and enterprise software solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Modern</div>
                <div className="text-sm text-muted-foreground">Technology</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Smartphone className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Mobile</div>
                <div className="text-sm text-muted-foreground">First</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Scalable</div>
                <div className="text-sm text-muted-foreground">Architecture</div>
              </div>
            </div>

            <Button size="lg" className="btn-shadow">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={appDevelopmentImg}
              alt="Application development team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-xl">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm">Apps Delivered</div>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-6">Development Services</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Globe className="mr-3 h-5 w-5 text-primary" />
                  Web Applications
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modern, responsive web applications built with cutting-edge technologies like React, Vue.js, and Angular. 
                  We create fast, secure, and user-friendly web solutions that work seamlessly across all devices and browsers.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React", "Vue.js", "Angular", "Node.js", "Python", "PHP"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Smartphone className="mr-3 h-5 w-5 text-primary" />
                  Mobile Applications
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Native and cross-platform mobile apps for iOS and Android. From simple utilities to complex enterprise 
                  applications, we deliver mobile solutions that provide exceptional user experiences and robust functionality.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Database className="mr-3 h-5 w-5 text-primary" />
                  Enterprise Software
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Large-scale enterprise applications designed to handle complex business processes and high user volumes. 
                  Built with scalability, security, and maintainability as core principles.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Java", ".NET", "Microservices", "Docker", "Kubernetes"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Code className="mr-3 h-5 w-5 text-primary" />
                  API Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Robust APIs and microservices that enable seamless integration between systems. RESTful and GraphQL APIs 
                  designed for performance, security, and scalability.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["REST API", "GraphQL", "WebSocket", "OAuth", "JWT"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="card-shadow border-0 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {[
                    "Custom application architecture",
                    "Responsive and mobile-first design",
                    "Advanced security implementation",
                    "Third-party system integration",
                    "Performance optimization",
                    "Ongoing maintenance & support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Development Time</div>
                      <div className="text-sm text-muted-foreground">8-24 weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Starting From</div>
                      <div className="text-sm text-muted-foreground">$25,000</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 btn-shadow">
                  Get Estimate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-heading font-bold text-center mb-12">Technologies We Use</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Vue.js", "Angular", "Node.js", "Python", "Java",
              "React Native", "Flutter", "Swift", "Kotlin", "PostgreSQL", "MongoDB"
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-semibold text-primary">{tech.substring(0, 3).toUpperCase()}</span>
                </div>
                <div className="text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};