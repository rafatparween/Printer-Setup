import Image from "next/image";
import SliderSection from "./components/SliderSection";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <SliderSection/>
    <Hero/>
    <Features/>
    <Showcase/>
    <Benefits/>
    <Pricing/>
    <FAQ/>
    <CTA/>
    <Footer/>

    </>
  );
}
