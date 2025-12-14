export function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1543796076-c8a565501995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JzY2hlJTIwcmFjaW5nfGVufDF8fHx8MTc2NTczMzc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Porsche Heritage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 border-4 border-[#d5001c]/0 group-hover:border-[#d5001c]/30 transition-all duration-500"></div>
          </div>

          {/* Content */}
          <div>
            <div className="text-sm uppercase tracking-widest text-[#d5001c] mb-4">
              Since 1948
            </div>
            <h2 className="mb-6">Racing Heritage</h2>
            <p className="mb-6">
              For over seven decades, Porsche has been synonymous with motorsport excellence.
              From Le Mans to Formula E, our racing DNA flows through every vehicle we create.
            </p>
            <p className="mb-8">
              Our commitment to innovation, performance, and precision has made us one of the
              most successful manufacturers in racing history. Every victory on the track
              translates to superior technology on the road.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-black/30 border-l-4 border-[#d5001c]">
                <div className="flex-1">
                  <div className="uppercase tracking-wider mb-1">1948</div>
                  <div className="text-sm text-gray-400">The first Porsche 356 is built</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/30 border-l-4 border-[#d5001c]">
                <div className="flex-1">
                  <div className="uppercase tracking-wider mb-1">1963</div>
                  <div className="text-sm text-gray-400">The legendary 911 is born</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-black/30 border-l-4 border-[#d5001c]">
                <div className="flex-1">
                  <div className="uppercase tracking-wider mb-1">2019</div>
                  <div className="text-sm text-gray-400">Taycan launches the electric era</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
