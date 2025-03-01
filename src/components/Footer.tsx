
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nova</h3>
            <p className="text-gray-600 mb-6 max-w-xs">
              Elevating design through simplicity and thoughtful innovation.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`${social} profile`}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  <span className="capitalize first-letter:uppercase">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Case Studies', 'Reviews', 'Updates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Team', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Blog', 'Newsletter', 'Help Center', 'Support', 'Privacy'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center"
                  >
                    {item}
                    {item === 'Blog' && <ExternalLink size={14} className="ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Nova. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
