import './styles/App.css'
import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </div>
  );
}

export default App;
