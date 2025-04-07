import React, { useEffect } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { InstaGram as InstagramIcon } from "@mui/icons-material";
import "../Css/Skills.css";



const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", className: "glow-react" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", className: "glow-node" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", className: "glow-node" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", className: "glow-node" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", className: "glow-js" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", className: "glow-html" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", className: "glow-css" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", className: "glow-ts" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", className: "glow-html" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", className: "glow-postman" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", className: "glow-vercel" },
    "", // empty spacing box
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
        <div className="contact-container" >
            <section className="contact-skills-box">
                <h2 className="skills-heading">

                    Code Spells I Cast

                </h2>
                <div className="skills-grid">
                    {skills.map((skill, index) =>
                        skill ? (
                            <div
                                key={index}
                                className={`skill-box active ${skill.className}`}
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
                <p> Wanna collaborate, ask a question, or send memes? I’m just a click away:</p>

                <div className="contact-actions">



                    {/* Download Resume */}
                    <a
                        href="/file:///D:/Serious%20Projects/New-portfolio/public/Assets/Icons/Gray%20and%20White%20Simple%20Professional%20Marketing%20Manager%20CV%20Resume.pdf"
                        download
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DownloadIcon /> Download Resume
                    </a>

                    {/* Email Link */}


                    {/* GitHub Link */}
                    <a
                        href="david.bkbiet2025@gmail.com"  // Replace with your actual email
                        className="contact-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <EmailIcon />  Email ME
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
                        href="https://www.instagram.com/narcissisti.c_?igsh=NDV4YmM3Yjhpc21h"  // Replace with your actual Instagram username
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
