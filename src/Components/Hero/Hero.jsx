import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <h1>I'm Meenu Kumari</h1>
            <h2>Frontend Developer</h2>
            <p>
            "Creative frontend developer crafting responsive, visually stunning web experiences."
            </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect</AnchorLink></div>
                <div className="hero-resume">Resume</div>
            </div>
        </div>
    )
}

export default Hero