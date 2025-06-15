import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          filter: "brightness(60%)"
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div 
          className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
            Thai Delight
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-light">
            Experience authentic Thai cuisine in a beautiful setting
          </p>
          <div className="space-x-4">
            <a 
              href="#menu" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View Menu
            </a>
            <a 
              href="#reservation" 
              className="inline-block bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
        <div className={`animate-bounce transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#about" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;