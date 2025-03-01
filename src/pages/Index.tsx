
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-3 uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900" id="about">
                Our Design Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We believe that great design removes rather than adds. By focusing on the essential and eliminating the unnecessary, we create experiences that are both more beautiful and more functional.
              </p>
              <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Our design process"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
