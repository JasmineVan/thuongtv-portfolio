import React from 'react';
import '../assets/styles/WorkExperience.css';
import { FaLink } from 'react-icons/fa';

const WorkExperience = ({ time, company, title, description, projects }) => {
    const duration = calculateDuration(time);
    const formattedStartDate = formatDate(time);

    return (
        <div className="work-experience-card">
            <div className="centered-info">
                <h3 className="company-name">{company}</h3>
                <div className="time">{formattedStartDate} - Present ({duration})</div>
                <h4 className="job-title">{title}</h4>
            </div>
            <p className="description">{description}</p>
            <h5 className="spotlight-projects-title">Spotlight Projects:</h5>
            <div className="spotlight-projects">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h6 className="project-title">{project.title}</h6>
                        <div className="project-time">{project.time}</div>
                        <p className="project-description">{project.description}</p>
                        <div className="tech-demo-container">
                            <div className="tech-stack">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="tech-item" style={{ backgroundColor: project.techStackColors[i] }}>{tech}</span>
                                ))}
                            </div>
                            {/* <a href={project.link} className="demo-link" target="_blank" rel="noopener noreferrer">
                                <FaLink />
                            </a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperience;

const calculateDuration = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
};

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

