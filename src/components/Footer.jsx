import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fc] pt-16 pb-8 border-t border-gray-200 text-[#3b4358]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-[#1e3a8a] text-2xl font-bold tracking-tight">
              <span className="w-8 h-8 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-sm mr-1 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </span>
              DrManisha<span className="font-light">Rajesh</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Expert urology and gynecology care delivered with compassion and cutting-edge medical technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[#1e3a8a] font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-[#20b2aa] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#20b2aa] transition-colors">About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-[#20b2aa] transition-colors">Our Doctors</Link></li>
              <li><Link to="/specialities" className="hover:text-[#20b2aa] transition-colors">Specialities</Link></li>
              <li><Link to="/treatments" className="hover:text-[#20b2aa] transition-colors">Treatments</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#20b2aa] transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="hover:text-[#20b2aa] transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#20b2aa] transition-colors">Contact Us</Link></li>
              <li><Link to="/book-appointment" className="hover:text-[#20b2aa] transition-colors">Book Appointment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1e3a8a] font-bold text-lg mb-6">Our Specialities</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-[#20b2aa] transition-colors">Pregnancy Care</a></li>
              <li><a href="#" className="hover:text-[#20b2aa] transition-colors">Women's Wellness</a></li>
              <li><a href="#" className="hover:text-[#20b2aa] transition-colors">Kidney Stones</a></li>
              <li><a href="#" className="hover:text-[#20b2aa] transition-colors">Prostate Health</a></li>
              <li><a href="#" className="hover:text-[#20b2aa] transition-colors">Infertility Treatment</a></li>
              <li><a href="#" className="hover:text-[#20b2aa] transition-colors">Urinary Care</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1e3a8a] font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start">
                <div className="mt-0.5 bg-blue-50 text-[#1e3a8a] p-2 rounded-full mr-3">
                  <MapPin size={18} />
                </div>
                <span className="leading-relaxed opacity-90">MAA Super speciality hospital  Patna gaya Road HORILGANJ JEHANABAD 
Above SBI MAIN BRANCH 2ND FLOOR.
PIN- 804408</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-50 text-[#1e3a8a] p-2 rounded-full mr-3">
                  <Phone size={18} />
                </div>
                <span className="opacity-90 font-medium">+91 97086 51156</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-50 text-[#1e3a8a] p-2 rounded-full mr-3">
                  <Mail size={18} />
                </div>
                <span className="opacity-90 font-medium">care@drmanisharajesh.com</span>
              </li>
            </ul>
          </div>
        </div>
      
        <div className="pt-8 border-t border-gray-200 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} DrManishaRajesh Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
