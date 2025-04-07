import { useEffect, useRef } from "react";
import {
    Person,
    School,
    Work,
   Translate as TranslateIcon,
} from "@mui/icons-material";
import "../Css/About.css";

function AboutPage() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("slide-in");
                    } else {
                        entry.target.classList.remove("slide-in");
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page" id="about">
            <div className="about-left">
                <div
                    className="about-section about-who fade-left"
                    ref={(el) => (sectionsRef.current[0] = el)}
                >
                    <h3><Person /> Introduction </h3>
                    <p>
                        🙋‍♂️ Hey there! I'm David — a final-year Computer Science student, a caffeine-fueled builder of beautiful web things, and a frequent debugger of mysterious errors that vanish when you console.log() them.
                        <br /><br />
                        🎯 I love creating websites that don’t just work but feel good to use.
                        <br />
                        🧩 I treat every bug like a puzzle — the kind that keeps me up at 2AM, whispering "just one more fix".
                        <br />
                        ✨ I care about the little details: micro-interactions, seamless UX, and CSS that actually makes sense.
                        <br /><br />
                        I’m curious by nature, organized when I need to be, and just the right amount of nerdy to genuinely enjoy learning new frameworks on weekends.
                    </p>
                </div>

                <div
                    className="about-section about-learning fade-left"
                    ref={(el) => (sectionsRef.current[1] = el)}
                >
                    <h3><School /> Where I’ve Been Learning</h3>

                    <div className="timeline-container">
                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <h4>🎓 B.Tech in Computer Science</h4>
                                <p>
                                    <strong>BK Birla Institute of Engineering & Technology, Pilani</strong><br />
                                    Final year — learned through projects, hackathons & late-night debugging.<br />
                                    Specialized in full-stack development and software engineering.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <h4>📘 Higher Secondary Education</h4>
                                <p>
                                    <strong>Prince Uch Madhyamik Vidyalaya</strong><br />
                                    Focused on logic, mathematics, and physics. Built my problem-solving mindset here.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <h4>🏫 Early Schooling</h4>
                                <p>
                                    <strong>Dalmia Vidya Mandir</strong><br />
                                    Where it all started — explored tech, science & built my foundation.<br />

                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    className="about-section about-languages fade-left"
                    ref={(el) => (sectionsRef.current[2] = el)}
                >
                    <h3><TranslateIcon/> Languages I Speak</h3>

                   <ul className="language-list">
                        <li>English</li>
                        <li>Hindi</li>
                        
                        </ul>
                    <p>
                        
                        <br />
                        👨‍💻<b>Fluent in dev-speak:</b> <br /> "npm install broke everything", "merge conflict again??", and "let me just Google that real quick"
                        <br />
                         I can explain complex code to non-tech folks without turning into a robot (unless it's a themed hackathon)
                    </p>
                </div>

                <div
                    className="about-section about-projects fade-left"
                    ref={(el) => (sectionsRef.current[3] = el)}
                >
                    <h3><Work /> Cool Stuff I’ve Built</h3>
                    <p>
                        🧩 Here’s a peek into my dev playground:
                        <br /><br />
                        ✅ Mini JS projects — to-do apps, modals, calculators, even a game or two
                        <br />
                        🌍 A tourism website with MongoDB filtering, custom dark/light theme, and an actually usable UI
                        <br />
                        🎓 An Udemy clone with a fully functional shopping cart, login/auth system, and course previews
                        <br />
                        🎨 Fun UI experiments — color pickers, animated toggles, and buttons with serious personality
                    </p>
                </div>


            </div>

            <div className="about-strip">
                <h1>About Me</h1>
                <p>“Making websites that work... and occasionally wow”</p>
            </div>
        </div>
    );
}

export default AboutPage;
