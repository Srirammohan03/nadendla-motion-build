import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { Search, Settings, Rocket } from "lucide-react";
import teamImage from "@/assets/team-construction.jpg";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Research & Analysis",
    description: "We begin with thorough research and analysis of your project requirements, site conditions, and objectives to develop a comprehensive plan.",
  },
  {
    number: "2",
    icon: Settings,
    title: "Industry Development",
    description: "Our expert team develops detailed engineering solutions, optimizing for efficiency, safety, and sustainability throughout the construction process.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Production Launch",
    description: "We execute the project with precision, ensuring timely delivery while maintaining the highest standards of quality and safety.",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative section-padding overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <Parallax speed={-15} className="absolute inset-0 h-[130%] -top-[15%]">
          <img
            src={teamImage}
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-primary/90" />
        {/* Moving gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-semibold mb-2 tracking-wider uppercase text-sm">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-4">
            Our Process
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            A systematic approach that ensures every project is delivered with 
            excellence, on time, and within budget.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-primary-foreground/30" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative text-center"
            >
              {/* Icon Container */}
              <div className="relative inline-block mb-8">
                <div className="w-32 h-32 rounded-full border-2 border-accent/30 flex items-center justify-center mx-auto bg-primary/50 backdrop-blur-sm">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-accent" />
                  </div>
                </div>
                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-accent">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
