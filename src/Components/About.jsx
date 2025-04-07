import { useEffect, useRef } from "react";
import {
    Person,
    School,
    Build,
    Language,
    Work,
    Info,
    GitHub as GitHubIcon,
    LinkedIn as LinkedInIcon,
    Email as EmailIcon,
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

    const aboutSections = [
        {
            icon: <Person />,
            title: "Who am I?",
            content: `🙋‍♂️ Hey there! I'm David — a final-year Computer Science student, a caffeine-fueled builder of beautiful web things, and a frequent debugger of mysterious errors that vanish when you console.log() them.

🎯 I love creating websites that don’t just work but feel good to use.  
🧩 I treat every bug like a puzzle — the kind that keeps me up at 2AM, whispering "just one more fix".  
✨ I care about the little details: micro-interactions, seamless UX, and CSS that actually makes sense.

🧠 I’m curious by nature, organized when I need to be, and just the right amount of nerdy to genuinely enjoy learning new frameworks on weekends.`,
        },
        {
            icon: <School />,
            title: "Where I’ve Been Learning",
            content: `🎓 Currently finishing my B.Tech in Computer Science from BK Birla Institute of Engineering & Technology, Pilani. It's where I’ve mastered coding through assignments, hackathons, and occasional existential crises (usually during exams).

📘 Before that, I cracked equations and logic at Prince Uch Madhyamik Vidyalaya, built my foundation at Dalmia Vidya Mandir, and managed a CGPA of 7.5/10 — thanks to Google, grit, and gallons of coffee.`,
        },
        {
            icon: <Language />,
            title: "Languages I Speak",
            content: `🗣️ Fluent in English and Hindi  
👨‍💻 Fluent in dev-speak: "npm install broke everything", "merge conflict again??", and "let me just Google that real quick"  
🤝 I can explain complex code to non-tech folks without turning into a robot (unless it's a themed hackathon)`,
        },
        {
            icon: <Work />,
            title: "Cool Stuff I’ve Built",
            content: `🧩 Here’s a peek into my dev playground:

Mini JS projects — to-do apps, modals, calculators, even a game or two  
🌍 A tourism website with MongoDB filtering, custom dark/light theme, and an actually usable UI  
🎓 An Udemy clone with a fully functional shopping cart, login/auth system, and course previews  
🎨 Fun UI experiments — color pickers, animated toggles, and buttons with serious personality`,
        },
        {
            icon: <Info />,
            title: "How to Reach Me",
            content: `📬 Wanna collaborate, ask a question, or send memes? I’m just a click away:

📧 Email: david.bkbiet2025@gmail.com  
🔗 Social Links Below`,
            socials: true,
        },
    ];

    return (
        <div className="about-page" id="about">
            <div className="about-left">
                {aboutSections.map((section, i) => (
                    <div
                        className="about-section fade-left"
                        ref={(el) => (sectionsRef.current[i] = el)}
                        key={i}
                    >
                        <h3>
                            {section.icon} {section.title}
                        </h3>
                        <p style={{ whiteSpace: "pre-line" }}>{section.content}</p>
                        {section.socials && (
                            <div className="about-socials-icon">
                                <a href="https://github.com/DaviiDKumar" target="_blank" rel="noreferrer">
                                    <GitHubIcon />
                                </a>
                                <a href="https://linkedin.com/in/daviiidkumar" target="_blank" rel="noreferrer">
                                    <LinkedInIcon />
                                </a>
                                <a href="mailto:daviid.webdev@gmail.com" target="_blank" rel="noreferrer">
                                    <EmailIcon />
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="about-strip">
                <h1>About Me</h1>
                <p>“Where pixels meet purpose, and every line of code tells a story.”</p>
            </div>
        </div>
    );
}

export default AboutPage;
