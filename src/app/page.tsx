import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import Footer from "./sections/Footer";

export default function Home() {
  return <>
    <Header />
    
    <Hero />

    <WhyUs />

    <Footer />
  </>;
}
