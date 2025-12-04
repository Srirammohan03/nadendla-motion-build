import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { id: 1, title: "Industrial Plant Complex", category: "Industrial", status: "Completed", location: "Visakhapatnam", image: project1 },
  { id: 2, title: "Commercial Tower", category: "Commercial", status: "Ongoing", location: "Hyderabad", image: project2 },
  { id: 3, title: "Highway Bridge Construction", category: "Infrastructure", status: "Completed", location: "Vijayawada", image: project3 },
  { id: 4, title: "Manufacturing Unit", category: "Industrial", status: "Completed", location: "Chennai", image: project1 },
  { id: 5, title: "Shopping Mall", category: "Commercial", status: "Ongoing", location: "Bangalore", image: project2 },
  { id: 6, title: "Water Treatment Plant", category: "Infrastructure", status: "Completed", location: "Hyderabad", image: project3 },
  { id: 7, title: "Pharmaceutical Facility", category: "Industrial", status: "Completed", location: "Hyderabad", image: project1 },
  { id: 8, title: "Office Complex", category: "Commercial", status: "Ongoing", location: "Mumbai", image: project2 },
  { id: 9, title: "Flyover Construction", category: "Infrastructure", status: "Completed", location: "Visakhapatnam", image: project3 },
];

const filters = ["All", "Industrial", "Commercial", "Infrastructure", "Completed", "Ongoing"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter || project.status === activeFilter;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Our Projects" 
          subtitle="Showcasing our expertise across industrial, commercial, and infrastructure sectors"
        />

        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-accent text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevated transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        project.status === "Completed" ? "bg-green-500/20 text-green-400" : "bg-accent/20 text-accent"
                      }`}>
                        {project.status}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-primary-foreground mb-1">{project.title}</h3>
                      <p className="text-primary-foreground/70 text-sm">{project.location} • {project.category}</p>
                    </div>
                    <div className="p-6 group-hover:opacity-0 transition-opacity">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        project.status === "Completed" ? "bg-green-500/10 text-green-600" : "bg-accent/10 text-accent"
                      }`}>
                        {project.status}
                      </span>
                      <h3 className="text-lg font-heading font-bold text-primary mb-1">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.location} • {project.category}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
