
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine which section is currently in view
      const sections = ['features', 'about', 'testimonials', 'contact'];
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-lg shadow-lg border-b border-indigo-100/30' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl font-bold tracking-tight group"
            aria-label="Home"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-indigo-500 group-hover:from-indigo-600 group-hover:to-indigo-400 transition-all duration-300">
              Nova
            </span>
            <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-400">
              ✦
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 bg-gray-50/80 backdrop-blur-sm px-1 py-1 rounded-full border border-gray-100 shadow-sm">
            {[
              { id: 'features', label: 'Features' },
              { id: 'about', label: 'About' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavLinkClick(item.id)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white bg-indigo-600 shadow-md' 
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-white/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="group px-5 py-2.5 rounded-md bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-sm font-medium hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-indigo-500/20 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-gray-700 p-2 rounded-full ${mobileMenuOpen ? 'bg-gray-100' : 'hover:bg-gray-100/50'} transition-colors duration-200`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-indigo-600" />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div 
        className={`md:hidden fixed top-[61px] right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-xl border-l border-indigo-100/50 p-6 transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4 pt-4">
          {[
            { id: 'features', label: 'Features' },
            { id: 'about', label: 'About' },
            { id: 'testimonials', label: 'Testimonials' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition-colors duration-200"
              onClick={() => handleNavLinkClick(item.id)}
            >
              <span className="text-base font-medium">{item.label}</span>
              <ChevronRight size={18} className="text-indigo-400" />
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <a
              href="#contact"
              className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
