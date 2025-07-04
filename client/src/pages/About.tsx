import { motion } from "framer-motion";
import { User } from "lucide-react";

const executiveTeam = [
  {
    id: 1,
    title: "President",
    name: "Student Leader",
    description: "Leading the club's strategic vision and fostering innovation across all departments.",
    color: "bg-teal-green"
  },
  {
    id: 2,
    title: "Vice President",
    name: "Technical Coordinator",
    description: "Coordinating technical activities and mentoring junior members in their projects.",
    color: "bg-neon-blue"
  },
  {
    id: 3,
    title: "Secretary",
    name: "Operations Manager",
    description: "Managing club operations and ensuring smooth execution of events and activities.",
    color: "bg-teal-green"
  }
];

const statistics = [
  { value: "500+", label: "Active Members", color: "text-teal-green" },
  { value: "50+", label: "Projects Completed", color: "text-neon-blue" },
  { value: "25+", label: "Events Organized", color: "text-teal-green" },
  { value: "11", label: "Years of Excellence", color: "text-neon-blue" }
];

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-teal-green mb-12"
        >
          About CoTS
        </motion.h1>
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism p-8 rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-teal-green mb-4">Our Mission</h2>
            <p className="text-soft-white opacity-90">
              To foster innovation, collaboration, and excellence in technical education by providing a platform where students can explore, learn, and create cutting-edge solutions that address real-world challenges.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism p-8 rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-teal-green mb-4">Our Vision</h2>
            <p className="text-soft-white opacity-90">
              To be the leading technical club that empowers students to become innovative leaders in technology, contributing to the advancement of society through creative problem-solving and technical excellence.
            </p>
          </motion.div>
        </div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glassmorphism p-8 rounded-xl mb-16"
        >
          <h2 className="text-2xl font-semibold text-teal-green mb-4">Our History</h2>
          <div className="space-y-4 text-soft-white opacity-90">
            <p>
              Established in 2013 at TU IOE Paschimanchal Campus, the Club of Technical Students (CoTS) began as a small group of passionate engineering students who shared a common vision: to create a community where technical innovation could flourish.
            </p>
            <p>
              Over the years, CoTS has grown into a vibrant community of over 500 active members, organizing numerous workshops, competitions, and collaborative projects. Our club has been instrumental in bridging the gap between theoretical knowledge and practical application.
            </p>
            <p>
              Today, CoTS stands as one of the most active technical organizations in the campus, with alumni working in top tech companies worldwide and continuing to contribute to the club's legacy of excellence.
            </p>
          </div>
        </motion.div>

        {/* Executive Team */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl font-semibold text-center text-teal-green mb-8"
          >
            Executive Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {executiveTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="glassmorphism p-6 rounded-xl text-center"
              >
                <div className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <User className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-soft-white mb-2">{member.title}</h3>
                <p className="text-teal-green font-medium mb-2">{member.name}</p>
                <p className="text-soft-white opacity-70 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              className="glassmorphism p-6 rounded-xl text-center"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-soft-white opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
