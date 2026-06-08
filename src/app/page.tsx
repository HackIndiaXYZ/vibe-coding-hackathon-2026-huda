import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoCard from "@/components/DemoCard";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <DemoCard />
      <Features />
      <DashboardPreview />
      <HowItWorks />
      <Footer />
    </main>
  );
}