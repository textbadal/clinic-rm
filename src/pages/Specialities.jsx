import React, { useState } from 'react';
import rrImg from '../assets/rr.jpeg';
import mnishaImg from '../assets/mnisha.jpeg';
import { 
  Zap, Droplets, Shield, Activity, Stethoscope, HeartPulse, 
  Baby, ShieldCheck, ArrowRight, Users
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Specialities = () => {
  const [activeSpeciality, setActiveSpeciality] = useState(2); // Default 'Prostate Care'

  const specialitiesList = [
    { icon: <Zap size={20} />, title: "Urology", desc: "Diagnosis and treatment of urinary tract and kidney-related conditions with expert care." },
    { icon: <Droplets size={20} />, title: "Kidney Stone Treatment", desc: "Advanced evaluation and non-invasive treatments for kidney and ureter stones using modern tech." },
    { icon: <Shield size={20} />, title: "Prostate Care", desc: "Expert care for prostate enlargement, screening, and other complex prostate disorders." },
    { icon: <Activity size={20} />, title: "Urinary Tract Infection (UTI)", desc: "Specialized diagnosis and effective treatments for recurrent and acute urinary infections." },
    { icon: <Stethoscope size={20} />, title: "Gynecology", desc: "Complete healthcare services for women of all age groups, from routine to advanced surgery." },
    { icon: <Baby size={20} />, title: "Pregnancy & Antenatal Care", desc: "Comprehensive pregnancy care from conception to delivery, ensuring maternal and fetal health." },
    { icon: <HeartPulse size={20} />, title: "PCOS/PCOD Management", desc: "Personalized treatment plans for hormonal imbalances and reproductive health concerns." },
    { icon: <ShieldCheck size={20} />, title: "Women's Preventive Health", desc: "Routine screenings, Pap smears, and preventive care for long-term health and wellness." },
  ];

  return (
    <main className="font-sans">
      
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-400">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#1a1b26] text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              <span>Expert Medical Specialities</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1b26] leading-[1.1] tracking-tight">
              Advanced Care for <br/><span className="text-[#2dd4bf] drop-shadow-sm">Urology & Gynecology</span>
            </h1>
            
            <p className="text-[#1a1b26]/80 leading-relaxed max-w-lg font-bold text-sm md:text-base">
              We provide expert medical care in Urology and Gynecology, offering advanced diagnostic, treatment, and personalized care for every patient in a compassionate environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#2dd4bf] text-white px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-[#14b8a6] transition-all shadow-lg hover:-translate-y-1">
                Get Started
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-gray-50 transition-all shadow-sm">
                View All Services
              </button>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md w-full border-4 border-white/20">
              <img 
                src={rrImg} 
                alt="Doctor portrait" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b26] mb-4">Our Medical Specialities</h2>
            <div className="w-16 h-1 bg-[#2dd4bf] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm font-bold">
              Specialized treatment options tailored to your needs, utilizing the latest medical advancements to ensure the highest quality of healthcare for our patients.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialitiesList.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setActiveSpeciality(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                  activeSpeciality === index 
                    ? 'bg-gradient-to-br from-teal-50 to-[#2dd4bf] shadow-xl border-transparent transform scale-105' 
                    : 'bg-white shadow-sm hover:shadow-md border-gray-100'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 ${
                    activeSpeciality === index ? 'bg-[#1a1b26] text-white' : 'bg-[#1a1b26] text-white'
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-base font-extrabold mb-3 ${activeSpeciality === index ? 'text-[#1a1b26]' : 'text-[#1a1b26]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-[11px] leading-relaxed font-bold mb-6 ${activeSpeciality === index ? 'text-[#1a1b26]/70' : 'text-gray-500'}`}>
                    {item.desc}
                  </p>
                </div>
                <button className="bg-yellow-400 text-[#1a1b26] px-4 py-2 rounded-lg font-extrabold text-[10px] uppercase tracking-wider flex items-center justify-center w-max hover:bg-yellow-500 transition-colors shadow-sm">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white via-teal-50 to-[#2dd4bf]/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1b26] leading-tight">
              Why Choose Our Clinic?
            </h2>
            <p className="text-gray-600 font-bold text-sm leading-relaxed max-w-lg">
              With over 15 years of excellence, we have been providing trusted healthcare solutions. Our focus is on delivering results that improve your quality of life through empathy and expertise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a1b26] p-2 rounded-lg text-white mt-1"><Users size={16} /></div>
                <div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm mb-1">Experienced Specialists</h4>
                  <p className="text-[11px] text-gray-500 font-bold leading-relaxed">Board-certified doctors with years of clinical expertise.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a1b26] p-2 rounded-lg text-white mt-1"><Zap size={16} /></div>
                <div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm mb-1">Advanced Technology</h4>
                  <p className="text-[11px] text-gray-500 font-bold leading-relaxed">State-of-the-art diagnostic and surgical equipment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a1b26] p-2 rounded-lg text-white mt-1"><ShieldCheck size={16} /></div>
                <div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm mb-1">Personalized Treatment</h4>
                  <p className="text-[11px] text-gray-500 font-bold leading-relaxed">Custom healthcare plans tailored to your lifestyle.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a1b26] p-2 rounded-lg text-white mt-1"><Shield size={16} /></div>
                <div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm mb-1">Patient-Centered Care</h4>
                  <p className="text-[11px] text-gray-500 font-bold leading-relaxed">Compassionate environment for a comfortable experience.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div className="flex flex-col gap-4">
               <img src={mnishaImg} alt="Doctor" className="w-full h-1/2 object-cover rounded-2xl shadow-lg" />
               <div className="bg-yellow-400 w-full h-1/2 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center p-4">
                 <div className="text-3xl font-extrabold text-white drop-shadow-sm mb-1">15+</div>
                 <div className="text-[10px] text-white/90 font-extrabold uppercase">Years of Experience</div>
               </div>
            </div>
            <div className="flex flex-col gap-4">
               <div className="bg-[#1a1b26] w-full h-1/3 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center p-4">
                 <div className="text-3xl font-extrabold text-white mb-1">10k+</div>
                 <div className="text-[10px] text-gray-400 font-extrabold uppercase">Happy Patients</div>
               </div>
               <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Clinic interior" className="w-full h-2/3 object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#2a2b38] to-[#1a1b26] rounded-[2rem] p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight max-w-2xl mx-auto">
              Expert Care for Every Stage of Life
            </h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto mb-10 font-medium">
              Whether you need urology or gynecology care, our experienced specialists are here to provide trusted, compassionate treatment. Your wellness is our priority.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#2dd4bf] text-white px-8 py-3 rounded-lg font-extrabold text-sm hover:bg-[#14b8a6] transition-all shadow-lg">
                Book Appointment
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-lg font-extrabold text-sm hover:bg-gray-50 transition-all shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Specialities;
