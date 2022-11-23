import proyectosJson from '../json/proyectos.json'

const Proyects = () => {
    return(
        <section id="proyectos">
            <h3>Proyectos</h3>
            <div className='container-proyectos'>
                <ul>
                    {proyectosJson.map(item => (
                        <li>
                            <div>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                            <img src={`${process.env.PUBLIC_URL}/img/proyectos/${item.img}`} alt={item.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Proyects