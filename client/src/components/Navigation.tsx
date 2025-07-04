import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/roadmap", label: "Roadmap" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-teal-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-lg font-semibold text-soft-white">CoTS</span>
          </Link>
          
          {/* Center Title - Hidden on mobile */}
          <div className="text-center hidden lg:block">
            <h1 className="text-xl font-bold text-teal-green">Club of Technical Students</h1>
            <p className="text-xs text-soft-white opacity-75">"Strive For What You Aspire"</p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? "text-teal-green"
                    : "text-soft-white hover:text-teal-green"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-soft-white flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-jet-black border-t border-shadow-gray mt-3 rounded-lg">
            <div className="px-4 py-3">
              {/* Mobile Title */}
              <div className="text-center mb-4 pb-4 border-b border-shadow-gray">
                <h1 className="text-lg font-bold text-teal-green">Club of Technical Students</h1>
                <p className="text-xs text-soft-white opacity-75">"Strive For What You Aspire"</p>
              </div>
              
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors py-2 px-3 rounded-lg ${
                      isActive(item.path)
                        ? "text-teal-green bg-teal-green/10"
                        : "text-soft-white hover:text-teal-green hover:bg-teal-green/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
