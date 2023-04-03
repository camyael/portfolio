import './App.css';
import { Footer } from './components';
import { Home, About, Projects, Skills, Contact } from './pages'

function App() {
  return (
    <>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
