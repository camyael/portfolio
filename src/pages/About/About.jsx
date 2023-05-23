import dev from '../../assets/img/portfolio/illustration-dev.svg'
import download from '../../assets/img/portfolio/download.svg'

const About = () => {
    return (
        <section id="sobre-mi">
            <div className="figure_star"></div>
            <h3>Sobre mí</h3>
            <div className="sobre-mi_info">
                <div>
                    <div className='sobre-mi_presentacion'>
                        <p>¡Hola! Mi nombre es Camila, soy Desarrolladora Full Stack y actualmente me encuentro capacitándome como Diseñadora UX/UI para seguir mejorando mis servicios para clientes y mis proyectos personales.</p>
                        <p>Me interesé en la programación por casualidad a finales del 2021 y animarme a meterme de lleno fue una de las mejores decisiones que tomé. Mi objetivo profesional es insertarme en el mundo laboral IT, y seguir aprendiendo y aplicando mis conocimientos en nuevos proyectos y desafíos.</p>
                    </div>
                    <div className="sobre-mi-img">
                        <img src={dev} alt="illustration developer"/>
                    </div>
                </div>
                <div className='link_cv'>
                    <a href={`${process.env.PUBLIC_URL}/files/Camila-Yael-Villaverde_Curriculum.pdf`} target='_blank' rel='noreferrer' download={''}><img src={download} alt='descargar'/>Descargar cv</a>
                </div>
            </div>
        </section>
    )
}

export default About