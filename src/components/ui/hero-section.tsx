import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg-improved.jpg";
import dashboardImage from "@/assets/dashboard-preview.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20">
                <Star className="w-4 h-4 mr-2 text-secondary" />
                Leading Digital Transformation Partner
              </span>
            </div>
            
            <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Strategic Tech Solutions for{" "}
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                Your Business
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-xl lg:max-w-none">
              Navigate the digital age with confidence. We are your trusted partner for comprehensive 
              digital transformations, innovative software solutions, and SAP services that drive growth.
            </p>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                ISO 27001 Certified
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                Microsoft Gold Partner
              </div>
              <div className="flex items-center text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                SAP Certified
              </div>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6 flex-wrap gap-y-4">
              <Button size="lg" variant="secondary" className="btn-shadow text-base px-8 py-4 hover-scale">
                Discover Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm hover-scale"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <img
                src={dashboardImage}
                alt="Business analytics dashboard preview"
                className="rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-navy">Live Data</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                <div className="text-2xl font-bold text-navy">+127%</div>
                <div className="text-sm text-navy/70">Growth Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover-scale transition-all duration-300">
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-white/80 font-medium">Projects Delivered</div>
            <div className="text-white/60 text-sm mt-1">Across 25+ industries</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover-scale transition-all duration-300">
            <div className="text-4xl font-bold text-secondary mb-2">98%</div>
            <div className="text-white/80 font-medium">Client Satisfaction</div>
            <div className="text-white/60 text-sm mt-1">Verified by third-party</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover-scale transition-all duration-300">
            <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-white/80 font-medium">Support Available</div>
            <div className="text-white/60 text-sm mt-1">Global support team</div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};