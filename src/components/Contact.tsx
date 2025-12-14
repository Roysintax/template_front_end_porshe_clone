import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="mb-6">Get in Touch</h2>
            <p className="mb-8">
              Ready to experience Porsche? Our team is here to help you find your perfect match.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d5001c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#d5001c]" />
                </div>
                <div>
                  <div className="uppercase tracking-wider mb-1 text-sm">Phone</div>
                  <div className="text-gray-400">+1 (800) PORSCHE</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d5001c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#d5001c]" />
                </div>
                <div>
                  <div className="uppercase tracking-wider mb-1 text-sm">Email</div>
                  <div className="text-gray-400">info@porsche.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d5001c]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#d5001c]" />
                </div>
                <div>
                  <div className="uppercase tracking-wider mb-1 text-sm">Headquarters</div>
                  <div className="text-gray-400">Stuttgart, Germany</div>
                </div>
              </div>
            </div>

            <div>
              <div className="uppercase tracking-wider mb-4 text-sm">Follow Us</div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#d5001c] transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#d5001c] transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#d5001c] transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0a0a0a] p-8 border border-white/10">
            <h3 className="mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-[#d5001c] transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-[#d5001c] transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wider mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-[#d5001c] transition-colors duration-300 resize-none"
                  placeholder="Tell us about your dream Porsche..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#d5001c] hover:bg-[#b00017] py-4 uppercase tracking-wider transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
