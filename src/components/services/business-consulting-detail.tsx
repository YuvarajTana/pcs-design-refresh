import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Lightbulb, Target, TrendingUp, Users, CheckCircle, Clock, DollarSign } from "lucide-react";
import businessConsultingImg from "@/assets/business-consulting.jpg";

interface ServiceDetailProps {
  onBack: () => void;
}

export const BusinessConsultingDetail = ({ onBack }: ServiceDetailProps) => {
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
            <Badge variant="outline" className="mb-4">Business Consulting</Badge>
            <h1 className="text-4xl font-heading font-bold tracking-tight sm:text-5xl mb-6">
              Strategic Business <span className="gradient-text">Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Transform your business with strategic guidance that drives digital transformation 
              initiatives and optimizes your operations for maximum efficiency and growth.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Strategic</div>
                <div className="text-sm text-muted-foreground">Planning</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Growth</div>
                <div className="text-sm text-muted-foreground">Focused</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Expert</div>
                <div className="text-sm text-muted-foreground">Guidance</div>
              </div>
            </div>

            <Button size="lg" className="btn-shadow">
              Start Your Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={businessConsultingImg}
              alt="Business consulting team meeting"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-xl">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm">Successful Projects</div>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-6">What We Offer</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Lightbulb className="mr-3 h-5 w-5 text-primary" />
                  Digital Strategy & Roadmap
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop comprehensive digital transformation strategies aligned with your business objectives. 
                  We create detailed roadmaps that guide your organization through every step of the digital journey, 
                  ensuring sustainable growth and competitive advantage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="mr-3 h-5 w-5 text-primary" />
                  Process Optimization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Identify inefficiencies and streamline your business processes for maximum productivity. 
                  Our experts analyze your current workflows and recommend improvements that reduce costs, 
                  eliminate bottlenecks, and enhance overall operational efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingUp className="mr-3 h-5 w-5 text-primary" />
                  Technology Assessment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evaluate your current technology stack and identify opportunities for improvement. 
                  We provide detailed assessments of your IT infrastructure, software systems, and digital capabilities 
                  to ensure they align with your business goals and industry best practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="mr-3 h-5 w-5 text-primary" />
                  Change Management
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Navigate organizational change with confidence through our proven change management methodologies. 
                  We help your team adapt to new technologies and processes, ensuring smooth transitions and 
                  maximizing user adoption rates.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Card className="card-shadow border-0 sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Increased operational efficiency",
                    "Reduced operational costs",
                    "Enhanced competitive advantage",
                    "Improved decision-making processes",
                    "Better customer experiences",
                    "Scalable business processes"
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
                      <div className="font-semibold text-sm">Project Duration</div>
                      <div className="text-sm text-muted-foreground">4-12 weeks</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold text-sm">Investment</div>
                      <div className="text-sm text-muted-foreground">Custom quote</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 btn-shadow">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-heading font-bold text-center mb-12">Our Consulting Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business, challenges, and objectives" },
              { step: "02", title: "Analysis", description: "Deep dive into current processes and technology landscape" },
              { step: "03", title: "Strategy", description: "Develop customized solutions and implementation roadmap" },
              { step: "04", title: "Execution", description: "Support implementation and ensure successful outcomes" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};