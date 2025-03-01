
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail and clean design philosophy has completely transformed how I interact with technology. It's refreshing to use something so thoughtfully crafted.",
    author: "Sarah Johnson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    gradient: "from-purple-100 to-indigo-100",
  },
  {
    id: 2,
    quote: "Functionality without compromise. The minimal approach actually enhances the experience rather than limiting it. Every interaction feels intentional.",
    author: "Michael Chen",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    gradient: "from-blue-100 to-purple-100",
  },
  {
    id: 3,
    quote: "After years of using overcomplicated solutions, this approach to design is like a breath of fresh air. It's exactly what I've been looking for.",
    author: "Emma Davies",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    gradient: "from-pink-100 to-purple-100",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const activeTesti = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 overflow-hidden bg-gradient-to-b from-indigo-50/20 to-white">
      <div 
        id="testimonials-section"
        className="container mx-auto px-6 max-w-7xl"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="block text-sm font-medium text-purple-600 mb-3 uppercase tracking-wider bg-purple-50 rounded-full px-3 py-1 inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-800">
            What People Are Saying
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our clients about how our design approach has impacted their experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-[110%] h-[110%] bg-gradient-to-r ${activeTesti.gradient} rounded-full opacity-70 blur-3xl transition-colors duration-500`}></div>
          </div>

          <div className="relative z-10">
            <div className="relative overflow-hidden h-[340px] sm:h-[280px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out p-8 flex flex-col items-center text-center ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : index < activeIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <blockquote className="mb-6">
                    <p className="text-xl italic text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  <footer>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-purple-600">{testimonial.role}</div>
                  </footer>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-purple-600 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
