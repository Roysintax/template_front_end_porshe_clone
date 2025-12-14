import { Gauge, Zap, Cog, Trophy } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Unmatched Speed',
    description: 'Engineering excellence that pushes boundaries. From 0 to exhilaration in seconds.',
  },
  {
    icon: Zap,
    title: 'Electric Innovation',
    description: 'Leading the charge into the future with cutting-edge electric technology.',
  },
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'Every component crafted to perfection. German engineering at its finest.',
  },
  {
    icon: Trophy,
    title: 'Racing Heritage',
    description: 'Born on the track, refined for the road. Decades of motorsport excellence.',
  },
];

export function Performance() {
  return (
    <section id="performance" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjU2OTM0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Performance Perfected</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Where technology meets artistry. Every detail designed for the ultimate driving experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-[#d5001c]/30"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#d5001c]/10 rounded-full group-hover:bg-[#d5001c]/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#d5001c]" />
                </div>
                <h4 className="mb-3">{feature.title}</h4>
                <p className="text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-2 text-[#d5001c]">75+</div>
            <div className="text-sm uppercase tracking-wider text-gray-400">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2 text-[#d5001c]">30,000+</div>
            <div className="text-sm uppercase tracking-wider text-gray-400">Race Victories</div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2 text-[#d5001c]">320k+</div>
            <div className="text-sm uppercase tracking-wider text-gray-400">Cars Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-2 text-[#d5001c]">100%</div>
            <div className="text-sm uppercase tracking-wider text-gray-400">Passion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
