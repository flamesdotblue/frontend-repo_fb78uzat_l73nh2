import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import FooterCTA from "./components/FooterCTA";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <FooterCTA />
      </main>
    </div>
  );
}
