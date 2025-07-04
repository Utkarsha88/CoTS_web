import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-teal-green mb-12"
        >
          Contact Us
        </motion.h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism p-8 rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-soft-white mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-soft-white opacity-90 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-shadow-gray border border-soft-white/20 rounded-lg text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-teal-green"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-soft-white opacity-90 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-shadow-gray border border-soft-white/20 rounded-lg text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-teal-green"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-soft-white opacity-90 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-shadow-gray border border-soft-white/20 rounded-lg text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-teal-green"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-soft-white opacity-90 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-shadow-gray border border-soft-white/20 rounded-lg text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-teal-green"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-teal-green hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glassmorphism p-8 rounded-xl"
            >
              <h2 className="text-2xl font-semibold text-soft-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-green rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-soft-white font-medium">Email</h3>
                    <p className="text-soft-white opacity-70">cotsnepal@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-soft-white font-medium">Location</h3>
                    <p className="text-soft-white opacity-70">TU IOE Paschimanchal Campus<br />Lamachaur, Pokhara</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-green rounded-full flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-soft-white font-medium">Club</h3>
                    <p className="text-soft-white opacity-70">Established 2013</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glassmorphism p-8 rounded-xl"
            >
              <h2 className="text-2xl font-semibold text-soft-white mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="fab fa-facebook text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <i className="fab fa-linkedin text-white"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
                  <i className="fab fa-github text-white"></i>
                </a>
              </div>
            </motion.div>

            {/* Campus Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glassmorphism p-8 rounded-xl"
            >
              <h2 className="text-2xl font-semibold text-soft-white mb-6">Campus Location</h2>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Campus location"
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-soft-white opacity-70 mt-4 text-sm">
                Located in the heart of Pokhara, our campus provides an ideal environment for technical learning and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
