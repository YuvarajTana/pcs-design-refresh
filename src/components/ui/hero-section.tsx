import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Digital transformation background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20">
              ✨ Leading Digital Transformation Partner
            </span>
          </div>
          
          <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Strategic Tech Solutions for{" "}
            <span className="text-secondary">Your Business</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
            Navigate the digital age with confidence. We are your trusted partner for comprehensive 
            digital transformations, innovative software solutions, and SAP services that drive growth.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            <Button size="lg" variant="secondary" className="btn-shadow text-base px-8 py-4">
              Discover Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};