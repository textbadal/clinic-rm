import React, { useState } from 'react';
import { 
  Star, Heart, Users, Activity, CheckCircle2,
  CalendarCheck, UserSearch, Stethoscope, ThumbsUp
} from 'lucide-react';

const Testimonials = () => {
  const [activeVoice, setActiveVoice] = useState(0);
  const [activeAppreciation, setActiveAppreciation] = useState(1);

  const voices = [
    { name: "Anita Sharma", dept: "Gynecology", quote: "Truly the best experience I've had. The doctor is extremely knowledgeable and kind." },
    { name: "Rahul Varma", dept: "Urology", quote: "Minimal waiting time and very professional surgery outcome. Highly recommended clinic." },
    { name: "Sunita Roy", dept: "Consultation", quote: "She explained my condition so clearly. I felt heard and cared for after a long time." }
  ];

  const appreciations = [
    { name: "George K.", text: "Dr. Manisha is a lifesaver. Extremely thorough!" },
    { name: "John Doe", text: "Smooth procedure, quick recovery 10/10." },
    { name: "Vikram P.", text: "Friendly staff and very clean premises." },
    { name: "Rohini M.", text: "The nurses here are angels. Thank you!" },
    { name: "Priya S.", text: "Beautiful clinic environment. So peaceful." },
    { name: "Linda W.", text: "She took 30 mins just to explain my results. Rare find!" },
    { name: "Samantha", text: "The best uro-gynae expert in the city." },
    { name: "Ananya", text: "Prompt care when I needed it most." }
  ];

  return (
    <main className="font-sans">
      
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-r from-teal-50 via-teal-100 to-[#2dd4bf]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#1a1b26] text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              <Star size={12} className="text-yellow-400" />
              <span>Trusted by 10,000+ Patients</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-extrabold text-[#1a1b26] leading-tight tracking-tight">
              Real Stories.<br/>Real Care.<br/>Real Results.
            </h1>
            
            <p className="text-[#1a1b26]/80 leading-relaxed max-w-md font-bold text-sm">
              Discover how Dr. Manisha's integrated approach to Uro & Gynae health has transformed lives through compassionate treatment and clinical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#1a1b26] text-white px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-[#2a2b38] transition-all shadow-lg hover:-translate-y-1">
                Read Reviews
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-xl font-extrabold text-sm hover:bg-gray-50 transition-all shadow-sm">
                Book Appointment
              </button>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center mt-12 lg:mt-0">
            <div className="relative w-80 h-80 rounded-full border-[8px] border-white/40 flex items-center justify-center">
               <div className="w-64 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-2xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Doctor" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="absolute top-0 right-10 bg-white px-4 py-2 rounded-xl shadow-xl flex items-center space-x-2 z-20">
                 <img src="https://i.pravatar.cc/100?img=5" className="w-6 h-6 rounded-full" />
                 <span className="text-[10px] font-extrabold">"Miracle recovery!"</span>
               </div>
               <div className="absolute bottom-4 -right-10 bg-[#1a1b26] text-white px-4 py-3 rounded-xl shadow-xl flex items-center space-x-3 z-20">
                 <Heart className="text-[#2dd4bf] w-5 h-5" />
                 <div>
                   <div className="text-[11px] font-extrabold">Compassionate Care</div>
                   <div className="text-[8px] text-gray-400">The staff made me feel at home.</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1b26]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">Measuring Our Impact</h2>
            <p className="text-gray-400 text-sm">Numbers that reflect our dedication to patient health and happiness over the last decade.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-b from-yellow-50 to-yellow-200 rounded-2xl p-6 text-center shadow-lg border border-yellow-300/50">
              <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white mb-4">
                <Users size={20} />
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-[#1a1b26] mb-1">98%</div>
              <div className="text-[10px] text-yellow-800 font-extrabold uppercase tracking-wider">Patient Satisfaction</div>
              <div className="mt-4 w-full h-1 bg-blue-500 rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-10 h-10 mx-auto bg-[#2dd4bf] rounded-full flex items-center justify-center text-white mb-4">
                <Users size={20} />
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-[#1a1b26] mb-1">1000+</div>
              <div className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Happy Patients</div>
              <div className="mt-4 w-full h-1 bg-[#2dd4bf] rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white mb-4">
                <Activity size={20} />
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-[#1a1b26] mb-1">500+</div>
              <div className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Successful Treatments</div>
              <div className="mt-4 w-full h-1 bg-blue-500 rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-10 h-10 mx-auto bg-red-400 rounded-full flex items-center justify-center text-white mb-4">
                <Heart size={20} />
              </div>
              <div className="text-2xl lg:text-3xl font-extrabold text-[#1a1b26] mb-1">10k+</div>
              <div className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wider">Lives Touched</div>
              <div className="mt-4 w-full h-1 bg-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-4xl font-extrabold text-[#1a1b26]">Your Journey to Wellness</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We walk with you through every step. From your initial booking to full recovery, Dr. Manisha's team ensures transparency, comfort, and clinical excellence.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3 text-sm font-bold text-[#1a1b26]">
                <CheckCircle2 className="text-[#1a1b26] w-4 h-4" />
                <span>Personalized Treatment Plans</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-[#1a1b26]">
                <CheckCircle2 className="text-[#1a1b26] w-4 h-4" />
                <span>State-of-the-art Medical Technology</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-[#1a1b26]">
                <CheckCircle2 className="text-[#1a1b26] w-4 h-4" />
                <span>Post-Treatment Support</span>
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-[#2dd4bf] text-white px-6 py-3 rounded-full font-extrabold text-sm hover:bg-[#14b8a6] transition-all shadow-md">
                Learn About Our Process
              </button>
            </div>
          </div>
          
          <div className="relative border-l-2 border-gray-100 pl-8 space-y-12">
             <div className="relative">
               <div className="absolute -left-[41px] top-2 w-6 h-6 bg-blue-100 border-2 border-blue-500 rounded-full flex items-center justify-center">
                 <CalendarCheck className="text-blue-500 w-3 h-3" />
               </div>
               <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-extrabold text-sm text-[#1a1b26]">Appointment Booked</h4>
                   <div className="flex text-gray-200"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                 </div>
                 <p className="text-[11px] text-gray-500 mb-4">Fast response and flexible scheduling.</p>
                 <div className="flex items-center space-x-2">
                   <img src="https://i.pravatar.cc/100?img=9" className="w-5 h-5 rounded-full" />
                   <span className="text-[10px] font-bold">Emily Rogers</span>
                 </div>
               </div>
             </div>
             
             <div className="relative">
               <div className="absolute -left-[41px] top-2 w-6 h-6 bg-blue-100 border-2 border-blue-500 rounded-full flex items-center justify-center">
                 <UserSearch className="text-blue-500 w-3 h-3" />
               </div>
               <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-extrabold text-sm text-[#1a1b26]">Detailed Consultation</h4>
                   <div className="flex text-gray-200"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                 </div>
                 <p className="text-[11px] text-gray-500 mb-4">All my questions were answered patiently.</p>
                 <div className="flex items-center space-x-2">
                   <img src="https://i.pravatar.cc/100?img=11" className="w-5 h-5 rounded-full" />
                   <span className="text-[10px] font-bold">David Chen</span>
                 </div>
               </div>
             </div>

             <div className="relative">
               <div className="absolute -left-[41px] top-2 w-6 h-6 bg-blue-100 border-2 border-blue-500 rounded-full flex items-center justify-center">
                 <Stethoscope className="text-blue-500 w-3 h-3" />
               </div>
               <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm">
                 <div className="flex justify-between items-start mb-2">
                   <h4 className="font-extrabold text-sm text-[#1a1b26]">Smooth Treatment</h4>
                   <div className="flex text-gray-200"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                 </div>
                 <p className="text-[11px] text-gray-500 mb-4">Professional staff and painless procedure.</p>
                 <div className="flex items-center space-x-2">
                   <img src="https://i.pravatar.cc/100?img=12" className="w-5 h-5 rounded-full" />
                   <span className="text-[10px] font-bold">Maria Garcia</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-2/5">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Patient" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-12">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-[#1a1b26] text-white text-[10px] font-extrabold px-3 py-1 rounded-full">Patient Story</div>
                <div className="flex text-yellow-400"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-[#1a1b26] italic mb-6 leading-relaxed">
                "Dr. Manisha didn't just treat my symptoms; she restored my confidence and quality of life."
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                I had been struggling with chronic issues for over three years. Every other clinic felt like a revolving door. Dr. Manisha took the time to listen, diagnosed the root cause, and guided me through a holistic recovery plan. Today, I'm back to my daily walks and spending time with my grandkids without any worry.
              </p>
              <div className="flex items-center space-x-3">
                 <img src="https://i.pravatar.cc/100?img=43" className="w-10 h-10 rounded-full" />
                 <div>
                   <div className="font-extrabold text-sm text-[#1a1b26]">Mrs. Aditi Hegde</div>
                   <div className="text-[10px] text-gray-500 font-bold">Urology Patient • Verified</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1a1b26] mb-2">Patient Voice</h2>
               <p className="text-gray-500 text-sm">Latest reviews from our community.</p>
             </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             {voices.map((item, index) => (
               <div 
                 key={index} 
                 onClick={() => setActiveVoice(index)}
                 className={`cursor-pointer p-8 rounded-3xl transition-all duration-300 ${
                   activeVoice === index 
                     ? 'bg-gradient-to-br from-teal-100 to-[#2dd4bf] text-white shadow-xl scale-105'
                     : 'bg-white border border-gray-100 text-[#1a1b26] shadow-sm hover:shadow-md'
                 }`}
               >
                 <div className={`flex mb-4 ${activeVoice === index ? 'text-yellow-400' : 'text-yellow-400'}`}>
                   <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                 </div>
                 <p className={`text-sm leading-relaxed font-medium mb-8 ${activeVoice === index ? 'text-white' : 'text-gray-600'}`}>
                   "{item.quote}"
                 </p>
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${index+20}`} className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <div className="font-extrabold text-sm">{item.name}</div>
                     <div className={`text-[10px] font-bold ${activeVoice === index ? 'text-white/80' : 'text-gray-400'}`}>{item.dept}</div>
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white via-yellow-50 to-yellow-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#1a1b26] mb-3">Wall of Appreciation</h2>
            <p className="text-[#2dd4bf] text-sm font-bold">Short notes of gratitude from those we've served. These keep our mission alive every day.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {appreciations.map((item, index) => (
               <div 
                 key={index}
                 onClick={() => setActiveAppreciation(index)}
                 className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 ${
                   activeAppreciation === index
                     ? 'bg-white shadow-xl transform -translate-y-1 border border-yellow-200'
                     : 'bg-white/60 shadow-sm hover:bg-white border border-transparent'
                 }`}
               >
                 <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                       <div className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-[8px] font-bold">
                         {item.name.charAt(0)}
                       </div>
                       <div>
                         <div className="text-[11px] font-extrabold text-[#1a1b26]">{item.name}</div>
                       </div>
                    </div>
                    <div className="flex items-center text-[10px] font-bold">
                      <Star size={10} className="text-yellow-500 mr-1" fill="currentColor"/> 5.0
                    </div>
                 </div>
                 <p className="text-[11px] text-gray-600 italic leading-relaxed mb-4">"{item.text}"</p>
                 <div className="flex justify-between items-center text-[9px]">
                   <span className="bg-[#1a1b26] text-white px-2 py-1 rounded font-bold">Verified</span>
                   <span className="text-gray-400">Jan 12, 2026</span>
                 </div>
               </div>
             ))}
          </div>
          
          <div className="mt-16 bg-[#2dd4bf] p-8 md:p-10 rounded-[2rem] shadow-xl flex flex-col md:flex-row items-center justify-between text-white">
             <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
               <div className="bg-white p-4 rounded-2xl text-[#1a1b26] flex items-center space-x-3">
                 <ThumbsUp className="text-[#2dd4bf]" />
                 <div>
                   <div className="font-extrabold text-sm">Google Reviews</div>
                 </div>
               </div>
               <div>
                 <div className="flex items-end space-x-4">
                   <div className="text-5xl font-extrabold">4.9</div>
                   <div>
                     <div className="flex text-yellow-400 mb-1"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                     <div className="text-[11px] font-bold">Based on 1,248 reviews</div>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="flex space-x-3">
               <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-extrabold text-sm shadow-md">Write a Review</button>
               <button className="bg-white text-[#1a1b26] px-6 py-2.5 rounded-full font-extrabold text-sm shadow-md">View All Reviews</button>
             </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-[#1a1b26] rounded-[2rem] p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Experience Healthcare You Can Trust
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10">
              Your journey to better health starts with a single conversation. Book your appointment today and join our family of happy, healthy patients.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-extrabold text-sm hover:bg-gray-100 transition-all shadow-lg">
                Book Appointment Now
              </button>
              <button className="bg-white text-gray-700 px-8 py-3 rounded-full font-extrabold text-sm hover:bg-gray-100 transition-all shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Testimonials;
