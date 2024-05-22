import React from 'react'
import './Project.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Project = () => {
  return (
    <div className='project' id='project'>
        <div className="project-title">
            <h1>My Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="project-container">
            {mywork_data.map((work, index) =>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="project-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" width="18px" />
        </div>
    </div>
  )
}

export default Project