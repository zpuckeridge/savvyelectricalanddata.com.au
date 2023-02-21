import Head from "next/head";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Savvy Electrical and Data</title>
        <meta
          name="description"
          content="Personal Livestream and Clip Hosting for Video Games and related
          Media."
        />
      </Head>
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
