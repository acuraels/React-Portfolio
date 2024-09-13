import React from 'react';
import "./../styles/main.css";



import meImage from '../assets/me.png';

import htmlLogo from '../assets/HTML5-logo.svg';
import cssLogo from '../assets/CSS3-logo.svg';
import jsLogo from '../assets/JS-logo.svg';

import yachtProject from '../assets/yacht-project.png';
import butterProject from '../assets/butter-project.png';

import UrFUlogo from '../assets/UrFU.svg';
import devLogo from '../assets/Dev-logo.svg';



const Main = () => {
    return (
        <main className="main">
            <a href="#" className="back-to-top">↑</a>

            <section className="hero" id="about-me">
                <img className="hero-img" src={meImage} alt="Me" />

                <h1 className="hero-title">Hi, my name is Dan!</h1>

                <p className="hero-text">
                    I'm a beginner front-end developer with experience in languages such as Python and C#.
                    Currently, I'm actively learning JavaScript. I wrote a game on Windows Forms.
                    Created three static sites with a pleasant UI. Currently a student at UrFU, my goal in the
                    future is to become a Full-Stack web developer. My English proficiency is at a B2-C1 level.
                </p>

                <a className="btn-hero" href="https://github.com/acuraels" target="_blank" rel="noreferrer">See my GitHub</a>
            </section>

            <section className="skills" id="my-skills">
                <h2 className="skills-title">EXPERIENCED WITH</h2>

                <ul className="skills-imgs">
                    <li>
                        <img className="skills-img" src={htmlLogo} alt="HTML" />
                    </li>
                    <li>
                        <img className="skills-img" src={cssLogo} alt="CSS" />
                    </li>
                    <li>
                        <img className="skills-img" src={jsLogo} alt="JavaScript" />
                    </li>
                </ul>
            </section>

            <section className="projects" id="my-projects">
                <h2 className="projects-title">PROJECTS</h2>

                <div className="projects-container">
                    <div className="project-container">
                        <a href="https://acuraels.github.io/SailClubProject/">
                            <img className="project-img" src={yachtProject} alt="Yacht-club" />
                        </a>
                        <h3 className="project-title">CLICK HERE TO VISIT</h3>
                        <p className="project-text">YACHT CLUB</p>
                    </div>

                    <div className="project-container">
                        <a href="https://acuraels.github.io/SwedishButter/">
                            <img className="project-img" src={butterProject} alt="Swedish bitter" />
                        </a>
                        <h3 className="project-title">CLICK HERE TO VISIT</h3>
                        <p className="project-text">SWEDISH BITTER</p>
                    </div>
                </div>
            </section>

            <section className="experience" id="my-experience">
                <h2 className="experience-title">EXPERIENCE</h2>

                <div className="experience-container">
                    <div className="experience-item">
                        <div className="experience-sub-item-1">
                            <img className="experience-img" src={UrFUlogo} alt="UrFU" />
                            <h3 className="experience-role">GameDesigner</h3>
                            <p className="experience-date">Sep 2024 - Jan 2024</p>
                        </div>

                        <div className="experience-sub-item-2">
                            <p className="experience-text">
                                As a Game Designer in a university team, I conceptualized and
                                developed gameplay mechanics for a visual novel. Collaborated with designers and programmers
                                to create engaging storylines and interactive elements, ensuring a seamless user experience
                                that captivated the audience.
                            </p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-sub-item-1">
                            <img className="experience-img" src={UrFUlogo} alt="UrFU" />
                            <h3 className="experience-role">TeamLead</h3>
                            <p className="experience-date">Feb 2024 - June 2024</p>
                        </div>

                        <div className="experience-sub-item-2">
                            <p className="experience-text">
                                Led a team of students in developing a full-stack web application designed to assist students with
                                course management. Coordinated front-end, design, and analytics development, implemented
                                project timelines, and ensured effective communication among team members, resulting in a user-friendly platform.
                            </p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-sub-item-1">
                            <img className="experience-img" src={devLogo} alt="UrFU" />
                            <h3 className="experience-role">Independent front-end developer</h3>
                            <p className="experience-date">July 2024 - Present</p>
                        </div>

                        <div className="experience-sub-item-2">
                            <p className="experience-text">
                                As a self-taught front-end developer, I specialize in creating
                                responsive and visually appealing web interfaces. Focused on mastering HTML5, CSS3, and
                                JavaScript I have built several static web-pages and am continuously expanding my skills to
                                become a proficient Full-Stack Developer. Looking forward to learning the MERN stack and joining
                                a university team of students in an upcoming project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;
