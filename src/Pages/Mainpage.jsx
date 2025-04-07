import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutPage from "../Components/About";
import ProjectsPage from "../Components/Project";
import Projects from "../Components/Project";
import Skills from "../Components/Skills";
import Footer from "../Components/Footer";

function Mainpage() {
  return (
    <>

      <Navbar />
      <Hero />
      <Skills />
      <AboutPage />
      <Projects />
      <Footer />
    </>
  );
}

export default Mainpage;