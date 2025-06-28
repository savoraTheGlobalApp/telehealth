import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OnlineConsultation from './pages/OnlineConsultation';
import MedicalTourism from './pages/MedicalTourism';
import Doctors from './pages/Doctors';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/online-consultation" element={<OnlineConsultation />} />
            <Route path="/medical-tourism" element={<MedicalTourism />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 