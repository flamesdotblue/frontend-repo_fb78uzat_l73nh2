import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-wide">Apex Motors</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#models" className="hover:text-white transition-colors">Models</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="hidden sm:inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              Get a demo
            </a>
            <a
              href="#cta"
              className="inline-flex items-center rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Pre-order
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
