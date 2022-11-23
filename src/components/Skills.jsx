// import { useEffect, useState } from "react"
import skillsJson from "../json/skills.json"

const Skills = () => {
    // const [skills, setSkills] = useState

    // useEffect(() => {
    //     fetch('/json/skills.json')
    //     .then(res => res.json())
    //     .then(datos => {
    //         setSkills(datos)
    //     })
    // }, [setSkills])

    return (
        <section id="skills">
            <h3>Skills</h3>
            <div className="skills-all">
                {skillsJson.map(item => (
                    <div className="skills-img">
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