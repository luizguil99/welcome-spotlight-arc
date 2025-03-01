
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Elegant Simplicity",
    description: "Clarity in design leads to clarity in experience. Our approach eliminates unnecessary elements to focus on what truly matters.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Intuitive Interface",
    description: "Every interaction is crafted to feel natural, with thoughtful details that guide users without overwhelming them.",
    icon: "✨",
  },
  {
    id: 3,
    title: "Precision Engineering",
    description: "Behind the minimal aesthetics lies powerful technology, built to deliver performance that exceeds expectations.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Seamless Integration",
    description: "Works perfectly across all your devices and platforms, providing a consistent experience wherever you go.",
    icon: "🔄",
  },
  {
    id: 5,
    title: "Sustainable Design",
    description: "Created with longevity in mind, using principles that stand the test of time rather than following fleeting trends.",
    icon: "🌱",
  },
  {
    id: 6,
    title: "Thoughtful Details",
    description: "Every pixel and interaction has been considered, creating moments of delight throughout the experience.",
    icon: "🔍",
  }
];

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-feature-id'));
            if (!visibleFeatures.includes(id)) {
              setVisibleFeatures(prev => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.feature-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleFeatures]);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50/80">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-sm font-medium text-indigo-600 mb-3 uppercase tracking-wider bg-indigo-50 rounded-full px-3 py-1 inline-block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-gray-900">
            Designed with Purpose
          </h2>
          <p className="text-lg text-gray-600">
            Every feature is crafted to enhance your experience, focusing on what truly matters and eliminating unnecessary complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              data-feature-id={feature.id}
              className={`feature-card rounded-xl p-6 transition-all duration-500 border border-gray-100 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 ${
                visibleFeatures.includes(feature.id)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-4 text-3xl bg-indigo-50 w-12 h-12 flex items-center justify-center rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="mt-auto flex items-center text-sm text-gray-500">
                <Check size={16} className="mr-2 text-indigo-500" />
                <span>Available now</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Learn More About Our Approach
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
