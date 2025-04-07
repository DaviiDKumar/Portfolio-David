
  /* ======= Projects.jsx ======= */
  import "../Css/Project.css";
  import { useEffect, useRef } from "react";
  import { Splide, SplideSlide } from "@splidejs/react-splide";
  import "@splidejs/react-splide/css";
  
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
        {
          threshold: 0.3,
        }
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
  
    return (
      <div className="project-page " id="projects">
        <section className="projects-strip">
          <h1>MY Work</h1>
          <p>
            “Where pixels meet purpose, and every line of code tells a story.”
          </p>
        </section>
  
        <div className="project-right">
          <section className="project-hero" ref={(el) => (projectRefs.current[0] = el)}>
            <h4 className="project-title">GlobeTrek UI – Travel Dreams, Designed</h4>
            {renderSplide(travelImages)}
            <div className="project-details">
              <p className="project-description">
                A vibrant travel website frontend built to captivate and convert. It’s all about immersive visuals, intuitive layouts, and smooth interactions.
              </p>
              <ul className="project-points">
                <li>🏝️ Fullscreen hero images and destination sliders for immersive browsing</li>
                <li>🧱 Sticky navigation bar with smooth scrolling and highlight-on-scroll</li>
                <li>🎨 Custom CSS animations and hover effects to enhance interactivity</li>
                <li>📱 Fully responsive layout with mobile-first design principles</li>
                <li>🖼️ Lazy-loaded images and optimized asset delivery for fast load times</li>
              </ul>
              <div className="tech-used">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
            </div>
          </section>
  
          <section className="project-hero" ref={(el) => (projectRefs.current[1] = el)}>
            <h4 className="project-title">EduNexus – A Full-Stack Udemy Clone</h4>
            {renderSplide(imagesUdemy)}
            <div className="project-details">
              <p className="project-description">
                A full-stack e-learning platform where users can explore, enroll, and learn. Built with MERN, it supports real authentication, course flows, and user dashboards.
              </p>
              <ul className="project-points">
                <li>📚 User authentication with JWT & secure routes for personalized learning</li>
                <li>📽️ Course playback system with modular content sections</li>
                <li>🧑‍💼 Separate dashboards for instructors and students</li>
                <li>💬 Review & rating system with real-time form validation</li>
                <li>🌟 Fully integrated backend using Express & MongoDB with REST APIs</li>
                <li>⚡ Clean and modern RAW CSS</li>
              </ul>
              <div className="tech-used">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">JWT</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">CLOUDINARY</span>
              </div>
            </div>
          </section>
  
          <section className="project-hero" ref={(el) => (projectRefs.current[2] = el)}>
            <h4 className="project-title">UKTourism – A UI/UX Tourism Platform clone (React + Node)</h4>
            {renderSplide(travelImages2)}
            <div className="project-details">
              <p className="project-description">
                A modern tourism experience clone with real-world features like login, signup, and user integration. Built on the MERN stack with attention to visual polish and user flow.
              </p>
              <ul className="project-points">
                <li>🌍 Real user flows for authentication, booking, and profiles</li>
                <li>💡 Focused on UX: smooth transitions, dynamic UI feedback, and clear CTAs</li>
                <li>📊 Backend REST APIs with authentication and session management</li>
                <li>🌟 Custom reusable React components styled with CSS Modules</li>
                <li>📱 Mobile-friendly UI with flexible grid layouts</li>
                <li>🔐 Secure routes and protected components for logged-in users</li>
              </ul>
              <div className="tech-used">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">CSS Modules</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default Projects;
  