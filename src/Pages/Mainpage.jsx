import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutPage from "../Components/About";
import ProjectsPage from "../Components/Project";
import Projects from "../Components/Project";
import Skills from "../Components/Skills";

function Mainpage() {
  return (
    <>

      <Navbar />
      <Hero />
      <Skills />
      <AboutPage />
      <Projects />
    </>
  );
}

export default Mainpage;