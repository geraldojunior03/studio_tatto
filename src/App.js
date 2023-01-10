import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Gallery from './components/pages/Gallery/Gallery';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobre-nos' element={<About />}/>
          <Route path='/galeria' element={<Gallery />}/>
          <Route path='/contato' element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
