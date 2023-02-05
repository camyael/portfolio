const Home = () => {
    return (
        <section id="home">
            <div id="img-principal">
                <img src={`${process.env.PUBLIC_URL}/img/20221121_130049.jpg`} alt="presentacion" oncontextmenu="return false"/>
            </div>
            <div className="presentacion">
                <p><span className="hi-there">hi there</span> ♡</p>
                <h2>Camila Villaverde</h2>
                <p className="presentacion-area">Full Stack Developer</p>
            </div>
        </section>
    )
}

export default Home