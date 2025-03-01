
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500 filter blur-[100px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500 filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us in our pursuit of design excellence. Get started today and discover how our approach can elevate your experience.
          </p>
          
          <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSubmitted}
              />
              <button
                type="submit"
                className={`group px-5 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-md font-medium transition-all duration-200 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-wait' : ''} ${isSubmitted ? 'bg-green-500 hover:bg-green-500' : ''}`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : isSubmitted ? (
                  <span>Thank you!</span>
                ) : (
                  <>
                    Get Started
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
          
          <div className="mt-20 pt-10 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">2M+</div>
              <p className="text-sm text-gray-400">Active users</p>
            </div>
            <div className="space-y-2 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">500+</div>
              <p className="text-sm text-gray-400">Businesses powered</p>
            </div>
            <div className="space-y-2 p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">99%</div>
              <p className="text-sm text-gray-400">Satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
