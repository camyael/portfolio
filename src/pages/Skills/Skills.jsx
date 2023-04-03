// import { useEffect, useState } from "react"
import skillsJson from "../../json/skills.json"

const Skills = () => {
    return (
        <section id="skills">
            <div className="figure_star"></div>
            <h3>Skills</h3>
            <div className="skills-all">
                {skillsJson.map(item => (
                    <div className="skills-img" key={item.name}>
                        <div className="skills-img-img">
                            <img src={`${process.env.PUBLIC_URL}/img/skills/${item.img}`} alt={item.name} />
                        </div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills