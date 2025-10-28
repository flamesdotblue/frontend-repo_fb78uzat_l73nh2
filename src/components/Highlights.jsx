import { Gauge, Shield, Zap } from "lucide-react";

const items = [
  {
    icon: Gauge,
    title: "Race-grade telemetry",
    desc: "Real-time analytics, adaptive traction, and driver heatmaps for precision control.",
  },
  {
    icon: Zap,
    title: "Over‑the‑air tuning",
    desc: "Push performance maps, torque curves, and firmware updates in seconds.",
  },
  {
    icon: Shield,
    title: "Active safety suite",
    desc: "Multi-sensor fusion, predictive braking, and encrypted vehicle-to-cloud.",
  },
];

export default function Highlights() {
  return (
    <section id="features" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
