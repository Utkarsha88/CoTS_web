import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "IoT Smart Campus",
    description: "Arduino-based sensor network for campus monitoring and automation.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Arduino", "IoT", "Sensors"],
    category: "hardware"
  },
  {
    id: 2,
    title: "Campus Connect App",
    description: "Cross-platform mobile application for student communication and resources.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React Native", "Mobile", "UI/UX"],
    category: "software"
  },
  {
    id: 3,
    title: "Learning Management System",
    description: "Full-stack web platform for course management and student tracking.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "web"
  },
  {
    id: 4,
    title: "Autonomous Robot",
    description: "Line-following robot with obstacle avoidance capabilities.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Robotics", "AI", "Embedded"],
    category: "hardware"
  },
  {
    id: 5,
    title: "AI Grade Predictor",
    description: "Machine learning model to predict student performance and provide insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Python", "ML", "TensorFlow"],
    category: "software"
  },
  {
    id: 6,
    title: "Campus Store",
    description: "E-commerce platform for campus merchandise and study materials.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    category: "web"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: "all", label: "All" },
    { id: "hardware", label: "Hardware" },
    { id: "software", label: "Software" },
    { id: "web", label: "Web Development" }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-teal-green mb-12"
        >
          Projects & Programs
        </motion.h1>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeFilter === filter.id
                  ? "bg-teal-green text-white"
                  : "bg-shadow-gray text-soft-white hover:bg-teal-green"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                category={project.category}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
