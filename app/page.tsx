import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <nav className="sticky top-8 z-[99]">
        <Navigation />
      </nav>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
