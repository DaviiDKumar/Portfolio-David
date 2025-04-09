import "../Css/Project.css";
import { useState, useEffect, useRef } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
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




  const renderTech = (techList) =>
    techList.map((tech, i) => (
      <span className="tech-tag" key={i}>
        {techIcons[tech] && <span className="icon">{techIcons[tech]}</span>} {tech}
      </span>
    ));

  return (
    <div className="project-page" id="projects">
      <section className="projects-strip">
        <h3>MY Projects</h3>
        <p>“Where pixels meet purpose, and every line of code tells a story.”</p>
      </section>

      <div className="project-right">
        {/* Project 1 */}
        <section className="project-hero" ref={(el) => (projectRefs.current[0] = el)}>
          <h4 className="project-title">GlobeTrek UI – Travel Dreams, Designed</h4>
          <div className="project-showcase">
            <img src="/Images/travel1.jpg" alt="Main Project" className="main-project-image" />

            <button className="see-more-btn" onClick={toggleModal}>See More</button>

            {isOpen && (
              <div className="modal-overlay" onClick={toggleModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <h4>Additional Screens</h4>
                  <div className="modal-images">
                    <img src="/Images/travel4.jpg" alt="More 1" />
                    <img src="/Images/travel5.jpg" alt="More 2" />
                    <img src="/Images/travel6.jpg" alt="More 3" />
                  </div>
                  <button className="close-btn-p" onClick={toggleModal}>Close</button>
                </div>
              </div>
            )}
          </div>
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

          </div>
          <div className="tech-used">{renderTech(["HTML", "CSS", "JavaScript"])}</div>
        </section>

        {/* Project 2 */}
        <section className="project-hero" ref={(el) => (projectRefs.current[1] = el)}>
          <h4 className="project-title">EduNexus – A Full-Stack Udemy Clone</h4>

          <div className="project-showcase">
            <img src="/Images/ud1.jpg" alt="Main Project" className="main-project-image" />
            <button className="see-more-btn" onClick={toggleModal}>See More</button>

            {isOpen && (
              <div className="modal-overlay" onClick={toggleModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <h4>Additional Screens</h4>
                  <div className="modal-images">
                    <img src="/Images/ud2.jpg" alt="More 1" />
                    <img src="/Images/ud3.jpg" alt="More 2" />
                    <img src="/Images/ud4.jpg" alt="More 3" />
                  </div>
                  <button className="close-btn-p" onClick={toggleModal}>Close</button>
                </div>
              </div>
            )}
          </div>

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
              <li><a href="https://udem-y-clone.vercel.app/" >Live Perview</a></li>
            </ul>
          </div>
          <div className="tech-used">
            {renderTech(["React", "Node.js", "Express", "MongoDB", "JWT", "CSS", "CLOUDINARY"])}
          </div>
        </section>

        {/* Project 3 */}
        <section className="project-hero" ref={(el) => (projectRefs.current[2] = el)}>
  <h4 className="project-title">UKTourism – A UI/UX Tourism Platform Clone</h4>

  <div className="project-showcase">
    <img src="/Images/uk4.jpg" alt="Main Project" className="main-project-image" />
    <button className="see-more-btn" onClick={toggleModal}>See More</button>

    {isOpen && (
      <div className="modal-overlay" onClick={toggleModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h4>Additional Screenshots</h4>
          <div className="modal-images">
            <img src="/Images/uk2.jpg" alt="More 1" />
            <img src="/Images/u3.jpg" alt="More 2" />
            <img src="/Images/uk1.jpg" alt="More 3" />
          </div>
          <button className="close-btn-p" onClick={toggleModal}>Close</button>
        </div>
      </div>
    )}
  </div>

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
  </div>
  <div className="tech-used">
    {renderTech(["React", "Node.js", "MongoDB", "Express", "CSS Modules"])}
  </div>
</section>

      </div>
    </div>
  );
}

export default Projects;
