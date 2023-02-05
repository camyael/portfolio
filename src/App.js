import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

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
