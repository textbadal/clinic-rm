import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Specialities', href: '/specialities' },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="bg-[#1a1b26] text-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          DrManisha<span className="font-light">Rajesh</span>
        </Link>
        <div className="hidden lg:flex space-x-6 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-teal-400 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/book-appointment" className="hidden md:block bg-white text-[#1a1b26] px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm">
            Book Appointment
          </Link>  
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}  >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4 space-y-3 px-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="block hover:bg-[#2a2b38] px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)} >
              {link.name}
            </Link>
          ))}
          <Link   to="/book-appointment" 
            className="block text-center w-full mt-4 bg-white text-[#1a1b26] px-4 py-3 rounded-lg font-semibold text-sm"
            onClick={() => setIsOpen(false)} >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
