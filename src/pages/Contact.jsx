import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Send, Calendar, Clock
} from 'lucide-react';

const Contact = () => {
  const [activeCard, setActiveCard] = useState(1); // Default to Phone Number

  return (
    <main className="font-sans">
    
      <section className="relative pt-16 pb-32 lg:pt-24 lg:pb-40 overflow-hidden bg-gradient-to-b from-teal-50 via-teal-100 to-[#2dd4bf] text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#1a1b26] text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm mb-6">
            <span>Get In Touch</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1b26] leading-[1.1] tracking-tight mb-6">
            Contact <span className="text-white drop-shadow-sm">Us</span>
          </h1>
          
          <p className="text-[#1a1b26]/80 leading-relaxed max-w-2xl mx-auto font-bold text-sm">
            We're here to help. Get in touch with us for appointments, consultations, or any healthcare-related queries. Our specialists are ready to provide the care you deserve.
          </p>
        </div>
      </section>
      <section className="relative -mt-20 z-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            
            <div 
              onClick={() => setActiveCard(0)}
              className={`cursor-pointer rounded-3xl p-8 shadow-xl transition-all duration-300 border flex flex-col justify-center ${
                activeCard === 0 ? 'bg-gradient-to-br from-yellow-200 to-yellow-500 border-transparent transform -translate-y-2' : 'bg-white border-gray-100 hover:-translate-y-1'
              }`} >
              <div className="w-12 h-12 bg-[#1a1b26] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-[#1a1b26] mb-3">Our Location</h3>
              <p className={`text-[11px] font-bold leading-relaxed mb-6 ${activeCard === 0 ? 'text-[#1a1b26]/80' : 'text-gray-500'}`}>
                124 Medical Plaza, Healthcare District<br/>East Wing, Suite 402, Metropolis City
              </p>
              <a href="#" className={`flex items-center text-[10px] font-extrabold uppercase tracking-wider transition-colors ${activeCard === 0 ? 'text-[#1a1b26] hover:text-white' : 'text-[#1a1b26] hover:text-[#2dd4bf]'}`}>
                Get Directions <span className="ml-1">›</span>
              </a>
            </div>
            <div 
              onClick={() => setActiveCard(1)}
              className={`cursor-pointer rounded-3xl p-8 shadow-xl transition-all duration-300 border flex flex-col justify-center ${
                activeCard === 1 ? 'bg-gradient-to-br from-yellow-200 to-yellow-500 border-transparent transform -translate-y-2' : 'bg-white border-gray-100 hover:-translate-y-1'
              }`}  >
              <div className="w-12 h-12 bg-[#1a1b26] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-[#1a1b26] mb-3">Phone Number</h3>
              <p className={`text-[11px] font-bold leading-relaxed mb-6 ${activeCard === 1 ? 'text-[#1a1b26]/80' : 'text-gray-500'}`}>
                +91 98765 43210<br/>+91 87654 32109
              </p>
              <a href="#" className={`flex items-center text-[10px] font-extrabold uppercase tracking-wider transition-colors ${activeCard === 1 ? 'text-[#1a1b26] hover:text-white' : 'text-[#1a1b26] hover:text-[#2dd4bf]'}`}>
                Call Now <span className="ml-1">›</span>
              </a>
            </div>
            <div 
              onClick={() => setActiveCard(2)}
              className={`cursor-pointer rounded-3xl p-8 shadow-xl transition-all duration-300 border flex flex-col justify-center ${
                activeCard === 2 ? 'bg-gradient-to-br from-yellow-200 to-yellow-500 border-transparent transform -translate-y-2' : 'bg-white border-gray-100 hover:-translate-y-1'
              }`} >
              <div className="w-12 h-12 bg-[#1a1b26] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-extrabold text-[#1a1b26] mb-3">Email Address</h3>
              <p className={`text-[11px] font-bold leading-relaxed mb-6 ${activeCard === 2 ? 'text-[#1a1b26]/80' : 'text-gray-500'}`}>
                appointments@drmanishaclinic.com<br/>info@drmanishaclinic.com
              </p>
              <a href="#" className={`flex items-center text-[10px] font-extrabold uppercase tracking-wider transition-colors ${activeCard === 2 ? 'text-[#1a1b26] hover:text-white' : 'text-[#1a1b26] hover:text-[#2dd4bf]'}`}>
                Send Email <span className="ml-1">›</span>
              </a>
            </div>

          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-10">
        
          <div className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1b26] mb-3">Send Us a Message</h2>
            <p className="text-gray-500 text-sm font-medium mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Your Message</label>
                <textarea rows="5" placeholder="How can we help you today?" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all resize-none"></textarea>
              </div>
              
              <button type="button" className="w-full bg-[#2dd4bf] text-white py-4 rounded-xl font-extrabold text-sm hover:bg-[#14b8a6] transition-all shadow-md flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 h-[250px] flex-shrink-0">
               <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital location" className="w-full h-full object-cover" />
               <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] font-extrabold text-blue-500 uppercase tracking-wider">Current Location</div>
                    <div className="text-[11px] font-bold text-[#1a1b26]">124 Medical Plaza, Metropolis</div>
                  </div>
               </div>
            </div>
            
            <div className="bg-gradient-to-b from-teal-50 to-[#2dd4bf]/80 rounded-[2rem] p-8 shadow-xl flex-grow">
               <div className="flex items-center space-x-3 mb-6">
                 <Clock className="text-[#1a1b26]" size={24} />
                 <h3 className="text-xl font-extrabold text-[#1a1b26]">Clinic Timings</h3>
               </div>
               <p className="text-[11px] text-gray-600 font-bold mb-6">Available for consultation during these hours.</p>
               
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold border-b border-white/40 pb-2">
                    <span className="text-[#1a1b26]">Monday</span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold border-b border-white/40 pb-2">
                    <span className="text-[#1a1b26]">Tuesday</span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold border-b border-white/40 pb-2">
                    <span className="text-[#1a1b26]">Wednesday</span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold border-b border-white/40 pb-2">
                    <span className="text-[#1a1b26]">Thursday</span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold border-b border-white/40 pb-2">
                    <span className="text-[#1a1b26]">Friday</span>
                    <span className="text-gray-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold border-b border-white/40 pb-2">
                    <span className="text-[#1a1b26]">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-extrabold pt-1">
                    <span className="text-[#1a1b26]">Sunday</span>
                    <span className="text-red-500">Closed</span>
                  </div>
               </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#1a1b26]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="w-16 h-16 bg-[#2dd4bf] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(45,212,191,0.4)]">
            <Calendar className="text-white" size={28} />
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
            Need Medical Assistance?
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10 font-bold leading-relaxed">
            Book your appointment today and consult with our experienced specialists. We offer comprehensive Uro & Gynae care tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#2dd4bf] text-white px-8 py-3 rounded-full font-extrabold text-sm hover:bg-[#14b8a6] transition-all shadow-lg">
              Book Appointment Now
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-extrabold text-sm hover:bg-gray-50 transition-all shadow-lg">
              View Doctor Profile
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
