import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Specialities from './pages/Specialities';
import Treatments from './pages/Treatments';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import HomeNursingServices from './pages/home-nursing-services';
import TeleConsultation from './pages/TeleConsultation';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/home-nursing-services" element={<HomeNursingServices />} />
            <Route path="/TeleConsultation" element={<TeleConsultation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;