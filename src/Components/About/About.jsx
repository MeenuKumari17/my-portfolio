import React from 'react'
import "./About.css"
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" height="60px" />
            </div>
            <div className="about-section">
                <p>Dedicated Frontend Developer with 1.7 years of experience specializing in crafting reusable component-based UI systems.
                    Proficient in HTML, CSS, and JavaScript, frameworks/libraries like React and Angular.js, adept at building modular
                    and scalable user interfaces. Demonstrated ability to develop efficient and maintainable codebases that contribute to
                    streamlined development workflows. Passionate about creating reusable components and design patterns that enhance
                    productivity and consistency across projects. Proven track record of collaborating with teams to deliver high-quality
                    front-end solutions that meet both user and business needs. Eager to leverage skills and experience to drive innovation
                    and contribute to the success of future projects.</p>
                <p>As a dedicated frontend developer, I specialize in creating responsive, visually appealing web interfaces that offer seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring design concepts to life, ensuring they are not only aesthetically pleasing but also highly functional across all devices. </p>
            </div>
        </div>
    )
}

export default About