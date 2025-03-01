
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className={`stagger-animation max-w-2xl mx-auto lg:mx-0 text-center lg:text-left ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-gray-900 uppercase bg-gray-100 rounded-full">
              Designed for Perfection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Minimalist Design, Maximum Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Crafted with precision, built for clarity. Discover our innovative approach to design that puts simplicity and functionality at the forefront.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              >
                Explore Features
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className={`relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur-xl opacity-30 animate-subtle-pulse"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="Product showcase"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-950 rounded-full flex items-center justify-center text-white font-semibold">
              <div className="text-center">
                <span className="block text-sm">New</span>
                <span className="text-xs opacity-80">Release</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
