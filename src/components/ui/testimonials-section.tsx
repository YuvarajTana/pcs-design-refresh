import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "PCS Digital exceeded our expectations with their cloud services. The migration was seamless, and their ongoing support is top-notch. Their team's professionalism and responsiveness make them a trusted partner. We're now more agile and scalable, thanks to PCS.",
    author: "Varun Chakravarty",
    company: "Dynamo Info Solutions",
    rating: 5
  },
  {
    content: "PCS Digital has been a game-changer for our business. Their SAP solutions streamlined our operations, allowing us to focus on growth. Their team's expertise and commitment to excellence are truly remarkable. Thanks to PCS, we're more competitive than ever.",
    author: "Jay Bharath",
    company: "Krea Technologies",
    rating: 5
  },
  {
    content: "Working with PCS Digital was a transformative experience. Their dedication to understanding our industry-specific needs and delivering tailored solutions is commendable. The impact of their services on our logistics and supply chain operations has been invaluable.",
    author: "Vidya Sagar",
    company: "Organic Media",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Client Feedback</Badge>
          <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with PCS Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-shadow border-0 hover:scale-105 transition-transform duration-300 relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-4 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};