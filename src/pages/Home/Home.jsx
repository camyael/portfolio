import profile from '../../assets/img/portfolio/portfolio-profile.png';
import { Navbar } from '../../components';

const Home = () => {
    return (
        <section id="home">
            <Navbar/>
            <div id="img-principal">
                <img src={profile} alt="presentacion"/>
            </div>
            <div className="presentacion">
                <p><span className="hi-there">hi there</span> ♡</p>
                <h2>Camila Villaverde</h2>
                <p className="presentacion-area">Full Stack Developer</p>
            </div>
        </section>
    )
}

export default Home;