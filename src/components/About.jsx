const About = () => {
    return (
        <section id="sobre-mi">
            <h3>Sobre mí</h3>
            <div className="sobre-mi_info">
                <div className="sobre-mi-img">
                    <img src={`${process.env.PUBLIC_URL}/img/sakura-96.png`} alt="icon-flor" />
                </div>
                <div>
                    <p>¡Hola! Mi nombre es Camila, soy desarrolladora Front-End y actualmente me encuentro capacitandome para ser Full Stack con Back-End. Soy una gran fan de CSS y JavaScript, siempre me vas a encontrar buscando información y creando código, son mi dúo favorito ♥</p>
                    <p>Me interesé en la programación por casualidad hace un año y medio y animarme a meterme de lleno fue una de las mejores decisiones que tomé. Mi objetivo es insertarme en el mundo laboral IT y seguir aprendiendo y aplicando mis conocimientos en nuevos proyectos y desafíos.</p>
                </div>
            </div>
        </section>
    )
}

export default About