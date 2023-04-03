import linkedin from '../assets/img/portfolio/linkedin.svg';
import github from '../assets/img/portfolio/github1.svg';

const Footer = () => {
    return(
        <footer id="footer">
            <div className="footer_networks">
                <a href="https://www.linkedin.com/in/camilavillaverde/" rel="noreferrer" target='_blank'><img src={linkedin} alt="LinkedIn Logo"/></a>
                <a href="http://github.com/camyael" rel='noreferrer' target='_blank'><img src={github} alt='Github Logo'/></a>
            </div>
            <p>Hecho con 💗 por Camila</p>
        </footer>
    )
}

export default Footer