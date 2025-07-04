import { Link } from "wouter";
import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, User } from "lucide-react";
import Carousel3D from "@/components/Carousel3D";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-soft-white leading-tight">
                Club of <span className="text-teal-green">Technical</span> Students
              </h1>
              <p className="text-xl text-teal-green font-medium">"Strive For What You Aspire"</p>
              <p className="text-lg text-soft-white opacity-80">TU IOE Paschimanchal Campus | Established 2013</p>
              <p className="text-soft-white opacity-90 max-w-lg">
                Fostering innovation, collaboration, and excellence in technical education. Join us in building the future through cutting-edge projects and meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-teal-green hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors teal-glow"
                  >
                    🟩 Explore Projects
                  </motion.button>
                </Link>
                <Link href="/roadmap">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-neon-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors glow-effect"
                  >
                    🟦 Newbie Roadmap
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            {/* Right Side - 3D Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Carousel3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-16 bg-gradient-to-r from-shadow-gray to-jet-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-teal-green mb-12"
          >
            What Our Leaders Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glassmorphism p-8 rounded-xl"
            >
              <p className="text-soft-white opacity-90 mb-6 italic">
                "CoTS has been instrumental in bridging the gap between theoretical knowledge and practical application. Our students consistently demonstrate exceptional technical skills."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-green rounded-full flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-soft-white">Dr. Academic Leader</h4>
                  <p className="text-soft-white opacity-70">Faculty Coordinator</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glassmorphism p-8 rounded-xl"
            >
              <p className="text-soft-white opacity-90 mb-6 italic">
                "The collaborative environment at CoTS has helped me grow both technically and personally. It's more than just a club - it's a community of innovators."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-soft-white">Student President</h4>
                  <p className="text-soft-white opacity-70">Club President</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join CoTS */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-teal-green mb-12"
          >
            Why Join CoTS?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-8 rounded-xl text-center hover:teal-glow transition-all"
            >
              <div className="w-16 h-16 bg-teal-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-soft-white mb-4">Innovation Hub</h3>
              <p className="text-soft-white opacity-80">Work on cutting-edge projects and bring your innovative ideas to life with like-minded peers.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-8 rounded-xl text-center hover:glow-effect transition-all"
            >
              <div className="w-16 h-16 bg-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-soft-white mb-4">Community</h3>
              <p className="text-soft-white opacity-80">Connect with fellow technical enthusiasts and build lasting professional relationships.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-8 rounded-xl text-center hover:teal-glow transition-all"
            >
              <div className="w-16 h-16 bg-teal-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-soft-white mb-4">Skill Development</h3>
              <p className="text-soft-white opacity-80">Enhance your technical skills through workshops, mentorship, and hands-on projects.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jet-black py-12 border-t border-shadow-gray">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-teal-green mb-4">CoTS</h3>
              <p className="text-soft-white opacity-80">Club of Technical Students at TU IOE Paschimanchal Campus, fostering innovation and excellence.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-soft-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">Projects</Link></li>
                <li><Link href="/gallery" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">Gallery</Link></li>
                <li><Link href="/contact" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-soft-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/roadmap" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">Newbie Roadmap</Link></li>
                <li><a href="#" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">Documentation</a></li>
                <li><a href="#" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-soft-white mb-4">Contact</h4>
              <p className="text-soft-white opacity-80 mb-2">cotsnepal@gmail.com</p>
              <p className="text-soft-white opacity-80 mb-4">TU IOE Paschimanchal Campus</p>
              <div className="flex space-x-4">
                <a href="#" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-soft-white opacity-80 hover:text-teal-green transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-shadow-gray mt-8 pt-8 text-center">
            <p className="text-soft-white opacity-70">&copy; 2024 Club of Technical Students. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
