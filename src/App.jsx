import './styles/App.css'
import {Routes, Route} from 'react-router-dom'

import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
