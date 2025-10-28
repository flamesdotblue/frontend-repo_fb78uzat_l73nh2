import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black" aria-label="Hero - Performance in Motion">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Overlays for readability (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 sm:pt-32 lg:pt-36 pb-24 sm:pb-28 lg:pb-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Live test drives now open
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Performance in Motion
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
            A high-energy automotive platform engineered for speed. Explore our next-gen electric lineup with dynamic control, race-grade telemetry, and over-the-air performance tuning.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white/90 transition-colors"
            >
              Book a live demo
            </a>
            <a
              href="#models"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Explore models
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">0–60 mph</span>
              <span className="text-white/60">2.3s</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">Top speed</span>
              <span className="text-white/60">210 mph</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">Range</span>
              <span className="text-white/60">380 mi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
