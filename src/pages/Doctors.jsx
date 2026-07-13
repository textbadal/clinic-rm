import React, { useState } from 'react';
import mmImg from '../assets/mm.jpeg';
import mnishaImg from '../assets/mnisha.jpeg';
import { 
  Users, ShieldCheck, HeartPulse, Clock, ArrowRight 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Doctors = () => {
  const [activeWhyChoose, setActiveWhyChoose] = useState(3); // Default 'Compassionate Support'

  const whyChoose = [
    { icon: <Users size={24} />, title: "Experienced Specialists", desc: "Board-certified doctors with decades of combined experience in complex surgeries." },
    { icon: <ShieldCheck size={24} />, title: "Personalized Care", desc: "Tailored treatment plans designed specifically for your unique health profile." },
    { icon: <HeartPulse size={24} />, title: "Modern Treatment", desc: "Utilizing the latest minimally invasive techniques for faster recovery times." },
    { icon: <Clock size={24} />, title: "Compassionate Support", desc: "Empathetic patient care from consultation to follow-up and long-term health." },
  ];

  return (
    <main className="font-sans">
    
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-teal-50 via-teal-100 to-[#2dd4bf]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-[#1a1b26] px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              <span>Medical Excellence</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1b26] leading-[1.1] tracking-tight">
              Meet Our <br/><span className="text-white drop-shadow-sm">Specialists</span>
            </h1>
            
            <p className="text-[#1a1b26]/70 leading-relaxed max-w-lg font-bold text-sm md:text-base">
              Dedicated healthcare professionals providing expert Urology and Gynecology care with compassion and excellence. Your health is our priority.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-yellow-400 text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-yellow-500 transition-all shadow-lg hover:-translate-y-1">
                Our Services
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-gray-50 transition-all shadow-sm">
                Learn More
              </button>
            </div>
            
            <div className="pt-6 flex items-center space-x-3">
              <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full border-2 border-teal-300" src="https://i.pravatar.cc/100?img=1" alt="Patient" />
                <img className="w-8 h-8 rounded-full border-2 border-teal-300" src="https://i.pravatar.cc/100?img=2" alt="Patient" />
                <img className="w-8 h-8 rounded-full border-2 border-teal-300" src="https://i.pravatar.cc/100?img=3" alt="Patient" />
              </div>
              <p className="text-[11px] font-bold text-[#1a1b26]/80">Trusted by <span className="text-[#1a1b26] font-extrabold">5,000+</span> Patients</p>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden border-[6px] border-white shadow-2xl max-w-md w-full">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor smiling" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-[#334155]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b26] mb-4">Our Core Medical Team</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm font-bold">
              Our clinic is led by world-class experts in Urology and Gynecology, committed to bringing the latest medical advancements to our patients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
              <div className="p-8 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/5 h-48 md:h-full bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                   <img src={mmImg} alt="Dr. Manisha" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-center">
                  <div className="inline-flex bg-teal-50 text-[#2dd4bf] px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider mb-3 w-max">
                    Urologist
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1a1b26] mb-3">Dr.Manisha</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed font-bold mb-6">
                    Experienced in diagnosing and treating kidney stones, urinary tract disorders, prostate conditions, and other urological problems with a patient-first approach. Over 15 years of clinical excellence.
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-white border-2 border-gray-100 text-[#2dd4bf] py-2.5 rounded-xl font-extrabold text-[11px] hover:border-[#2dd4bf] transition-colors shadow-sm">View Profile</button>
                    <button className="flex-1 bg-[#2dd4bf] text-white py-2.5 rounded-xl font-extrabold text-[11px] hover:bg-[#14b8a6] transition-colors shadow-md">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
              <div className="p-8 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/5 h-48 md:h-full bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                   <img src={mnishaImg} alt="Dr. Manisha" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-center">
                  <div className="inline-flex bg-teal-50 text-[#2dd4bf] px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider mb-3 w-max">
                    Gynecologist & Obstetrician
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1a1b26] mb-3">Dr. Manisha</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed font-bold mb-6">
                    Dedicated to women's healthcare, pregnancy care, PCOS management, menstrual disorders, infertility consultation, and preventive gynecological care for patients of all ages.
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-white border-2 border-gray-100 text-[#2dd4bf] py-2.5 rounded-xl font-extrabold text-[11px] hover:border-[#2dd4bf] transition-colors shadow-sm">View Profile</button>
                    <button className="flex-1 bg-[#2dd4bf] text-white py-2.5 rounded-xl font-extrabold text-[11px] hover:bg-[#14b8a6] transition-colors shadow-md">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#334155]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2dd4bf] mb-4">Why Choose Our Clinic?</h2>
              <p className="text-white text-sm font-bold">
                We combine clinical expertise with state-of-the-art technology to ensure you receive the highest standard of care.
              </p>
            </div>
            <a href="#" className="flex items-center text-white text-sm font-extrabold hover:text-[#2dd4bf] transition-colors whitespace-nowrap">
              Learn more about our standards <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setActiveWhyChoose(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                  activeWhyChoose === index 
                    ? 'bg-gradient-to-br from-white to-[#2dd4bf] shadow-xl transform scale-105 text-[#1a1b26]' 
                    : 'bg-white shadow-md hover:shadow-lg text-[#1a1b26]'
                }`} >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                  activeWhyChoose === index ? 'bg-[#1a1b26] text-white' : 'bg-[#1a1b26] text-white'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-sm font-extrabold mb-2`}>{item.title}</h3>
                <p className={`text-[11px] leading-relaxed font-bold ${activeWhyChoose === index ? 'text-[#1a1b26]/70' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-[#2dd4bf] rounded-[2.5rem] p-12 md:p-16 text-center shadow-xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1b26] mb-6 leading-tight max-w-2xl mx-auto">
              Book an Appointment with Our Specialists
            </h2>
            <p className="text-[#1a1b26]/80 text-sm max-w-xl mx-auto mb-10 font-bold">
              Receive trusted medical care from our experienced urology and gynecology experts. Start your journey toward better health today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 text-[#1a1b26] px-8 py-3.5 rounded-xl font-extrabold text-sm hover:bg-yellow-500 transition-all shadow-lg">
                Book Appointment
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3.5 rounded-xl font-extrabold text-sm hover:bg-gray-50 transition-all shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Doctors;
