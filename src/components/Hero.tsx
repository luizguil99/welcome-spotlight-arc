
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-indigo-50/30 to-white -z-10" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
        <div className="absolute -top-[5%] -left-[5%] w-[30%] h-[30%] rounded-full bg-indigo-200/40 filter blur-[120px]"></div>
        <div className="absolute -bottom-[5%] -right-[5%] w-[30%] h-[30%] rounded-full bg-purple-200/30 filter blur-[120px]"></div>
        <div className="absolute top-[15%] right-[10%] w-[25%] h-[25%] rounded-full bg-pink-200/20 filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className={`stagger-animation max-w-2xl mx-auto lg:mx-0 text-center lg:text-left ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-purple-700 uppercase bg-purple-100 rounded-full shadow-sm">
              Designed for Perfection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900">
              Minimal Design, Maximum Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Crafted with precision, built for clarity. Discover our innovative approach to design that puts simplicity and functionality at the forefront of every experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:from-purple-500 hover:to-indigo-500 transition-all duration-200"
              >
                Explore Features
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-2xl blur-xl opacity-40 animate-subtle-pulse"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                  alt="Modern workspace with laptop"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-3 shadow-lg">
                New Design
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-full flex items-center justify-center text-white font-semibold shadow-lg transform hover:scale-105 transition-transform">
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
