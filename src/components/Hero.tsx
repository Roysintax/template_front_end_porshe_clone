import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToModels = () => {
    const element = document.getElementById('models');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1666612509979-9133d7913b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwc3BvcnRzJTIwY2FyfGVufDF8fHx8MTc2NTY1NjU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Porsche Sports Car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <h1 className="mb-6 animate-fadeIn">
            Drive Your
            <br />
            <span className="text-[#d5001c]">Dreams</span>
          </h1>
          <p className="mb-8 max-w-2xl mx-auto text-xl">
            Experience the perfect harmony of power, precision, and passion.
            Every Porsche is engineered to ignite your soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToModels}
              className="px-8 py-4 bg-[#d5001c] hover:bg-[#b00017] transition-all duration-300 uppercase tracking-wider"
            >
              Explore Models
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToModels}
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
