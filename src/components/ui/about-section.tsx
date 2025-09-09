import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, Zap, Shield } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const features = [
  {
    icon: Target,
    title: "Expertise",
    description: "Our team comprises seasoned experts with deep understanding of industry-specific challenges and cutting-edge solutions."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of the curve by embracing the latest technologies and trends, ensuring your business remains competitive."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We work closely with you to understand your goals and tailor solutions to your objectives."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Quality is non-negotiable. We adhere to rigorous standards, ensuring every solution we deliver exceeds expectations."
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">About Us</Badge>
          <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Strategic Tech Solutions for{" "}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            At PCS Digital, we are not just a software solutions and services company; 
            we are your strategic partner in achieving digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
          <div className="relative">
            <img
              src={aboutImage}
              alt="PCS Digital team working on solutions"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-xl">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Delivering Excellence in Digital Transformation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With a passion for innovation and a commitment to delivering exceptional results, 
                we empower businesses to thrive in an ever-evolving technological landscape. Our 
                approach is client-centric, focusing on understanding your unique needs and challenges.
              </p>
            </div>
            
            <div>
              <p className="text-muted-foreground leading-relaxed">
                We provide a comprehensive range of services, from business consulting to application 
                development and SAP solutions. Quality is paramount, and we adhere to rigorous 
                standards to ensure every solution we deliver is of the highest caliber.
              </p>
            </div>
            
            <Button className="btn-shadow">
              More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="card-shadow border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-heading font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};