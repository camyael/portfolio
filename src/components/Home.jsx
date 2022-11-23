const Home = () => {
    return (
        <section id="home">
            <div id="img-principal">
                <img src={`${process.env.PUBLIC_URL}/img/20221121_130049.jpg`} alt="presentacion"/>
            </div>
            <div className="presentacion">
                <p><span className="hi-there">hi there</span> ♡</p>
                <h2>Camila Villaverde</h2>
                <p className="presentacion-area">Front-End Developer & Back-End en proceso</p>
            </div>
        </section>
    )
}

export default Home