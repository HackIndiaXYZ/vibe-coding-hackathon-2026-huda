import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoCard from "@/components/DemoCard";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <DemoCard />
      <Features />
    </main>
  );
}