import proyectosJson from '../json/proyectos.json'

const Proyects = () => {
    return(
        <section id="proyectos">
            <h3>Proyectos</h3>
            <div className='container-proyectos'>
                <ul>
                    {proyectosJson.map(item => (
                        <li>
                            <img src={`${process.env.PUBLIC_URL}/img/proyectos/${item.img}`} alt={item.title}/>
                            <div className='proyectos-info'>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                                <div className='links-proyectos'>
                                    <div className='links-proyectos-deploy'>
                                        <a href={item.linkDeploy}>
                                            <img src={`${process.env.PUBLIC_URL}/img/link.png`} alt={`deploy-${item.title}`}/>
                                            <p>deploy</p>
                                        </a>
                                    </div>
                                    <div className='links-proyectos-github'>
                                        <a href={item.linkGithub}>
                                            <img src={`${process.env.PUBLIC_URL}/img/skills/github.svg`} alt={`github-${item.title}`}/>
                                            <p>github</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Proyects