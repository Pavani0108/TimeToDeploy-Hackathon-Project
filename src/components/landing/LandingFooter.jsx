import { Link } from "react-router-dom";
import { Zap, Github, Twitter, Linkedin } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="relative mt-32">

      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />

      {/* Main Footer */}
      <div className="bg-black/40 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">TimeToDeploy</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI-powered deployment timeline prediction platform helping teams plan smarter and deploy faster.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-gray-300">
              Product
            </h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-gray-300">
              Company
            </h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase text-gray-300">
              Connect
            </h4>

            <div className="flex gap-4">
              {[
                { icon: Twitter },
                { icon: Github },
                { icon: Linkedin }
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-10 h-10 rounded-lg
                    bg-white/5
                    flex items-center justify-center
                    hover:bg-gradient-to-br
                    hover:from-purple-500 hover:to-pink-500
                    hover:text-white
                    transition-all
                  "
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">

            <span>
              © {new Date().getFullYear()} TimeToDeploy. All rights reserved.
            </span>

            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
