import React from "react";
import projectHangman from "../images/start-screen.png";
import techBlog from "../images/techblogSS.png";
import noteTaker from "../images/note-taker-ss01.png"
import foodieForum from "../images/Foodie-forum-home.png"
import weatherDashboard from "../images/weather-dashboard ss.png"
import Workday from "../images/work-day-scheduler-SS1.png"
import Project from "./Project";
import "../style/Portfolio.css"


function Portfolio() {
    return (
        <>
        <div id='portfolio' className="portfolio-wrapper>" >
            <h1 className="portfolio-title">My Portfolio</h1>
                {[
                    {
                        title: 'Tech Blog',
                        description: "CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts",
                        imgSrc: techBlog,
                        deployedLink: 'https://secure-oasis-09554-76ae4dbab89b.herokuapp.com/',
                        githubLink: 'https://github.com/amercado94/tech-blog.git',
                    },
                    {
                        title: 'Foodie Forum',
                        description: "An app using the MVC paradigm, created our own server-side API, add user authentication, and connected to a database.",
                        imgSrc: foodieForum,
                        deployedLink: 'https://foodie-forum-8-9cb2bc2e8559.herokuapp.com',
                        githubLink: 'https://github.com/andria-goodwin/foodie-forum.git',
                    },
                    {
                        title: 'Note Taker',
                        description: "Note Taker that can be used to write and save notes.",
                        imgSrc: noteTaker,
                        deployedLink: 'https://blooming-retreat-79321-b55441a2193f.herokuapp.com',
                        githubLink: 'https://github.com/amercado94/note-taker.git',
                    },
                    {
                        title: 'Project Hangman',
                        description: "Data integration from multiple server-side API requests",
                        imgSrc: projectHangman,
                        deployedLink: 'https://andria-goodwin.github.io/project-hangman/',
                        githubLink: 'https://github.com/andria-goodwin/project-hangman.git',
                    },
                    {
                        title: 'Weather Dashboard',
                        description: "A weather dashboard using a third-party API that runs in the browser and features dynamically updated HTML and CSS.",
                        imgSrc: weatherDashboard,
                        deployedLink: 'https://amercado94.github.io/weather-dashboard/',
                        githubLink: 'https://github.com/amercado94/weather-dashboard.git',
                    },
                    {
                        title: 'Workday Scheduler',
                        description: "A calendar application that allows a user to save events for each hour of a typical working day (9am–5pm).",
                        imgSrc: Workday,
                        deployedLink: 'https://amercado94.github.io/work-day-scheduler/',
                        githubLink: 'https://github.com/amercado94/work-day-scheduler.git',
                    },
                ].map((project, index) => (
                    <div className="card-map" key={index}>
                        <Project
                            title={project.title}
                            description={project.description}
                            imgSrc={project.imgSrc}
                            deployedLink={project.deployedLink}
                            githubLink={project.githubLink}
                            />
                    </div>
                ))}
        </div>
        </>
    );
}

export default Portfolio;