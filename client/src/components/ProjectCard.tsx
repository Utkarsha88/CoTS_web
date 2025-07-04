import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  category
}: ProjectCardProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "hardware":
        return "bg-teal-green";
      case "software":
        return "bg-neon-blue";
      case "web":
        return "bg-purple-500";
      default:
        return "bg-shadow-gray";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 5 }}
      className="project-card glassmorphism rounded-xl overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-soft-white mb-2">{title}</h3>
        <p className="text-soft-white opacity-80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`${getCategoryColor(category)} text-white px-3 py-1 rounded-full text-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="bg-teal-green hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
