import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <Parallax speed={-15} className="absolute inset-0 h-[140%] -top-[20%]">
          <img src={heroImage} alt="Construction background" className="w-full h-full object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-accent/40" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-accent/30 via-transparent to-accent/30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-tagline italic text-accent text-lg mb-4">
            Ready to Build Your Vision?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground mb-6">
            Let's Build Together
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl">
            Whether you're planning an industrial facility, commercial complex, or 
            infrastructure project, our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              <Phone className="mr-2 h-5 w-5" />
              +91 98765 43210
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
