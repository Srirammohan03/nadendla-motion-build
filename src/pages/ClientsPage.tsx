import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-construction.jpg";

const clients = [
  { name: "Tata Industries", sector: "Industrial" },
  { name: "Reliance Infrastructure", sector: "Infrastructure" },
  { name: "L&T Construction", sector: "Commercial" },
  { name: "Godrej Properties", sector: "Real Estate" },
  { name: "Adani Group", sector: "Industrial" },
  { name: "Mahindra Lifespaces", sector: "Commercial" },
  { name: "BHEL", sector: "Industrial" },
  { name: "NTPC", sector: "Power" },
  { name: "ONGC", sector: "Oil & Gas" },
  { name: "Indian Railways", sector: "Infrastructure" },
  { name: "Metro Rail Corp", sector: "Infrastructure" },
  { name: "State Highways", sector: "Infrastructure" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Kumar Industries",
    content: "Nadendla Constructions delivered our industrial facility ahead of schedule. Their attention to detail and commitment to quality is unmatched. Highly recommended for any large-scale construction project.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Managing Director, Sharma Enterprises",
    content: "Working with Nadendla was a seamless experience. Their team's expertise in commercial construction helped us create a workspace that truly reflects our brand. Outstanding work!",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    role: "Project Manager, Metro Corp",
    content: "The professionalism and technical excellence of Nadendla Constructions is remarkable. They handled our complex infrastructure project with utmost precision and delivered exceptional results.",
    rating: 5,
  },
];

const ClientsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Our Clients" 
          subtitle="Trusted by industry leaders across sectors"
        />

        {/* Client Logos */}
        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">Trusted Partners</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-4">
                Companies We've Worked With
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/30 hover:shadow-elevated transition-all"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-heading font-bold text-accent">{client.name[0]}</span>
                  </div>
                  <h3 className="font-heading font-bold text-primary">{client.name}</h3>
                  <p className="text-muted-foreground text-sm">{client.sector}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative section-padding overflow-hidden">
          <div className="absolute inset-0">
            <Parallax speed={-10} className="absolute inset-0 h-[120%] -top-[10%]">
              <img src={heroImage} alt="Background" className="w-full h-full object-cover" />
            </Parallax>
            <div className="absolute inset-0 bg-primary/95" />
          </div>

          <div className="container-custom mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Quote className="h-12 w-12 text-accent/50 mx-auto mb-6" />
              
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl font-tagline italic text-primary-foreground/90 mb-6">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="font-heading font-bold text-primary-foreground">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </motion.div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:bg-accent transition-all"
                >
                  <ChevronLeft className="h-6 w-6 text-primary-foreground" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:border-accent hover:bg-accent transition-all"
                >
                  <ChevronRight className="h-6 w-6 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ClientsPage;
