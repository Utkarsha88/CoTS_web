import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    alt: "Workshop event",
    title: "Technical Workshop",
    description: "Hands-on learning session on embedded systems"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Team collaboration",
    title: "Team Collaboration",
    description: "Working together on innovative solutions"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700",
    alt: "Tech laboratory",
    title: "Innovation Lab",
    description: "State-of-the-art facilities for research"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200",
    alt: "Project presentation",
    title: "Project Showcase",
    description: "Annual project presentation event"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Coding competition",
    title: "Coding Marathon",
    description: "24-hour coding challenge event"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=900",
    alt: "Robotics demo",
    title: "Robotics Demo",
    description: "Autonomous robot demonstration"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700",
    alt: "ML workshop",
    title: "AI Workshop",
    description: "Machine learning fundamentals session"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    alt: "Innovation fair",
    title: "Innovation Fair",
    description: "Campus-wide technology exhibition"
  }
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-teal-green mb-12"
        >
          Gallery
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-soft-white opacity-80 mb-16 max-w-2xl mx-auto"
        >
          Explore our journey through images. From workshops to competitions, these moments capture the spirit of innovation and collaboration at CoTS.
        </motion.p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="masonry-item glassmorphism rounded-xl overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-soft-white mb-2">{item.title}</h3>
                <p className="text-soft-white opacity-70 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
