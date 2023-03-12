import './App.css';
import NavBar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacto from './pages/Contacto';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Contacto/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
