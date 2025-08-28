import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import WhyChoose from "./components/WhyChoose";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About></About>
      <Courses />
      {/* <Certifications /> */}
      <WhyChoose />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
