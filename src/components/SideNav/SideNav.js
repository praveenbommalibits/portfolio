import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="src/IMG_0585.jpg"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Praveen Bommali</h2>
            <p className="subtitle">"Senior Software Engineer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>Introduction</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>SkillSet</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
        
    );
};