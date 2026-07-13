import React, { useState } from 'react';
import { 
  Heart, CheckCircle2, Target, Eye, 
  Stethoscope, Activity, Droplets, Zap, Shield, Sparkles, Building, Calendar,
  Users, Award, Clock, ArrowRight, ShieldCheck, HeartPulse
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
const About = () => {
  const [activeWhyChoose, setActiveWhyChoose] = useState(2);
  const [activeUrology, setActiveUrology] = useState(3); 
  const [activeGynecology, setActiveGynecology] = useState(null); 
  const whyChoose = [
    { icon: <Stethoscope size={24} />, title: "Experienced Specialists", desc: "Over 12 years of hands-on experience in handling complex urological and gynecological cases with precision." },
    { icon: <Activity size={24} />, title: "Advanced Medical Care", desc: "Utilizing cutting-edge diagnostic equipment and minimally invasive surgical techniques for faster recovery." },
    { icon: <Heart size={24} />, title: "Personalized Treatment", desc: "Every patient is unique. We create custom care plans tailored to your specific medical history and goals." },
    { icon: <Building size={24} />, title: "Modern Facilities", desc: "A clean, sterile, and technologically advanced clinic environment designed for patient safety and comfort." },
    { icon: <Sparkles size={24} />, title: "Comfortable Environment", desc: "We prioritize patient privacy and comfort, providing a serene atmosphere for all consultations and procedures." },
    { icon: <Calendar size={24} />, title: "Easy Booking", desc: "Seamless online and offline appointment scheduling to minimize wait times and ensure prompt attention." },
  ];
  const urologyServices = [
    { icon: <Zap size={20} />, title: "Urology Consultation", desc: "General consultation for all male and female urinary tract issues and conditions." },
    { icon: <Droplets size={20} />, title: "Kidney Stone Treatment", desc: "Non-surgical and surgical interventions for kidney and ureteric stones using advanced tech." },
    { icon: <Activity size={20} />, title: "UTI Treatment", desc: "Effective management of recurrent and chronic urinary tract infections with protocols." },
    { icon: <Shield size={20} />, title: "Prostate Care", desc: "Expert diagnosis and treatment for BPH, Prostatitis, and screening for Prostate cancer." },
  ];
  const gynecologyServices = [
    { icon: <Stethoscope size={20} />, title: "Gynae Consultation", desc: "Comprehensive care for menstrual issues, reproductive health, and general wellness." },
    { icon: <HeartPulse size={20} />, title: "Pregnancy Care", desc: "Expert prenatal, antenatal, and postnatal care to ensure a healthy journey for mothers." },
    { icon: <Activity size={20} />, title: "PCOS/PCOD Care", desc: "Holistic management of polycystic ovarian syndrome through lifestyle and therapy." },
    { icon: <ShieldCheck size={20} />, title: "Women's Health Checkup", desc: "Preventive health screenings including Pap smears, pelvic exams, and breast health." },
  ];
  return (
    <main className="font-sans">
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-r from-[#1e293b] via-[#334155] to-[#475569]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10 text-white">
            <div className="inline-flex items-center space-x-2 bg-yellow-500 text-[#1a1b26] px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
              <span>Expert Urology & Gynecology Care</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">
              About Dr. Manisha Rajesh Uro & Gynae Clinic
            </h1>  
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl font-medium">
              Providing compassionate, advanced, and personalized healthcare in Urology and Gynecology with a patient-first approach. Your health journey starts with expert diagnosis.
            </p>   
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#2dd4bf] text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-[#14b8a6] transition-all shadow-lg hover:-translate-y-1">
                Book Appointment
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-gray-50 transition-all shadow-sm">
                Contact Us
              </button>
            </div> 
            <div className="pt-8 flex items-center space-x-4">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#334155]" src="https://i.pravatar.cc/100?img=1" alt="Patient" />
                <img className="w-10 h-10 rounded-full border-2 border-[#334155]" src="https://i.pravatar.cc/100?img=2" alt="Patient" />
                <img className="w-10 h-10 rounded-full border-2 border-[#334155]" src="https://i.pravatar.cc/100?img=3" alt="Patient" />
                <img className="w-10 h-10 rounded-full border-2 border-[#334155]" src="https://i.pravatar.cc/100?img=4" alt="Patient" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">10,000+ Happy Patients</p>
                <p className="text-xs text-gray-400">Trusted by families across the region.</p>
              </div>
            </div>
          </div>         
          <div className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden border-[6px] border-white/20 shadow-2xl max-w-lg w-full">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Doctor reviewing records" 
                className="w-full h-[500px] object-cover" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#1a1b26] text-white p-3 rounded-xl shadow-xl">
                <Heart size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white via-teal-50 to-[#2dd4bf]/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
               <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Medical Checkup" 
                  className="w-full h-[500px] object-cover" />
               <div className="absolute bottom-6 right-6 bg-[#1a1b26] text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                 <div className="text-3xl font-extrabold mb-1">12+ Years</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Medical Excellence</div>
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-200/60 text-gray-700 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
              <span>Who We Are</span>
            </div>   
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1b26] leading-tight">
              A Legacy of Compassionate Healthcare Excellence
            </h2>       
            <p className="text-gray-700 italic font-medium border-l-4 border-[#2dd4bf] pl-4 py-1">
              "Our clinic was founded on the principle that every patient deserves specialized medical attention tailored to their unique physiological needs."
            </p>          
            <p className="text-gray-600 leading-relaxed text-sm font-medium">
              At Dr. Manisha Rajesh Uro & Gynae Clinic, we provide comprehensive healthcare services specializing in both Urology and Gynecology. Our commitment to accurate diagnosis, effective treatment, and compassionate care ensures that every patient feels heard and valued. We leverage the latest medical advancements to provide minimally invasive solutions for complex conditions.
            </p>           
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 text-sm font-bold text-[#1a1b26]">
                <CheckCircle2 className="text-[#1a1b26] w-5 h-5" />
                <span>Board Certified Experts</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-[#1a1b26]">
                <CheckCircle2 className="text-[#1a1b26] w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-[#1a1b26]">
                <CheckCircle2 className="text-[#1a1b26] w-5 h-5" />
                <span>Advanced Diagnostics</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-[#1a1b26]">
                <CheckCircle2 className="text-[#1a1b26] w-5 h-5" />
                <span>Patient-First Ethics</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a1b26] p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-extrabold mb-4">Our Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              To offer high-quality, personalized medical care through advanced diagnostic techniques and compassionate treatment protocols, ensuring the best possible health outcomes for our patients.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#475569] to-[#1e293b] p-10 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50"></div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-extrabold mb-4 relative z-10">Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium relative z-10">
              To be the leading center of excellence in Urology and Gynecology, recognized for our commitment to clinical innovation, patient safety, and holistic well-being in the community.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white via-yellow-50 to-yellow-400">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-200/80 text-gray-700 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-6">
              <span>Features</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1b26] mb-6">Why Choose Our Clinic?</h2>
            <p className="text-gray-600 font-medium max-w-2xl mx-auto text-sm">
              We combine medical expertise with a warm, patient-friendly approach to ensure you receive the highest standard of healthcare.
            </p>
          </div>   
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setActiveWhyChoose(index)}
                className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 ${
                  activeWhyChoose === index 
                    ? 'bg-gradient-to-br from-[#2dd4bf] to-[#0f766e] shadow-2xl transform scale-105 text-white' 
                    : 'bg-white shadow-md hover:shadow-lg text-[#1a1b26]'
                }`} >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                  activeWhyChoose === index ? 'bg-white/20 text-white' : 'bg-[#1a1b26] text-white'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-lg font-extrabold mb-3`}>{item.title}</h3>
                <p className={`text-[13px] leading-relaxed font-medium ${activeWhyChoose === index ? 'text-white/90' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-6">
              <span>Services</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1b26] mb-6">Specialized Care for Your Health</h2>
            <p className="text-gray-500 font-medium max-w-2xl mx-auto text-sm">
              Comprehensive diagnostic and therapeutic services across two critical medical disciplines.
            </p>
          </div>
          <div className="mb-16">
            <h3 className="text-center text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.2em] mb-8">Urology Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {urologyServices.map((item, index) => (
                <div 
                  key={`uro-${index}`}
                  onClick={() => setActiveUrology(index)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full ${
                    activeUrology === index 
                      ? 'bg-gradient-to-br from-[#2dd4bf] to-[#0f766e] shadow-xl transform scale-105 text-white' 
                      : 'bg-white shadow-sm hover:shadow-md'
                  }`} >
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activeUrology === index ? 'bg-white/20 text-white' : 'bg-[#f1f5f9] text-[#1a1b26]'
                      }`}>
                        {item.icon}
                      </div>
                      <h4 className={`font-extrabold text-[13px] leading-tight ${activeUrology === index ? 'text-white' : 'text-[#1a1b26]'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <p className={`text-[11px] leading-relaxed mb-6 font-medium ${activeUrology === index ? 'text-white/90' : 'text-gray-500'}`}>
                      {item.desc}
                    </p>
                  </div>
                  <div className={`flex items-center text-[10px] font-bold uppercase tracking-wider ${activeUrology === index ? 'text-white' : 'text-[#1a1b26]'}`}>
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-center text-[11px] font-extrabold text-gray-400 uppercase tracking-[0.2em] mb-8">Gynecology Services</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gynecologyServices.map((item, index) => (
                <div 
                  key={`gyn-${index}`}
                  onClick={() => setActiveGynecology(index)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border border-gray-100 flex flex-col justify-between h-full ${
                    activeGynecology === index 
                      ? 'bg-gradient-to-br from-[#2dd4bf] to-[#0f766e] shadow-xl transform scale-105 text-white' 
                      : 'bg-white shadow-sm hover:shadow-md'
                  }`}  >
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activeGynecology === index ? 'bg-white/20 text-white' : 'bg-[#f1f5f9] text-[#1a1b26]'
                      }`}>
                        {item.icon}
                      </div>
                      <h4 className={`font-extrabold text-[13px] leading-tight ${activeGynecology === index ? 'text-white' : 'text-[#1a1b26]'}`}>
                        {item.title}
                      </h4>
                    </div>
                    <p className={`text-[11px] leading-relaxed mb-6 font-medium ${activeGynecology === index ? 'text-white/90' : 'text-gray-500'}`}>
                      {item.desc}
                    </p>
                  </div>
                  <div className={`flex items-center text-[10px] font-bold uppercase tracking-wider ${activeGynecology === index ? 'text-white' : 'text-[#1a1b26]'}`}>
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#1a1b26] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-gray-400 mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold mb-1">10,000+</div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Happy Patients</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-gray-400 mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold mb-1">12+</div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Activity className="w-8 h-8 text-gray-400 mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold mb-1">2,500+</div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Successful Procedures</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-gray-400 mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold mb-1">24/7</div>
              <div className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Patient Support</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-200/80 text-gray-700 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
              <span>Quality Care</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a1b26] leading-tight">
              Patient-Centered Healthcare Experience
            </h2>
            <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-lg">
              We believe in transparency and patient education. Our goal is to empower you with knowledge about your condition and treatment options.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="bg-gray-100 p-2 rounded-lg text-[#1a1b26] mt-0.5"><Shield size={18} /></div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1a1b26] mb-1">Confidential Care</h4>
                  <p className="text-xs text-gray-500 font-medium">Your medical history and privacy are our top priorities.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="bg-gray-100 p-2 rounded-lg text-[#1a1b26] mt-0.5"><Activity size={18} /></div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1a1b26] mb-1">Modern Equipment</h4>
                  <p className="text-xs text-gray-500 font-medium">Equipped with the latest diagnostic imaging and lab facilities.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="bg-gray-100 p-2 rounded-lg text-[#1a1b26] mt-0.5"><Award size={18} /></div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1a1b26] mb-1">Trusted Specialists</h4>
                  <p className="text-xs text-gray-500 font-medium">A team of highly qualified medical professionals you can rely on.</p>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                <div className="bg-gray-100 p-2 rounded-lg text-[#1a1b26] mt-0.5"><Users size={18} /></div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#1a1b26] mb-1">Friendly Staff</h4>
                  <p className="text-xs text-gray-500 font-medium">Supporting you through every step of your recovery journey.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full">
              <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Patient consultation" className="w-full h-auto object-cover" />
              <div className="absolute top-8 left-[-1rem] bg-[#2dd4bf] text-white p-5 rounded-xl shadow-xl flex items-center space-x-3 max-w-[220px]">
                <ShieldCheck size={24} />
                <div>
                  <div className="text-sm font-extrabold mb-0.5">100% Secure</div>
                  <div className="text-[9px] font-medium opacity-90 leading-tight">We ensure every patient receives secure and safe privacy.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1b26] rounded-[2rem] p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2dd4bf] mb-6 leading-tight max-w-3xl mx-auto">
              Your Health Deserves Expert Care & Attention
            </h2>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto mb-10 font-medium">
              Join over 10,000+ happy patients who trust us with their health. Schedule your comprehensive checkup today and experience the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-full font-extrabold text-sm hover:bg-gray-100 transition-all shadow-lg">
                Book Appointment Now
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-full font-extrabold text-sm hover:bg-gray-100 transition-all shadow-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
