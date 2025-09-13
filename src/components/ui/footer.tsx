import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Linkedin, Youtube, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "SAP Solutions", href: "#sap" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" }
];

const services = [
  { name: "Application Development", href: "#" },
  { name: "Business Consulting", href: "#" },
  { name: "Implementation & Transformations", href: "#" },
  { name: "Migration & Upgrades", href: "#" },
  { name: "Application Advisory Services", href: "#" }
];

const industries = [
  { name: "Automotive", href: "#" },
  { name: "Manufacturing", href: "#" },
  { name: "Healthcare", href: "#" },
  { name: "E-Commerce & Retail", href: "#" },
  { name: "Logistics & Supply Chain", href: "#" },
  { name: "Financial Services", href: "#" }
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/pras-digital-technologies/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@pcsdigitaltech", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/PCSDigial.official", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/pcsdigitaltech/", label: "Instagram" }
];

export const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-navy-light">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Stay Updated with Our Latest Insights
              </h3>
              <p className="text-navy-foreground/80">
                Get the latest news, insights, and updates from PCS Digital delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-navy-light border-navy-light text-navy-foreground placeholder:text-navy-foreground/60"
              />
              <Button variant="secondary" className="btn-shadow whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-2xl font-heading font-bold text-secondary">PCS Digital</span>
              </div>
              <p className="text-navy-foreground/80 mb-6 leading-relaxed">
                Explore our comprehensive services, from SAP solutions to cloud services. 
                Unlock innovation and efficiency with PCS Digital - your trusted partner 
                for digital transformation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="text-sm">contact@pcsdigitaltech.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-sm">+91 8328627323</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-sm">4/19 , 2nd Floor , 20th Main Road , Maruthi Nagar Main Rd , Chikka Madivala , BTM 1st Stage , Bengaluru , Karnataka 560068</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-navy-light rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-navy-foreground/80 hover:text-secondary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-navy-foreground/80 hover:text-secondary transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-heading font-semibold mb-6">Industries</h4>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry.name}>
                    <a
                      href={industry.href}
                      className="text-navy-foreground/80 hover:text-secondary transition-colors text-sm"
                    >
                      {industry.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-navy-light" />

        {/* Copyright */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-navy-foreground/60 text-sm">
            © 2023 Pras Consultancy Services Private Limited. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-navy-foreground/60 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-navy-foreground/60 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};