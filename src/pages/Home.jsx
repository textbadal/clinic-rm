import React, { useState } from 'react';
import manishaImg from '../assets/mnisha.jpeg';
import rajeshImg from '../assets/rajesh.jpeg';
import maniImg from '../assets/mani.jpeg';
import c1Img from '../assets/c1.jpeg';
import c2Img from '../assets/c2.jpeg';
import { 
  Calendar, PhoneCall, Award, Users, Stethoscope, HeartPulse, ShieldCheck, 
  ArrowRight, Heart, User, Droplets, Activity, Zap, Baby, Shield, Target,
  ChevronLeft, ChevronRight, Star
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Home = () => {
  const [activeSpeciality, setActiveSpeciality] = useState(2); // Default Kidney Stone
  const [activeTreatment, setActiveTreatment] = useState(3); // Default Kidney Stones
  const [activeTestimonial, setActiveTestimonial] = useState(2); // Default 3rd one
  const specialities = [
    { icon: <Heart className="w-6 h-6" />, title: "Pregnancy Care", desc: "Comprehensive prenatal and postnatal support for a healthy journey into motherhood." },
    { icon: <User className="w-6 h-6" />, title: "Women's Health", desc: "Specialized screenings, preventative care, and treatments for all life stages." },
    { icon: <Droplets className="w-6 h-6" />, title: "Kidney Stone", desc: "Advanced laser and minimally invasive treatments for quick stone removal." },
    { icon: <Stethoscope className="w-6 h-6" />, title: "Prostate Care", desc: "Expert diagnosis and treatment plans for various prostate-related conditions." },
    { icon: <Activity className="w-6 h-6" />, title: "Infertility Care", desc: "Compassionate fertility assessments and advanced assisted reproductive treatments." },
    { icon: <Zap className="w-6 h-6" />, title: "Urinary Disorders", desc: "Diagnosis and management of complex urinary tract issues in both men and women." },
  ];

  const treatments = [
    { icon: <Activity className="w-6 h-6" />, title: "PCOS Treatment", desc: "Holistic management plans including lifestyle guidance and medical therapy." },
    { icon: <Shield className="w-6 h-6" />, title: "High-Risk Pregnancy", desc: "Dedicated monitoring and specialized care for complex pregnancy cases." },
    { icon: <Baby className="w-6 h-6" />, title: "Normal Delivery", desc: "Supportive environments focused on safe and natural birthing experiences." },
    { icon: <Droplets className="w-6 h-6" />, title: "Kidney Stones", desc: "Minimally invasive lithotripsy and laser treatments for painless removal." },
    { icon: <Target className="w-6 h-6" />, title: "Laser Urology", desc: "State-of-the-art laser technology for precise surgical outcomes." },
    { icon: <Heart className="w-6 h-6" />, title: "UTI Treatment", desc: "Rapid diagnosis and effective antibiotic protocols for recurring infections." },
    { icon: <Users className="w-6 h-6" />, title: "Male Infertility", desc: "Expert clinical assessments and micro-surgical treatment options." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Bladder Disorders", desc: "Comprehensive care for incontinence and chronic bladder conditions." },
  ];

  const testimonials = [
    { text: "Dr. Manisha's care during my pregnancy was exceptional. She was patient, knowledgeable, and always available to answer my many questions. I felt truly safe in her hands.", author: "Priya Sharma", role: "Gynecology Patient", img: "https://i.pravatar.cc/150?img=1" },
    { text: "I had a very positive experience with Dr. Rajesh for my kidney stone treatment. The laser procedure was quick, and the recovery was much faster than I expected. Highly recommended!", author: "Amit Patel", role: "Urology Patient", img: "https://i.pravatar.cc/150?img=11" },
    { text: "Finally found a doctor who understands PCOS. Dr. Manisha's holistic approach has helped me manage my symptoms effectively for the first time in years. Truly life-changing care.", author: "Sneha Reddy", role: "PCOS Patient", img: "https://i.pravatar.cc/150?img=5" },
  ];

  return (
    <main className="font-sans">
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1e3a8a] px-4 py-2 rounded-full text-xs font-bold border border-blue-100 shadow-sm">
              <span>Welcome to DrManishaRajesh Clinic</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e3a8a] leading-[1.1] tracking-tight">
              Expert Urology <br className="hidden md:block" />& <span className="text-[#3b82f6]">Gynecology</span> Care You Can Trust
            </h1>
            
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl font-medium">
              Providing compassionate healthcare with advanced treatments for women and urology patients. Our mission is your well-being.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-[#152e73] transition-all shadow-lg hover:-translate-y-1">
                <span>Book Appointment</span>
                <Calendar className="w-5 h-5" />
              </button>
              <button className="bg-white text-[#1e3a8a] px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 border-2 border-[#1e3a8a] hover:bg-gray-50 transition-all shadow-sm">
                <span>Call Now</span>
                <PhoneCall className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-6 sm:max-w-md">
              <div className="bg-[#2dd4bf] text-white px-4 py-3 rounded-full text-xs md:text-sm font-semibold flex items-center justify-center shadow-md">
                <Award className="w-4 h-4 mr-2" /> Experienced Doctors
              </div>
              <div className="bg-[#2dd4bf] text-white px-4 py-3 rounded-full text-xs md:text-sm font-semibold flex items-center justify-center shadow-md">
                <HeartPulse className="w-4 h-4 mr-2" /> Advanced Medical Care
              </div>
              <div className="bg-[#2dd4bf] text-white px-4 py-3 rounded-full text-xs md:text-sm font-semibold flex items-center justify-center shadow-md">
                <Users className="w-4 h-4 mr-2" /> Personalized Treatment
              </div>
              <div className="bg-[#2dd4bf] text-white px-4 py-3 rounded-full text-xs md:text-sm font-semibold flex items-center justify-center shadow-md">
                <ShieldCheck className="w-4 h-4 mr-2" /> Safe & Hygienic Clinic
              </div>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative rounded-[2rem] overflow-hidden border-[10px] border-gray-100 shadow-2xl max-w-md w-full bg-white">
              <img 
                src={maniImg} 
                alt="Doctor with patient" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white p-5 rounded-2xl shadow-xl">
                <p className="text-[#1e3a8a] font-bold text-xs tracking-wider uppercase mb-1">Available Now</p>
                <p className="text-gray-500 text-sm font-medium">Schedule your virtual or in-person consultation today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white via-teal-50 to-[#2dd4bf]/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative flex justify-center">
             <div className="relative rounded-[2rem] border-8 border-white overflow-hidden shadow-2xl max-w-md w-full">
               <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Medical Equipment" 
                  className="w-full h-[450px] object-cover"
               />
               {/* Years of excellence badge */}
               <div className="absolute -bottom-2 -right-2 bg-[#1a1b26] text-white p-5 rounded-tl-2xl flex items-center space-x-3 shadow-xl">
                 <div className="bg-yellow-400 rounded-full p-2 text-[#1a1b26]">
                   <Award size={24} />
                 </div>
                 <div>
                   <div className="text-2xl font-bold leading-none">10+</div>
                   <div className="text-[10px] uppercase tracking-wider font-bold opacity-80 mt-1">Years of Excellence</div>
                 </div>
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <SectionHeading 
              title="Leading The Way In Specialized Healthcare" 
              subtitle="About Our Clinic" 
              align="left" 
              className="mb-6"
            />
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              DrManishaRajesh Clinic is a premier healthcare destination dedicated to providing specialized urological and gynecological care. With over a decade of experience, we combine medical excellence with a deeply personal approach to patient wellness.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Experience</p>
                <p className="text-[#1e3a8a] font-extrabold text-lg">10+ Years</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Happy Patients</p>
                <p className="text-[#1e3a8a] font-extrabold text-lg">5000+</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Equipment</p>
                <p className="text-[#1e3a8a] font-extrabold text-lg">Advanced Tech</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Patient Care</p>
                <p className="text-[#1e3a8a] font-extrabold text-lg">Personalized</p>
              </div>
            </div>
            
            <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-bold flex items-center space-x-2 hover:bg-[#152e73] transition-all shadow-lg mt-4 group">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#1a1b26] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#2dd4bf] mb-4">Meet Our Specialists</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg font-medium">
              Our team of dedicated professionals brings years of expertise and a passion for patient health to every consultation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Dr Manisha */}
            <div className="bg-white text-gray-900 rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-2xl group">
              <div className="w-full sm:w-2/5 h-64 sm:h-auto relative">
                <img src={manishaImg} alt="Dr. Manisha" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">12+ Yrs Exp</div>
              </div>
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#1e3a8a] mb-1">Dr. Manisha</h3>
                  <p className="text-yellow-500 font-bold text-[11px] tracking-wide uppercase mb-1">Senior Gynecologist</p>
                  <p className="text-[10px] text-gray-400 mb-4 font-bold">MBBS, MD - Obstetrics & Gynecology</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    Dr. Manisha specializes in high-risk pregnancy, PCOS management, and laparoscopic gynecological surgeries. She is known for her compassionate approach.
                  </p>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-[#2dd4bf] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#14b8a6] transition-colors shadow-md">View Profile</button>
                  <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-xl text-gray-400 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors"><Calendar size={18} /></button>
                </div>
              </div>
            </div>
            <div className="bg-white text-gray-900 rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-2xl group">
              <div className="w-full sm:w-2/5 h-64 sm:h-auto relative">
                <img src={rajeshImg} alt="Dr. Rajesh" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">15+ Yrs Exp</div>
              </div>
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#1e3a8a] mb-1">Dr. Rajesh</h3>
                  <p className="text-yellow-500 font-bold text-[11px] tracking-wide uppercase mb-1">Expert Urologist</p>
                  <p className="text-[10px] text-gray-400 mb-4 font-bold">MBBS, MS, MCh - Urology</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    Dr. Rajesh is a leading urologist with extensive expertise in laser urology, kidney stone treatments, and prostate health. He has performed 3000+ procedures.
                  </p>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-[#2dd4bf] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#14b8a6] transition-colors shadow-md">View Profile</button>
                  <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-xl text-gray-400 hover:border-[#1e3a8a] hover:text-[#1e3a8a] transition-colors"><Calendar size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white via-teal-50 to-[#2dd4bf]/80">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Our Medical Specialities" 
            className="mb-8"
          />
          <p className="text-center text-gray-500 font-medium max-w-2xl mx-auto mb-16">
            We focus on two key pillars of health, offering deep expertise in specialized domains for comprehensive wellness.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map((item, index) => (
              <div 
                key={index} 
                onClick={() => setActiveSpeciality(index)}
                className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 ${
                  activeSpeciality === index 
                    ? 'bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-2xl transform scale-105 text-[#1e3a8a]' 
                    : 'bg-white shadow-md hover:shadow-lg border border-gray-100 text-[#1e3a8a]'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  activeSpeciality === index ? 'bg-black/10 text-[#1e3a8a]' : 'bg-[#1a1b26] text-white'
                }`}>
                  {item.icon}
                </div>
                <h3 className={`text-xl font-extrabold mb-3`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 font-medium ${activeSpeciality === index ? 'text-[#1e3a8a]/80' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
                <div className={`flex items-center text-xs font-bold ${activeSpeciality === index ? 'text-[#1e3a8a]' : 'text-gray-500'}`}>
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Comprehensive Treatments" 
            className="mb-8"
          />
          <p className="text-center text-gray-500 font-medium max-w-2xl mx-auto mb-16">
            From routine checkups to advanced surgical procedures, we provide a full spectrum of medical solutions.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((item, index) => (
              <div 
                key={index}
                onClick={() => setActiveTreatment(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border border-gray-100 ${
                  activeTreatment === index 
                    ? 'bg-gradient-to-br from-[#2dd4bf] to-[#0f766e] shadow-xl transform scale-105 text-white' 
                    : 'bg-white shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeTreatment === index ? 'bg-white/20 text-white' : 'bg-[#f1f5f9] text-[#1a1b26]'
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className={`font-extrabold text-sm leading-tight ${activeTreatment === index ? 'text-white' : 'text-[#1a1b26]'}`}>
                    {item.title}
                  </h3>
                </div>
                <p className={`text-[12px] leading-relaxed mb-4 font-medium ${activeTreatment === index ? 'text-white/90' : 'text-gray-500'}`}>
                  {item.desc}
                </p>
                <div className={`flex items-center text-[10px] font-bold uppercase tracking-wider ${activeTreatment === index ? 'text-white' : 'text-[#1e3a8a]'}`}>
                  Read More <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-3">
                Why Choose Us
              </p>
              <h2 className="text-[#2dd4bf] text-3xl md:text-4xl font-extrabold mb-12 leading-tight">
                Patient-First Care Powered By Medical Excellence
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">Expert Specialists</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">Highly qualified doctors with global experience.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">Advanced Tech</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">The latest diagnostic and surgical equipment.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">Personalized Care</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">Treatment plans tailored to your specific needs.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">Affordable Care</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">Premium healthcare accessible to everyone.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">Emergency Support</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">Ready to assist you in critical medical situations.</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">Comfortable Clinic</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">A clean, modern environment for your ease.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full flex justify-center items-center">
               <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Doctor consultation" 
                  className="w-full h-auto object-cover rounded-3xl shadow-2xl z-10 max-w-md"
               />
            </div>
         </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white via-teal-50 to-[#2dd4bf]/80">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <SectionHeading 
            title="What Our Patients Say" 
            className="mb-6"
          />
          <p className="text-center text-gray-500 font-medium max-w-2xl mx-auto mb-16">
            Hear directly from those who have entrusted us with their healthcare journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div 
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 relative shadow-lg border border-gray-100 ${
                  activeTestimonial === index 
                    ? index % 2 === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 transform scale-105 text-[#1e3a8a]' : 'bg-gradient-to-br from-yellow-400 to-yellow-500 transform scale-105 text-[#1e3a8a]' 
                    : 'bg-white hover:-translate-y-1 hover:shadow-xl text-gray-600'
                }`}
              >
                <div className="flex mb-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${activeTestimonial === index ? 'text-[#1e3a8a] fill-current' : 'text-gray-300 fill-current'}`} />
                  ))}
                </div>
                <p className={`text-[13px] leading-relaxed mb-8 font-medium italic ${
                  activeTestimonial === index ? 'text-[#1e3a8a]/90' : 'text-gray-500'
                }`}>
                  "{item.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <img src={item.img} alt={item.author} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h4 className={`font-extrabold text-xs ${activeTestimonial === index ? 'text-[#1e3a8a]' : 'text-[#1a1b26]'}`}>{item.author}</h4>
                    <p className={`text-[10px] font-bold ${activeTestimonial === index ? 'text-[#1e3a8a]/70' : 'text-gray-400'}`}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12 space-x-3">
            <button className="w-10 h-10 rounded-full border-2 border-[#1a1b26] flex items-center justify-center text-[#1a1b26] hover:bg-[#1a1b26] hover:text-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white hover:bg-[#152e73] transition-colors shadow-lg">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#1a1b26]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[2rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1b26] mb-6 relative z-10 leading-tight">
              Take The First Step To Better Health
            </h2>
            <p className="text-[#1a1b26]/80 text-sm max-w-xl mx-auto mb-10 font-bold relative z-10">
              Schedule your consultation with our expert specialists today. We offer flexible appointment slots to suit your schedule.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-[#2dd4bf] text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-[#20c997] transition-all shadow-lg hover:-translate-y-1">
                Book Appointment
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-gray-50 transition-all shadow-lg hover:-translate-y-1">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-4">Our Certifications</h2>
            <div className="w-16 h-1 bg-[#2dd4bf] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-500 font-medium max-w-xl mx-auto text-sm">Recognized and certified by leading medical institutions ensuring the highest standards of care.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <img src={c1Img} alt="Certificate 1" className="w-full h-auto object-contain" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <img src={c2Img} alt="Certificate 2" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
