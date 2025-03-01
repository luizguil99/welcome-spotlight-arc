
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <span className="block text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
                About
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" id="about">
                Our Design Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                We believe that great design removes rather than adds. By focusing on the essential and eliminating the unnecessary, we create experiences that are both more beautiful and more functional.
              </p>
              <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Our design process"
                  className="w-full h-full object-cover"
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
