import { ArrowRight } from 'lucide-react';

const models = [
  {
    name: '911 Turbo S',
    tagline: 'The Icon',
    specs: '640 HP | 0-60 in 2.6s',
    description: 'The quintessential sports car. Legendary performance meets everyday usability.',
    image: 'https://images.unsplash.com/photo-1601278840447-9af5ac4ed157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwOTExJTIwYmxhY2t8ZW58MXx8fHwxNzY1NjQzNzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Taycan Turbo S',
    tagline: 'Electric Soul',
    specs: '750 HP | 0-60 in 2.6s',
    description: 'Pure electric performance. Zero emissions, maximum thrills.',
    image: 'https://images.unsplash.com/photo-1585601265915-f45bd0d42357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBtb3Rpb258ZW58MXx8fHwxNzY1NjQwMjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Cayenne Turbo GT',
    tagline: 'SUV Redefined',
    specs: '631 HP | 0-60 in 3.1s',
    description: 'The world\'s fastest SUV. Uncompromising performance, supreme luxury.',
    image: 'https://images.unsplash.com/photo-1543796076-c8a565501995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwcmFjaW5nfGVufDF8fHx8MTc2NTczMzc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Models() {
  return (
    <section id="models" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Lineup</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the perfect combination of performance, luxury, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#0a0a0a] hover:transform hover:scale-[1.02] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm uppercase tracking-widest text-[#d5001c] mb-2">
                  {model.tagline}
                </div>
                <h3 className="mb-2">{model.name}</h3>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">
                  {model.specs}
                </div>
                <p className="mb-6 text-sm">{model.description}</p>
                <button className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-[#d5001c] transition-colors duration-300 group/btn">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
