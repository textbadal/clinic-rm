import React, { useState } from 'react';
import { 
  ClipboardList, CheckCircle2, Building, HeartPulse,
  ShieldCheck, CalendarDays, User, PlusSquare, ArrowRight,
  PhoneCall, MapPin, Clock
} from 'lucide-react';

const BookAppointment = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { icon: <ClipboardList size={24} />, title: "Fill the Form", desc: "Provide your details and select your preferred schedule through our easy online form." },
    { icon: <CheckCircle2 size={24} />, title: "Confirm Appointment", desc: "Our staff will verify the availability and send you a confirmation via SMS or email." },
    { icon: <Building size={24} />, title: "Visit the Clinic", desc: "Arrive 10 minutes before your scheduled time for a quick registration process." },
    { icon: <HeartPulse size={24} />, title: "Consultation", desc: "Meet our specialists for a comprehensive diagnostic session and treatment plan." }
  ];

  const reasons = [
    { icon: <ShieldCheck size={20} />, title: "Experienced Specialists", desc: "Our doctors have over 15+ years of experience in complex urological and gynecological procedures." },
    { icon: <CalendarDays size={20} />, title: "Easy Booking", desc: "No more long queues. Use our digital portal to schedule your visit at your own convenience." },
    { icon: <User size={20} />, title: "Personalized Care", desc: "We believe every patient is unique. Our treatments are tailored specifically to your medical needs." },
    { icon: <PlusSquare size={20} />, title: "Modern Infrastructure", desc: "Equipped with the latest diagnostic tools and a hygienic clinical environment for patient safety." }
  ];

  return (
    <main className="font-sans">
      
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-r from-teal-50 via-teal-100 to-[#2dd4bf]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#1a1b26] text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              <span>Trusted Uro & Gynae Specialists</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1b26] leading-[1.1] tracking-tight">
              Your Path to Better Health Starts Here
            </h1>
            
            <p className="text-[#1a1b26]/80 leading-relaxed max-w-md font-bold text-sm">
              Schedule your visit with our experienced Urology and Gynecology specialists in just a few simple steps. We provide personalized care for your well-being.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <button className="bg-[#1a1b26] text-white px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-[#2a2b38] transition-all shadow-lg flex items-center group">
                Get Started <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=1" alt="Patient" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=2" alt="Patient" />
                <img className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=3" alt="Patient" />
                <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-gray-100 flex items-center justify-center text-[10px] font-bold">+10k</div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Clinic Reception" 
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white relative -mt-10 z-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b26] mb-3">Book an Appointment</h2>
             <p className="text-gray-500 font-medium text-sm max-w-md mx-auto">Complete the form below and our team will get back to you to confirm your slot within 24 hours.</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
             <div className="bg-gray-50 p-6 md:p-8 border-b border-gray-100 flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-extrabold text-[#1a1b26] mb-1">Patient Information</h3>
                  <p className="text-[11px] text-gray-500 font-bold">All fields are required unless marked optional.</p>
                </div>
                <StethoscopeIcon className="text-gray-300 w-8 h-8" />
             </div>
             
             <form className="p-6 md:p-10 space-y-8">
               <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Full Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Phone Number</label>
                   <input type="tel" placeholder="+91 98765 43210" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all" />
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                   <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Email Address</label>
                   <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Select Department</label>
                   <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all text-gray-600">
                     <option>Select Department</option>
                     <option>Urology</option>
                     <option>Gynecology</option>
                   </select>
                 </div>
               </div>
               
               <div className="grid md:grid-cols-3 gap-6">
                 <div className="space-y-2">
                   <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Select Doctor</label>
                   <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all text-gray-600">
                     <option>Any Available Doctor</option>
                     <option>Dr. Manisha Rajesh</option>
                   </select>
                 </div>
                 <div className="space-y-2">
                   <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Preferred Date</label>
                   <input type="date" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all text-gray-600" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Preferred Time</label>
                   <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all text-gray-600">
                     <option>Morning (9 AM - 12 PM)</option>
                     <option>Afternoon (1 PM - 4 PM)</option>
                     <option>Evening (5 PM - 7 PM)</option>
                   </select>
                 </div>
               </div>
               
               <div className="space-y-2">
                 <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Reason for Visit</label>
                 <input type="text" placeholder="Routine checkup, consultation, etc." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all" />
               </div>
               
               <div className="space-y-2">
                 <label className="text-[11px] font-extrabold text-[#1a1b26] uppercase tracking-wider">Additional Notes (Optional)</label>
                 <textarea rows="4" placeholder="Any specific requirements or history you'd like to share..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2dd4bf] focus:ring-1 focus:ring-[#2dd4bf] transition-all resize-none"></textarea>
               </div>
               
               <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                 <button type="button" className="flex-1 bg-[#2dd4bf] text-white py-4 rounded-xl font-extrabold text-sm hover:bg-[#14b8a6] transition-all shadow-md">
                   Book Appointment Now
                 </button>
                 <button type="reset" className="bg-white border border-gray-200 text-gray-600 px-8 py-4 rounded-xl font-extrabold text-sm hover:bg-gray-50 transition-all">
                   Reset Form
                 </button>
               </div>
             </form>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b26] mb-4">How It Works</h2>
            <p className="text-gray-700 text-sm font-bold max-w-lg mx-auto">
              Follow these simple steps to ensure a smooth consultation experience at our clinic.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
             {steps.map((step, index) => (
               <div 
                 key={index}
                 onClick={() => setActiveStep(index)}
                 className={`cursor-pointer p-8 rounded-2xl transition-all duration-300 text-center ${
                   activeStep === index 
                     ? 'bg-gradient-to-br from-teal-100 to-[#2dd4bf] shadow-xl transform scale-105 border border-transparent'
                     : 'bg-white shadow-md hover:shadow-lg border border-gray-100'
                 }`}
               >
                 <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-5 ${
                   activeStep === index ? 'bg-[#1a1b26] text-white' : 'bg-gray-100 text-[#1a1b26]'
                 }`}>
                   {step.icon}
                 </div>
                 <h3 className={`text-sm font-extrabold mb-3 ${activeStep === index ? 'text-[#1a1b26]' : 'text-[#1a1b26]'}`}>
                   {step.title}
                 </h3>
                 <p className={`text-[11px] font-bold leading-relaxed ${activeStep === index ? 'text-[#1a1b26]/70' : 'text-gray-500'}`}>
                   {step.desc}
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b26] mb-6 leading-tight">Why Book With Us?</h2>
            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-8">
              We combine years of clinical expertise with advanced medical technology to provide you with the best healthcare services in the region.
            </p>
            <a href="#" className="flex items-center text-sm font-extrabold text-[#1a1b26] hover:text-[#2dd4bf] transition-colors">
              Learn more about our practice <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-[#1a1b26]">
                    {item.icon}
                  </div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm">{item.title}</h4>
                </div>
                <p className="text-[11px] text-gray-500 font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b26] mb-2">Clinic Information</h2>
            <p className="text-gray-500 text-sm font-medium italic mb-10">"Caring for you like family, treating you with precision."</p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-5 rounded-2xl border border-gray-100 bg-gray-50/50">
                <div className="mt-1"><MapPin size={18} className="text-[#1a1b26]" /></div>
                <div>
                  <h5 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">Our Location</h5>
                  <p className="text-xs font-extrabold text-[#1a1b26]">123 Health Plaza, Medical District, South Delhi, New Delhi - 110049</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 rounded-2xl border border-gray-100 bg-gray-50/50">
                <div className="mt-1"><PhoneCall size={18} className="text-[#1a1b26]" /></div>
                <div>
                  <h5 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">Contact Number</h5>
                  <p className="text-xs font-extrabold text-[#1a1b26]">+91 99999 88888 | 011-2345678</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 rounded-2xl border border-gray-100 bg-gray-50/50">
                <div className="mt-1"><Building size={18} className="text-[#1a1b26]" /></div>
                <div>
                  <h5 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">Official Email</h5>
                  <p className="text-xs font-extrabold text-[#1a1b26]">care@drmanisharajesh.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-5 rounded-2xl border border-gray-100 bg-gray-50/50">
                <div className="mt-1"><Clock size={18} className="text-[#1a1b26]" /></div>
                <div>
                  <h5 className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">Working Hours</h5>
                  <p className="text-xs font-extrabold text-[#1a1b26]">Mon - Sat: 09:00 AM - 08:00 PM | Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl group border border-gray-200">
             <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Clinic Map" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-8 text-center backdrop-blur-[2px]">
               <MapPin size={48} className="text-[#2dd4bf] mb-4 drop-shadow-lg" />
               <h3 className="text-3xl font-extrabold text-white mb-2 drop-shadow-md">Find Us on Google Maps</h3>
               <p className="text-gray-200 text-xs font-bold mb-8 max-w-sm">Click below to view the interactive map and get precise navigation directions to our clinic.</p>
               <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-3 rounded-full font-extrabold text-sm hover:bg-white hover:text-[#1a1b26] transition-all">
                 View Directions
               </button>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-[#1a1b26] rounded-[2rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight relative z-10">
              Your Health Is Our Priority
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10 font-bold leading-relaxed relative z-10">
              Book your appointment today and receive expert care from our trusted specialists. Join over 10,000+ satisfied patients who trust us with their health.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <button className="bg-white text-[#1a1b26] px-8 py-4 rounded-full font-extrabold text-sm hover:bg-gray-100 transition-all shadow-lg w-full sm:w-auto">
                Confirm Appointment Now
              </button>
              <div className="flex items-center space-x-3 text-white border border-gray-600 rounded-full px-6 py-3 w-full sm:w-auto justify-center">
                 <PhoneCall size={18} className="text-[#2dd4bf]" />
                 <div className="text-left">
                   <div className="text-[8px] font-extrabold text-gray-400 uppercase tracking-wider">Emergency Call</div>
                   <div className="text-sm font-extrabold">+91 99999 88888</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};
const StethoscopeIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

export default BookAppointment;
