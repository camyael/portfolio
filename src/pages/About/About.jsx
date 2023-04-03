import dev from '../../assets/img/portfolio/illustration-dev.svg'

const About = () => {
    return (
        <section id="sobre-mi">
            <div className="figure_star"></div>
            <h3>Sobre mí</h3>
            <div className="sobre-mi_info">
                <div className='sobre-mi_presentacion'>
                    {/* <p>¡Hola! Mi nombre es Camila, soy desarrolladora Front-End y actualmente me encuentro capacitándome para ser Full Stack con Back-End. Soy una gran fan de CSS y JavaScript, siempre me vas a encontrar buscando información y creando código, son mi dúo favorito ♥</p> */}
                    <p>¡Hola! Mi nombre es Camila, soy Desarrolladora Full Stack y actualmente me encuentro capacitándome como Diseñadora UX/UI para seguir mejorando mis servicios para clientes y mis proyectos personales.</p>
                    {/* <p>Me interesé en la programación por casualidad hace un año y medio, y animarme a meterme de lleno fue una de las mejores decisiones que tomé. Mi objetivo profesional es insertarme en el mundo laboral IT, y seguir aprendiendo y aplicando mis conocimientos en nuevos proyectos y desafíos.</p> */}
                    <p>Me interesé en la programación por casualidad hace un año y medio, y animarme a meterme de lleno fue una de las mejores decisiones que tomé. Mi objetivo profesional es insertarme en el mundo laboral IT, y seguir aprendiendo y aplicando mis conocimientos en nuevos proyectos y desafíos.</p>
                    <div>
                        <a href="./files/Camila-Villaverde_Curriculum.pdf" target='_blank' download={''}>descargar cv</a>
                    </div>
                </div>
                <div className="sobre-mi-img">
                    <img src={dev} alt="illustration developer"/>
                </div>
            </div>
        </section>
    )
}

export default About