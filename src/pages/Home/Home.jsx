import profile from '../../assets/img/portfolio/portfolio-profile.png';
import { Navbar } from '../../components';
import github from '../../assets/img/portfolio/github1-pink.svg';
import linkedin from '../../assets/img/portfolio/linkedin-pink.svg'

const Home = () => {
    return (
        <section id="home">
            <Navbar/>
            <div id="img-principal">
                <img src={profile} alt="presentacion"/>
                <div className='star'></div>
            </div>
            <div className="presentacion">
                <p><span className="hi-there">hi there</span> ♡</p>
                <h2>Camila Villaverde</h2>
                <p className="presentacion-area">Full Stack Developer</p>
                <div className='presentacion-redes'>
                    <div><a href='https://www.linkedin.com/in/camilavillaverde/' rel='noreferrer' target='_blank'><img src={linkedin} alt='linkedin'/></a></div>
                    <div><a href='http://github.com/camyael' rel='noreferrer' target='_blank'><img src={github} alt='github'/></a></div>
                </div>
            </div>
            <div className='blur_div'>
                <div className='blur pink'></div>
                <div className='blur coral'></div>
            </div>
        </section>
    )
}

export default Home;