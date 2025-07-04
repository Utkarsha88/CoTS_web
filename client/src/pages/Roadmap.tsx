import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const roadmapPhases = [
  {
    id: 1,
    title: "Foundation Phase",
    description: "Master the basics of programming and computer science fundamentals. Build a strong foundation that will support your entire technical journey.",
    skills: [
      "Programming fundamentals (Python/C++)",
      "Data structures and algorithms",
      "Mathematics for computer science",
      "Version control with Git"
    ],
    links: [
      { label: "TU Portal", url: "#" },
      { label: "Resources", url: "#" }
    ]
  },
  {
    id: 2,
    title: "Specialization Phase",
    description: "Choose your area of interest and dive deep. Whether it's web development, mobile apps, or hardware, focus on building expertise.",
    skills: [
      "Web development (Frontend & Backend)",
      "Mobile app development",
      "Embedded systems & IoT",
      "Machine learning & AI"
    ],
    links: [
      { label: "Course Guide", url: "#" },
      { label: "Mentorship", url: "#" }
    ]
  },
  {
    id: 3,
    title: "Project Phase",
    description: "Apply your knowledge by working on real projects. Build a portfolio that showcases your skills and creativity.",
    skills: [
      "Individual projects",
      "Team collaborations",
      "Open source contributions",
      "Competition participation"
    ],
    links: [
      { label: "Project Ideas", url: "#" },
      { label: "GitHub Guide", url: "#" }
    ]
  },
  {
    id: 4,
    title: "Professional Phase",
    description: "Prepare for your career with industry-relevant skills, networking, and professional development.",
    skills: [
      "Industry certifications",
      "Internship opportunities",
      "Professional networking",
      "Career guidance"
    ],
    links: [
      { label: "Career Center", url: "#" },
      { label: "Alumni Network", url: "#" }
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-teal-green mb-12"
        >
          Newbie Roadmap
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-soft-white opacity-80 mb-16 max-w-2xl mx-auto"
        >
          Your journey to becoming a skilled technical professional starts here. Follow our structured roadmap to build your skills step by step.
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-8">
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="timeline-item glassmorphism p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-teal-green mb-4">{phase.title}</h3>
                  <p className="text-soft-white opacity-90 mb-4">{phase.description}</p>
                  <ul className="space-y-2 text-soft-white opacity-80">
                    {phase.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>• {skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <div className="grid grid-cols-2 gap-3">
                    {phase.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`${
                          linkIndex === 0 ? "bg-neon-blue hover:bg-blue-600" : "bg-teal-green hover:bg-green-600"
                        } text-white px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2`}
                      >
                        {link.label}
                        <ExternalLink size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
