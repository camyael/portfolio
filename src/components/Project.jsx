import proyectosJson from '../json/proyectos.json';
import prev from '../assets/img/portfolio/prev.svg';
import next from '../assets/img/portfolio/next.svg';
import github from '../assets/img/portfolio/github.svg'
import { useEffect, useState } from 'react';

const Project = () => {
    const [selectedProject, setSelectedProject ] = useState([proyectosJson[0], proyectosJson[1], proyectosJson[2]])
    const [selectedIndex, setSelectedIndex] = useState([0, 1, 2])

    useEffect(() => {
        setSelectedProject([proyectosJson[selectedIndex[0]], proyectosJson[selectedIndex[1]], proyectosJson[selectedIndex[2]]])
    }, [selectedIndex])

    const handle_prev = async() => {
        const array = []
        selectedIndex.forEach(index => {
            index === 0 ? array.push(proyectosJson.length - 1) : array.push(index - 1)
        })
        setSelectedIndex(array)
    }

    const handle_next = async() => {
        const array = []
        selectedIndex.forEach(index => {
            index === proyectosJson.length - 1 ? array.push(0) : array.push(index + 1)
        })
        setSelectedIndex(array)
    }

    return(
        <div className='container'>
            <button onClick={handle_prev}><img className='control prev-project' src={prev} alt=''/></button>
            <div className='container-proyectos'>
                {selectedProject.map(item => (
                    <div className='item-proyectos' key={item.title}>
                        <img src={`${process.env.PUBLIC_URL}/img/projects/${item.img}`} alt={item.title}/>
                        <div className='proyectos-info'>
                            <p>{item.title}</p>
                            <div className='links-proyectos'>
                                    <a className='links-proyectos-deploy' href={item.linkDeploy} target='_blank' rel="noreferrer"> <p>Deploy</p></a>
                                <div className='links-proyectos-github'>
                                    <a href={item.linkGithub} target='_blank' rel="noreferrer">
                                        <img src={github} alt={`github-${item.title}`}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handle_next}><img className='control next-project' src={next} alt=''/></button>
        </div>
    )
}

export default Project;