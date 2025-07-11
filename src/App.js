import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
