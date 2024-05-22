import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const Skills = () => {
    return (
        <div className='skill' id='skill'>
            <div className="skill-title">
                <h1>Tech Stack</h1>
                <img src={theme_pattern} alt="" height="60px" />
            </div>
            <div className="skill-lists">
                <div className="skill-list">
                    <p>HTML & CSS</p><hr style={{ width: "70%" }} />
                </div>
                <div className="skill-list">
                    <p>JavaScript</p><hr style={{ width: "80%" }} />
                </div>
                <div className="skill-list">
                    <p>React JS</p><hr style={{ width: "90%" }} />
                </div>
                <div className="skill-list">
                    <p>Bootstrap</p><hr style={{ width: "70%" }} />
                </div>
                <div className="skill-list">
                    <p>REST API</p><hr style={{ width: "60%" }} />
                </div>
            </div>
        </div>

    )
}

export default Skills