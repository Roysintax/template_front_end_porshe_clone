export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black">P</span>
              </div>
              <span className="text-lg tracking-widest uppercase">Porsche</span>
            </div>
            <p className="text-sm text-gray-400">
              Driving dreams since 1948. Engineered for those who refuse to compromise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#models" className="hover:text-[#d5001c] transition-colors duration-300">
                  Models
                </a>
              </li>
              <li>
                <a href="#performance" className="hover:text-[#d5001c] transition-colors duration-300">
                  Performance
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-[#d5001c] transition-colors duration-300">
                  Heritage
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d5001c] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#d5001c] transition-colors duration-300">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5001c] transition-colors duration-300">
                  Find a Dealer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5001c] transition-colors duration-300">
                  Owners Manual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5001c] transition-colors duration-300">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#d5001c] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5001c] transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5001c] transition-colors duration-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#d5001c] transition-colors duration-300">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© {currentYear} Porsche AG. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span>Created by</span>
              <a
                href="https://instagram.com/roysihan.official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d5001c] hover:underline"
              >
                @roysihan.official
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
