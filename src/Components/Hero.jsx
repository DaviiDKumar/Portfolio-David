import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../Css/Hero.css";


function Hero() {
    return (<>
        <div className="landing-container" id="home">
           

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-left">
                    <h1 className="hero-title">Hi, I'm DAVID</h1>
                    <p className="hero-subtext">
                        I'm a <strong>passionate web developer</strong>. <br />
                        I craft <strong>beautiful web experiences</strong> using modern technologies. <br />
                        Check out my projects and <strong>let's connect</strong>! <br />
                        I write code like poetry — except the compiler actually cries 😂. <br />
                        <strong>And Coffee </strong> is my sidekick.
                    </p>
                    
                    {/* Social Icons */}
                    <div className="social-icons">
                        <a href="https://www.instagram.com/narcissisti.c_?igsh=NDV4YmM3Yjhpc21h" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://x.com/dk764101?s=11" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        <a href="https://www.linkedin.com/in/david-kumar-12a472279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    </div>

                </div>
                <div className="hero-right">
                    <img
                        src="/Logo/LOGO.jpg"
                        alt="Logo-pic"
                    />
                </div>

            </section>

        </div>
      
    </>
    );
}

export default Hero;