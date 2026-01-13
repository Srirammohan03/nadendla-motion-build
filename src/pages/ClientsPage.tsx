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
  { name: "Reliance Industrial", sector: "Industrial" },
  { name: "L&T Infrastructure", sector: "Infrastructure" },
  { name: "Kribhco Green Energy Pvt Ltd", sector: "Green Energy" },
  { name: "Pushpit Steels Pvt Ltd", sector: "Steel Manufacturing" },
  { name: "MS Agarwal Foundries", sector: "Foundry & Metals" },
  { name: "Maruthi Ispat Energy Pvt Ltd", sector: "Energy & Steel" },
  { name: "Sitaram Spinners Pvt Ltd", sector: "Textiles" },
  { name: "Rama Spinners Pvt Ltd", sector: "Textiles" },
  { name: "Excel Regreen Energy LLP", sector: "Renewable Energy" },
  { name: "Switch Gear Manufacturers Pvt Ltd", sector: "Electrical Equipment" },
  { name: "Bhudan Engineering Pvt Ltd", sector: "Engineering" },
  { name: "Sanathan Allied Industries", sector: "Manufacturing" },
  { name: "Run Flat Systems", sector: "Automotive Systems" },
];


const testimonials = [
  {
    name: "Rakesh Mehta",
    role: "Director, Reliance Industrial Projects",
    content:
      "Nadendla Constructions demonstrated exceptional execution capabilities. Their structured project management and strict adherence to safety and quality standards ensured timely delivery of our industrial facility.",
    rating: 5,
  },
  {
    name: "Suresh Iyer",
    role: "Senior Manager, L&T Infrastructure",
    content:
      "The Nadendla team brought strong technical expertise and on-ground coordination to our infrastructure project. Their professionalism and transparency throughout the project lifecycle were commendable.",
    rating: 5,
  },
  {
    name: "Anil Verma",
    role: "Project Head, Kribhco Green Energy Pvt Ltd",
    content:
      "Working with Nadendla Constructions was a highly positive experience. They clearly understand the requirements of green energy projects and delivered with precision and efficiency.",
    rating: 5,
  },
  {
    name: "Mahesh Agarwal",
    role: "Managing Partner, MS Agarwal Foundries",
    content:
      "Nadendla Constructions handled our foundry expansion project with great attention to detail. Their ability to manage complex industrial requirements sets them apart in the construction industry.",
    rating: 5,
  },
  {
    name: "Praveen Rao",
    role: "Operations Head, Maruthi Ispat Energy Pvt Ltd",
    content:
      "Their commitment to timelines and quality workmanship was evident from day one. Nadendla Constructions proved to be a reliable partner for our energy and steel infrastructure needs.",
    rating: 5,
  },
  {
    name: "Karthik Reddy",
    role: "Director, Excel Regreen Energy LLP",
    content:
      "Nadendla’s team executed our renewable energy facility with excellent coordination and technical accuracy. We truly appreciate their proactive approach and engineering expertise.",
    rating: 5,
  },
  {
    name: "Sunil Sharma",
    role: "Plant Head, Pushpit Steels Pvt Ltd",
    content:
      "From planning to execution, Nadendla Constructions maintained high standards of quality and safety. Their experience in industrial construction is clearly reflected in the final outcome.",
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
