import React, { useState } from 'react';
import { 
  Droplets, Activity, HeartPulse, Shield, Baby, Sparkles, 
  Stethoscope, Users, Zap, ShieldCheck, ArrowRight, 
  CheckCircle, Calendar, User, Search
} from 'lucide-react';

const Treatments = () => {
  const [activeUrology, setActiveUrology] = useState(1); 
  const [activeGynecology, setActiveGynecology] = useState(0); 

  const urologyTreatments = [
    { icon: <Droplets size={24} />, title: "Kidney Stone Treatment", desc: "Modern lithotripsy and minimally invasive laser treatments to effectively remove stones with minimal discomfort." },
    { icon: <Stethoscope size={24} />, title: "UTI Treatment", desc: "Targeted diagnostic testing and personalized antibiotic courses to treat recurring urinary tract infections effectively." },
    { icon: <Activity size={24} />, title: "Prostate Treatment", desc: "Advanced care for BPH and prostate-related issues using the latest medication and surgical interventions." },
    { icon: <ShieldCheck size={24} />, title: "Incontinence Management", desc: "Comprehensive bladder training, physical therapy, and surgical solutions for stress and urge incontinence." },
  ];

  const gynecologyTreatments = [
    { icon: <Baby size={24} />, title: "Pregnancy & Antenatal", desc: "Comprehensive prenatal check-ups, high-risk pregnancy management, and post-delivery care for mother and child." },
    { icon: <Activity size={24} />, title: "PCOS / PCOD Management", desc: "Hormonal balance treatments, lifestyle guidance, and fertility support for women with polycystic ovary syndrome." },
    { icon: <HeartPulse size={24} />, title: "Menstrual Disorders", desc: "Diagnosis and treatment for heavy cycles, irregular periods, and pain management through expert clinical intervention." },
    { icon: <Users size={24} />, title: "Infertility Consultation", desc: "Detailed fertility assessments, ovulation induction, and advanced reproductive support tailored to your needs." },
  ];

  return (
    <main className="font-sans">
      
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-teal-50 via-teal-100 to-[#2dd4bf]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#1a1b26] text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              <span>Specialized Uro & Gynae Care</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1b26] leading-[1.1] tracking-tight">
              Expert Care for <br/>Your <span className="text-white drop-shadow-sm underline decoration-4 underline-offset-8">Vital Health</span>
            </h1>
            
            <p className="text-[#1a1b26]/70 leading-relaxed max-w-lg font-bold text-sm md:text-base">
              We offer advanced, safe, and personalized treatment solutions for urological and gynecological conditions, ensuring the highest quality care for every patient.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#1a1b26] text-white px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-[#2a2b38] transition-all shadow-lg hover:-translate-y-1">
                Explore Treatments
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-gray-50 transition-all shadow-sm">
                View Specialities
              </button>
            </div>
            
            <div className="pt-6 flex items-center space-x-3">
              <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full border-2 border-teal-300" src="https://i.pravatar.cc/100?img=1" alt="Patient" />
                <img className="w-8 h-8 rounded-full border-2 border-teal-300" src="https://i.pravatar.cc/100?img=2" alt="Patient" />
                <img className="w-8 h-8 rounded-full border-2 border-teal-300" src="https://i.pravatar.cc/100?img=3" alt="Patient" />
              </div>
              <p className="text-[11px] font-bold text-[#1a1b26]/80">Trusted by <span className="text-[#1a1b26] font-extrabold">10,000+</span> Patients</p>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl max-w-md w-full border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical equipment" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em] mb-3">Advanced Services</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b26] mb-4">Urology Treatments</h2>
              <p className="text-gray-500 text-sm font-bold leading-relaxed">
                Comprehensive care for urinary tract systems and the male reproductive system using the latest diagnostic techniques.
              </p>
            </div>
            <a href="#" className="flex items-center text-[#2dd4bf] text-xs font-extrabold hover:text-[#14b8a6] transition-colors whitespace-nowrap">
              View All Urology <ArrowRight className="w-3 h-3 ml-1" />
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {urologyTreatments.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setActiveUrology(index)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 border flex flex-col h-full ${
                  activeUrology === index 
                    ? 'bg-gradient-to-br from-teal-50 to-[#2dd4bf] shadow-xl border-transparent transform scale-105' 
                    : 'bg-white shadow-sm hover:shadow-md border-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  activeUrology === index ? 'bg-[#1a1b26] text-white' : 'bg-[#1a1b26] text-white'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-lg font-extrabold mb-4 leading-tight ${activeUrology === index ? 'text-[#1a1b26]' : 'text-[#1a1b26]'}`}>
                  {item.title}
                </h3>
                <p className={`text-[11px] leading-relaxed font-bold mb-8 flex-grow ${activeUrology === index ? 'text-[#1a1b26]/70' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
                <button className={`px-5 py-2.5 rounded-xl font-extrabold text-[11px] flex items-center justify-center transition-colors ${
                  activeUrology === index 
                    ? 'bg-yellow-400 text-[#1a1b26] shadow-sm hover:bg-yellow-500' 
                    : 'bg-yellow-400 text-[#1a1b26] hover:bg-yellow-500'
                }`}>
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <p className="text-[10px] font-extrabold text-[#2dd4bf] uppercase tracking-[0.2em] mb-3">Empathetic Care</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1b26] mb-4">Gynecology Treatments</h2>
              <p className="text-gray-500 text-sm font-bold leading-relaxed">
                Dedicated to women's health across all stages of life, providing compassionate care and modern clinical solutions.
              </p>
            </div>
            <a href="#" className="flex items-center text-[#2dd4bf] text-xs font-extrabold hover:text-[#14b8a6] transition-colors whitespace-nowrap">
              View All Gynecology <ArrowRight className="w-3 h-3 ml-1" />
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gynecologyTreatments.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setActiveGynecology(index)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 border flex flex-col h-full ${
                  activeGynecology === index 
                    ? 'bg-gradient-to-br from-yellow-50 to-yellow-400 shadow-xl border-transparent transform scale-105' 
                    : 'bg-white shadow-sm hover:shadow-md border-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  activeGynecology === index ? 'bg-[#1a1b26] text-white' : 'bg-[#1a1b26] text-white'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-lg font-extrabold mb-4 leading-tight ${activeGynecology === index ? 'text-[#1a1b26]' : 'text-[#1a1b26]'}`}>
                  {item.title}
                </h3>
                <p className={`text-[11px] leading-relaxed font-bold mb-8 flex-grow ${activeGynecology === index ? 'text-[#1a1b26]/70' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
                <button className={`px-5 py-2.5 rounded-xl font-extrabold text-[11px] flex items-center justify-center transition-colors ${
                  activeGynecology === index 
                    ? 'bg-[#2dd4bf] text-white shadow-sm hover:bg-[#14b8a6]' 
                    : 'bg-[#2dd4bf] text-white hover:bg-[#14b8a6]'
                }`}>
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#1a1b26]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Your Path to Recovery</h2>
          <p className="text-[#2dd4bf] text-base md:text-lg font-bold max-w-2xl mx-auto mb-20 leading-relaxed">
            Our streamlined approach ensures you receive timely and effective care from the moment you reach out to us.
          </p>
          
          <div className="relative flex justify-between items-center max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-600 -translate-y-1/2 z-0 hidden md:block"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.5)] relative">
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#38bdf8] rounded-full text-[10px] font-extrabold text-white flex items-center justify-center">1</div>
                  <Calendar className="text-[#38bdf8] w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.5)] relative">
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#38bdf8] rounded-full text-[10px] font-extrabold text-white flex items-center justify-center">2</div>
                  <User className="text-[#38bdf8] w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.5)] relative">
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#38bdf8] rounded-full text-[10px] font-extrabold text-white flex items-center justify-center">3</div>
                  <Search className="text-[#38bdf8] w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-[#2dd4bf] shadow-[0_0_15px_rgba(45,212,191,0.5)] relative">
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#38bdf8] rounded-full text-[10px] font-extrabold text-white flex items-center justify-center">4</div>
                  <ShieldCheck className="text-[#38bdf8] w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white via-teal-50 to-[#2dd4bf]/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1b26] leading-tight">
              Why Choose Our Specialized Treatments?
            </h2>
            <p className="text-gray-600 font-bold text-sm leading-relaxed max-w-lg">
              We combine clinical excellence with a compassionate approach, ensuring every patient feels heard, respected, and expertly cared for.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a1b26] p-2 rounded-lg text-white mt-1"><Sparkles size={16} /></div>
                <div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm mb-1">Advanced Technology</h4>
                  <p className="text-[11px] text-gray-500 font-bold leading-relaxed">Utilizing the latest robotic-assisted and laser diagnostic tools.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a1b26] p-2 rounded-lg text-white mt-1"><Stethoscope size={16} /></div>
                <div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm mb-1">Expert Specialists</h4>
                  <p className="text-[11px] text-gray-500 font-bold leading-relaxed">Board-certified doctors with over 15 years of surgical experience.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a1b26] p-2 rounded-lg text-white mt-1"><CheckCircle size={16} /></div>
                <div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm mb-1">Personalized Plans</h4>
                  <p className="text-[11px] text-gray-500 font-bold leading-relaxed">Treatment strategies tailored to your unique medical history.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#1a1b26] p-2 rounded-lg text-white mt-1"><ShieldCheck size={16} /></div>
                <div>
                  <h4 className="font-extrabold text-[#1a1b26] text-sm mb-1">Patient Safety First</h4>
                  <p className="text-[11px] text-gray-500 font-bold leading-relaxed">Strict adherence to international safety and hygiene protocols.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                 src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Doctor consulting patient" 
                 className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute bottom-10 -left-6 md:-left-10 bg-white p-6 rounded-2xl shadow-2xl max-w-[220px] z-10">
              <div className="flex items-center space-x-3 mb-3">
                 <ShieldCheck className="text-[#1a1b26]" size={20} />
                 <div className="text-sm font-extrabold text-[#1a1b26]">Accredited Care</div>
              </div>
              <div className="text-[9px] text-gray-500 font-bold leading-relaxed">Certified for excellence in Urological & Gynecological services.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#2a2b38] to-[#1a1b26] rounded-[2rem] p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight max-w-2xl mx-auto">
              Get the Right Treatment from Trusted Specialists
            </h2>
            <p className="text-gray-300 text-sm max-w-xl mx-auto mb-10 font-medium">
              Schedule your consultation today and receive expert urology and gynecology care tailored to your health needs. We are here to support your journey to wellness.
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

export default Treatments;
