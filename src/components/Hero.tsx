
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-white -z-10" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
        <div className="absolute -top-[5%] -left-[5%] w-[30%] h-[30%] rounded-full bg-indigo-200/40 filter blur-[120px]"></div>
        <div className="absolute -bottom-[5%] -right-[5%] w-[30%] h-[30%] rounded-full bg-blue-200/30 filter blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className={`stagger-animation max-w-2xl mx-auto lg:mx-0 text-center lg:text-left ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-indigo-700 uppercase bg-indigo-100 rounded-full shadow-sm">
              Designed for Perfection
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900">
              Minimalist Design, Maximum Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Crafted with precision, built for clarity. Discover our innovative approach to design that puts simplicity and functionality at the forefront.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-md shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-indigo-600 transition-all duration-200"
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
          
          <div className={`relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-2xl blur-xl opacity-40 animate-subtle-pulse"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-gray-100">
              <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="Product showcase"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-gray-900 to-indigo-900 rounded-full flex items-center justify-center text-white font-semibold shadow-lg transform hover:scale-105 transition-transform">
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
