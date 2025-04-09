import React, { useEffect } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Instagram as InstagramIcon } from "@mui/icons-material";
import "../Css/Skills.css";

// Helper to slugify skill names into safe CSS class names
function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, "-");
}

const skills = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        className: "glow-react",
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        className: "glow-node",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        className: "glow-node",
    },
    {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        className: "glow-node",
    },
    {
        name: "Canva",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
        className: "glow-canvas",
    },
  
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        className: "glow-html",
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        className: "glow-css",
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        className: "glow-ts",
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        className: "glow-html",
    },
    {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        className: "glow-postman",
    },
    {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        className: "glow-vercel",
    },
  
  
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        className: "glow-js",
    },

];

function Skills() {
    useEffect(() => {
        const boxes = document.querySelectorAll(".skill-box.active");

        const handleTap = (e) => {
            const box = e.currentTarget;
            box.classList.add("glow");
            setTimeout(() => box.classList.remove("glow"), 1000);
        };

        boxes.forEach((box) => box.addEventListener("touchstart", handleTap));

        return () => {
            boxes.forEach((box) => box.removeEventListener("touchstart", handleTap));
        };
    }, []);

    return (
        <div className="contact-container">
            <section className="contact-skills-box " id="skills">
                <h2 className="skills-heading">Code Spells I Cast</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) =>
                        skill ? (
                            <div
                                key={index}
                                className={`skill-box active ${skill.className} skill-${slugify(skill.name)}`}
                            >
                                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            </div>
                        ) : (
                            <div key={index} className="skill-box empty" />
                        )
                    )}
                </div>
            </section>

            <section className="contact-form-box">
                <br />
                <h4 className="contact-heading">
                    <span><EmailIcon className="icon-left" /></span>
                    Summon Me With a Spell
                </h4>
                <p>Wanna collaborate, ask a question, or send memes? I’m just a click away:</p>

                <div className="contact-actions">
                    <a
                        href="/Assets/Icons/MainResumeDavid.pdf"
                        download
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DownloadIcon /> Download Resume
                    </a>

                    <a
                        href="mailto:david.bkbiet2025@gmail.com"
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <EmailIcon /> Email ME
                    </a>

                    <a
                        href="https://github.com/DaviiDKumar"
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon /> View GitHub
                    </a>

                    <a
                        href="https://www.instagram.com/narcissisti.c_?igsh=NDV4YmM3Yjhpc21h"
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon /> Instagram
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Skills;
