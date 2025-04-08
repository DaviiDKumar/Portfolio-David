import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../Css/Hero.css";

function Hero() {
  const letters = `Hi, I am DAVID`.split("");

  return (
    <div className="landing-container" id="home">
      <section className="hero">
        <div className="hero-left">
         <div className="hero-text">
         <h1 className="hero-title">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                className="hero-letter-gradient"
                initial={{ opacity: 0, y: -100, rotateX: 90, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
            </div>

          <p className="hero-subtext">
            I'm a <strong>passionate web developer</strong>. <br />
            I craft <strong>beautiful web experiences</strong> using modern technologies. <br />
            Check out my projects and <strong>let's connect</strong>! <br />
            I write code like poetry — except the compiler actually cries 😂. <br />
            <strong>And Coffee</strong> is my sidekick.
          </p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/narcissisti.c_?igsh=NDV4YmM3Yjhpc21h"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/dk764101?s=11"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/david-kumar-12a472279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src="/Logo/LOGO.jpg" alt="Logo" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
