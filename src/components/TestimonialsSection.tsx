import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rakesh Mehta",
    role: "Director, Reliance Industrial Projects",
    content:
      "Nadendla Constructions showcased exceptional project execution skills. Their disciplined approach and commitment to quality ensured timely completion of our industrial facility.",
    rating: 5,
  },
  {
    id: 2,
    name: "Suresh Iyer",
    role: "Senior Manager, L&T Infrastructure",
    content:
      "The team demonstrated strong engineering expertise and seamless coordination. Nadendla Constructions delivered our infrastructure project with precision and professionalism.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anil Verma",
    role: "Project Head, Kribhco Green Energy Pvt Ltd",
    content:
      "Their understanding of green energy infrastructure requirements is outstanding. Execution was smooth, efficient, and aligned with sustainability goals.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mahesh Agarwal",
    role: "Managing Partner, MS Agarwal Foundries",
    content:
      "Nadendla handled our foundry expansion with excellent planning and execution. Their industrial construction experience truly reflects in the final outcome.",
    rating: 5,
  },
  {
    id: 5,
    name: "Praveen Rao",
    role: "Operations Head, Maruthi Ispat Energy Pvt Ltd",
    content:
      "From project planning to handover, Nadendla Constructions maintained high quality and safety standards. A dependable construction partner.",
    rating: 5,
  },
  {
    id: 6,
    name: "Karthik Reddy",
    role: "Director, Excel Regreen Energy LLP",
    content:
      "Their proactive approach and technical clarity made execution effortless. We highly appreciate their professionalism in renewable energy projects.",
    rating: 5,
  },
  {
    id: 7,
    name: "Sunil Sharma",
    role: "Plant Head, Pushpit Steels Pvt Ltd",
    content:
      "Nadendla Constructions delivered our steel facility on schedule without compromising quality. Excellent workmanship and coordination.",
    rating: 5,
  },
];

// const clientLogos = [
//   "/assets/images/outright_creators_logo.jpg",
//   "/assets/images/iron.jpg",
//   "/assets/images/iron-3.avif",
//   "/assets/images/iron-2.png",
//   "/assets/images/ab-cement.jpg",
//   "/assets/images/6.jpg",
// ];

const clients = [
  {
    name: "L&T Infrastructure",
    sector: "Infrastructure",
  },
  {
    name: "Kribhco Green Energy Pvt Ltd",
    sector: "Green Energy",
  },
  {
    name: "Pushpit Steels Pvt Ltd",
    sector: "Steel Manufacturing",
  },
  {
    name: "MS Agarwal Foundries",
    sector: "Foundry & Metals",
  },
];


export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary uppercase tracking-wide">
                Testimonials
              </h2>
              <div className="h-1 w-12 bg-accent" />
            </div>

            <div className="relative">
              <Quote className="h-12 w-12 text-accent/30 mb-4" />

              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg font-tagline italic text-muted-foreground mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <div>
                  <div className="font-heading font-bold text-primary">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center hover:border-accent hover:bg-accent hover:text-primary-foreground transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center hover:border-accent hover:bg-accent hover:text-primary-foreground transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-heading font-bold text-primary uppercase tracking-wide">
                Our Clients
              </h2>
              <div className="h-1 w-12 bg-accent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-border bg-white p-8 text-center transition-all hover:border-accent hover:shadow-soft"
                >
                  {/* Initial Circle */}
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <span className="text-2xl font-heading font-bold text-accent">
                      {client.name.charAt(0)}
                    </span>
                  </div>

                  {/* Company Name */}
                  <h3 className="font-heading text-lg font-bold text-primary mb-1">
                    {client.name}
                  </h3>

                  {/* Sector */}
                  <p className="text-sm text-muted-foreground">
                    {client.sector}
                  </p>
                </motion.div>
              ))}
            </div>
            <button className="mt-8 text-muted-foreground hover:text-accent font-semibold text-sm flex items-center gap-2 transition-colors">
              <a
                href="/clients"
                className="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-accent font-semibold text-sm transition-colors"
              >
                View All Our Clients
                <ChevronRight className="h-4 w-4" />
              </a>

            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
