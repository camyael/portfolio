import dev from '../../assets/img/portfolio/illustration-dev.svg'
import download from '../../assets/img/portfolio/download.svg'
import { useState } from 'react'

const About = () => {
    const [ dowload, setDowload ] = useState(false)

    return (
        <section id="sobre-mi">
            <div className="figure_star"></div>
            <h3>Sobre mí</h3>
            <div className="sobre-mi_info">
                <div>
                    <div className='sobre-mi_presentacion'>
                        <p>¡Hola! Mi nombre es Camila, Desarrolladora Full Stack con preferencia al Frontend, y Diseñadora UX/UI. Me caracterizo por ser responsable, proactiva y colaborativa; disfruto trabajando en equipo.</p>
                        <p>Me interesé en la programación por casualidad a finales del 2021 y animarme a entrar a este mundo fue una de las mejores decisiones que tomé. Mi objetivo principal es adquirir experiencia y crecer como profesional en la industria IT, donde pueda aplicar los conocimientos y habilidades obtenidos hasta ahora y enfrentar nuevos desafíos.</p>
                    </div>
                    <div className="sobre-mi-img">
                        <img src={dev} alt="illustration developer"/>
                    </div>
                </div>
                <div className='link_cv'>
                    <a href={`${process.env.PUBLIC_URL}/files/Camila-Villaverde_CV.pdf`} target='_blank' rel='noreferrer' download={''} onClick={() => setDowload(true)}>
                        {
                            !dowload
                            ? <img src={download} alt='descargar'/>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        }
                        {
                            !dowload
                            ? <p>Descargar cv</p>
                            : <p>Descargado</p>
                        }
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About