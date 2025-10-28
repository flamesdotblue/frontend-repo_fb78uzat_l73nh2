export default function FooterCTA() {
  return (
    <section id="cta" className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">Engineered for the fast lane</h3>
            <p className="mt-1 text-white/70">Join the waitlist to unlock early access, track days, and insider drops.</p>
          </div>
          <div className="flex w-full sm:w-auto items-center gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full sm:w-72 rounded-full border border-white/20 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/50 focus:border-white/40"
              aria-label="Email address"
            />
            <button className="inline-flex whitespace-nowrap items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors">
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
