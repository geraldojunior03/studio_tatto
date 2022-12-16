import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
