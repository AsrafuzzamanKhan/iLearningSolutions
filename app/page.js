import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
