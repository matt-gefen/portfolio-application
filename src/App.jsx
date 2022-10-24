import './scss/App.scss'
import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
