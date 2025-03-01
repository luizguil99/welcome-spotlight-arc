
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Join us in our pursuit of design excellence. Get started today and discover how our approach can elevate your experience.
          </p>
          
          <form className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                required
              />
              <button
                type="submit"
                className="group px-5 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Get Started
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
          
          <div className="mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold">2M+</div>
              <p className="text-sm text-gray-400">Active users</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">500+</div>
              <p className="text-sm text-gray-400">Businesses powered</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">99%</div>
              <p className="text-sm text-gray-400">Satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
