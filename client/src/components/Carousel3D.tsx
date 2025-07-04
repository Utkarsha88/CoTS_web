import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: number;
  src: string;
  alt: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Modern tech laboratory"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Students working on projects"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Campus collaboration event"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Collaboration workspace"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Project presentation"
  }
];

export default function Carousel3D() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getSlideClass = (index: number) => {
    const diff = index - currentSlide;
    const total = carouselItems.length;
    
    if (diff === 0) return "active";
    if (diff === 1 || diff === -(total - 1)) return "next";
    if (diff === -1 || diff === total - 1) return "prev";
    if (diff > 0) return "hidden right";
    return "hidden";
  };

  return (
    <div className="flex justify-center">
      <div className="carousel-container relative">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-slide glassmorphism ${getSlideClass(index)}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-teal-green hover:bg-green-600 text-white p-2 rounded-full transition-colors z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-teal-green hover:bg-green-600 text-white p-2 rounded-full transition-colors z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
