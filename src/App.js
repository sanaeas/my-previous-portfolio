import './App.css';
import NavBarComp from './components/NavBarComp';
import Banner from './components/Banner';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
