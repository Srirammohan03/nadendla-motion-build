import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import heroImage from "@/assets/hero-construction.jpg";
import teamImage from "@/assets/team-construction.jpg";

const galleryImages = [
  { id: 1, src: project1, category: "Industrial", title: "Industrial Plant" },
  { id: 2, src: project2, category: "Commercial", title: "Commercial Building" },
  { id: 3, src: project3, category: "Infrastructure", title: "Highway Bridge" },
  { id: 4, src: heroImage, category: "Industrial", title: "Manufacturing Unit" },
  { id: 5, src: teamImage, category: "Team", title: "Our Expert Team" },
  { id: 6, src: project1, category: "Industrial", title: "Chemical Plant" },
  { id: 7, src: project2, category: "Commercial", title: "Office Complex" },
  { id: 8, src: project3, category: "Infrastructure", title: "Flyover" },
  { id: 9, src: heroImage, category: "Industrial", title: "Power Plant" },
];

const categories = ["All", "Industrial", "Commercial", "Infrastructure", "Team"];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = galleryImages.filter((img) =>
    activeCategory === "All" ? true : img.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          title="Gallery" 
          subtitle="Visual showcase of our construction excellence"
        />

        <section className="section-padding bg-background">
          <div className="container-custom mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? "bg-accent text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/90 to-transparent">
                      <p className="text-primary-foreground font-medium text-sm">{image.title}</p>
                      <p className="text-primary-foreground/70 text-xs">{image.category}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary-foreground"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] rounded-lg shadow-elevated"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-primary-foreground font-heading font-bold text-xl">{selectedImage.title}</p>
                <p className="text-primary-foreground/70">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
