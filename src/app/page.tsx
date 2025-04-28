import About from "@/components/about";
import Advantages from "@/components/advantages";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Header from "@/components/shared/header";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages/>
      <Testimonials/>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
