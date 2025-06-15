import React, { useRef, useEffect, useState } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl font-serif font-bold text-amber-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-600 mb-6"></div>
            <p className="text-amber-800 mb-6">
              Thai Delight was founded in 2010 by Chef Somchai, who brought his family recipes from Bangkok 
              to create an authentic Thai dining experience. Our mission is to share the rich culinary traditions 
              of Thailand through dishes that combine bold flavors, fresh ingredients, and beautiful presentation.
            </p>
            <p className="text-amber-800 mb-6">
              We believe that Thai cuisine is one of the world's great culinary arts, balancing sweet, sour, 
              salty, and spicy flavors in harmony. Every dish at Thai Delight is crafted with care using 
              traditional techniques and the freshest ingredients available.
            </p>
            <p className="text-amber-800">
              Our restaurant offers a warm, elegant atmosphere where you can enjoy a memorable dining experience 
              with family and friends. We look forward to welcoming you and sharing our passion for Thai cuisine.
            </p>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Thai restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-white text-center font-serif font-bold">
                <span className="block text-3xl">10+</span>
                <span className="block text-sm">Years of Excellence</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;