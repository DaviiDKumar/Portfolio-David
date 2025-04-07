import "../Css/Project.css";
import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Import icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaCloud, FaJs, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJsonwebtokens, SiCssmodules } from "react-icons/si";

const techIcons = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  JWT: <SiJsonwebtokens />,
  CLOUDINARY: <FaCloud />,
  "CSS Modules": <SiCssmodules />,
};

function Projects() {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
          } else {
            el.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const travelImages = ["/Images/travel1.jpg", "/Images/travel2.jpg", "/Images/travel3.jpg", "/Images/travel4.jpg", "/Images/travel5.jpg", "/Images/travel6.jpg"];
  const travelImages2 = ["/Images/uk2.jpg", "/Images/u3.jpg", "/Images/uk1.jpg", "/Images/uk4.jpg", "/Images/uk5.jpg"];
  const imagesUdemy = ["/Images/ud1.jpg", "/Images/ud2.jpg", "/Images/ud3.jpg", "/Images/ud4.jpg", "/Images/ud5.jpg", "/Images/ud6.jpg", "/Images/ud6.jpg", "/Images/ud 7.jpg", "/Images/ud9.jpg", "/Images/ud10.jpg"];

  const renderSplide = (images) => (
    <Splide
      options={{
        type: "loop",
        perPage: 1,
        gap: "1rem",
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        pagination: false,
        arrows: true,
      }}
      className="carousel"
    >
      {images.map((img, i) => (
        <SplideSlide key={i}>
          <img src={img} alt={`Slide ${i}`} className="carousel-img" />
        </SplideSlide>
      ))}
    </Splide>
  );

  const renderTech = (techList) =>
    techList.map((tech, i) => (
      <span className="tech-tag" key={i}>
        {techIcons[tech] && <span className="icon">{techIcons[tech]}</span>} {tech}
      </span>
    ));

  return (
    <div className="project-page" id="projects">
      <section className="projects-strip">
        <h1>MY Work</h1>
        <p>“Where pixels meet purpose, and every line of code tells a story.”</p>
      </section>

      <div className="project-right">
        {/* Project 1 */}
        <section className="project-hero" ref={(el) => (projectRefs.current[0] = el)}>
          <h4 className="project-title">GlobeTrek UI – Travel Dreams, Designed</h4>
          {renderSplide(travelImages)}
          <div className="project-details">
            <p className="project-description">
              A vibrant travel website frontend built to captivate and convert.
            </p>
            <ul className="project-points">
              <li>🏝️ Fullscreen hero images and destination sliders</li>
              <li>🧱 Sticky navbar with smooth scroll</li>
              <li>🎨 Custom CSS animations</li>
              <li>📱 Mobile-first design</li>
              <li>🖼️ Lazy-loaded images</li>
            </ul>
            <div className="tech-used">{renderTech(["HTML", "CSS", "JavaScript"])}</div>
          </div>
        </section>

        {/* Project 2 */}
        <section className="project-hero" ref={(el) => (projectRefs.current[1] = el)}>
          <h4 className="project-title">EduNexus – A Full-Stack Udemy Clone</h4>
          {renderSplide(imagesUdemy)}
          <div className="project-details">
            <p className="project-description">
              A full-stack e-learning platform supporting real course flows and authentication.
            </p>
            <ul className="project-points">
              <li>📚 Auth with JWT</li>
              <li>📽️ Modular course playback</li>
              <li>🧑‍💼 Dashboards for users</li>
              <li>💬 Review & rating system</li>
              <li>🌟 Integrated backend (MERN)</li>
              <li>⚡ Modern CSS</li>
            </ul>
            <div className="tech-used">
              {renderTech(["React", "Node.js", "Express", "MongoDB", "JWT", "CSS", "CLOUDINARY"])}
            </div>
          </div>
        </section>

        {/* Project 3 */}
        <section className="project-hero" ref={(el) => (projectRefs.current[2] = el)}>
          <h4 className="project-title">UKTourism – A UI/UX Tourism Platform Clone</h4>
          {renderSplide(travelImages2)}
          <div className="project-details">
            <p className="project-description">
              A polished MERN app mimicking real tourism platforms with modern UX.
            </p>
            <ul className="project-points">
              <li>🌍 Real user flows</li>
              <li>💡 Smooth transitions, UI feedback</li>
              <li>📊 REST API with session auth</li>
              <li>🌟 Reusable React components</li>
              <li>📱 Responsive grid layout</li>
              <li>🔐 Protected routes</li>
            </ul>
            <div className="tech-used">
              {renderTech(["React", "Node.js", "MongoDB", "Express", "CSS Modules"])}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
