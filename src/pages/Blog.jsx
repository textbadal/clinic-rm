import React, { useState } from 'react';
import { 
  Droplets, Stethoscope, Activity, HeartPulse, 
  ArrowRight, Search, Calendar, Clock
} from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTip, setActiveTip] = useState(3); // Default 'Exercise Often'

  const categories = [
    "All Articles", "Urology", "Gynecology", "Pregnancy Care", 
    "Women's Health", "Kidney Health", "PCOS & Hormonal Health", "Preventive Care"
  ];

  const tips = [
    { icon: <Droplets size={24} />, title: "Stay Hydrated", desc: "Drink at least 8-10 glasses of water daily to maintain optimal kidney function." },
    { icon: <Stethoscope size={24} />, title: "Regular Checkups", desc: "Schedule annual screenings to detect potential concerns before they become issues." },
    { icon: <Activity size={24} />, title: "Balanced Nutrition", desc: "Incorporate fiber-rich foods and antioxidants to support hormonal balance." },
    { icon: <HeartPulse size={24} />, title: "Exercise Often", desc: "30 mins of daily movement helps regulate hormones and improves circulation." },
  ];

  const articles = [
    { 
      tag: "Kidney Health", title: "Understanding Kidney Stones: Symptoms, Causes & Prevention", 
      desc: "Learn how to identify early signs of kidney stones and effective lifestyle changes to...",
      date: "May 12, 2026", read: "8 min read", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    { 
      tag: "Women's Health", title: "PCOS Management: A Holistic Approach to Hormonal Balance", 
      desc: "A comprehensive guide on managing PCOS symptoms through nutrition, exercise, and...",
      date: "May 10, 2026", read: "12 min read", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    { 
      tag: "Pregnancy Care", title: "Essential Tips for a Healthy First Trimester Journey", 
      desc: "Everything you need to know about your first 12 weeks of pregnancy, from nutrition to...",
      date: "May 08, 2026", read: "10 min read", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    { 
      tag: "Urology", title: "Men's Health: Why Regular Prostate Screenings Matter", 
      desc: "Discussing the importance of early detection and what to expect during a urological...",
      date: "May 05, 2026", read: "6 min read", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    { 
      tag: "Preventive Care", title: "Hydration and Urinary Health: The Underrated Connection", 
      desc: "How water intake directly impacts your kidney function and prevents common infections...",
      date: "May 02, 2026", read: "5 min read", img: "https://images.unsplash.com/photo-1527021115852-c288eb62491a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    { 
      tag: "Healthy Lifestyle", title: "Building a Pelvic Floor Routine for Long-term Wellness", 
      desc: "Simple exercises that can significantly improve your core strength and urinary control...",
      date: "April 28, 2026", read: "7 min read", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <main className="font-sans">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2dd4bf] via-teal-400 to-[#1e293b]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
          <div className="space-y-6 p-8 py-16 md:p-16 relative z-10 text-white">
            <div className="inline-flex items-center space-x-2 bg-[#1a1b26] text-white px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
              <span>Trusted Health Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1b26] leading-[1.1] tracking-tight">
              Health Insights & <br/>
              <span className="text-yellow-400 drop-shadow-sm">Expert Advice</span>
            </h1>       
            <p className="text-[#1a1b26] leading-relaxed max-w-md font-bold text-sm">
              Stay informed with the latest research, wellness tips, and expert articles specializing in Urology and Gynecology care.
            </p>            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#1a1b26] text-white px-8 py-3 rounded-full font-extrabold text-sm hover:bg-[#2a2b38] transition-all shadow-lg hover:-translate-y-1">
                Explore Articles
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-full font-extrabold text-sm hover:bg-gray-50 transition-all shadow-sm">
                Book Appointment
              </button>
            </div>
          </div>         
          <div className="relative bg-gradient-to-r from-gray-700 to-[#1a1b26] flex justify-center items-center p-12">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl max-w-sm w-full bg-white p-4">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical tools" 
                className="w-full h-[300px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-gray-400/80 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-xl">
            <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
               <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Doctor consulting" className="w-full h-full object-cover" />
               <div className="absolute top-6 left-6 bg-[#1a1b26] text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase">Editor's Choice</div>
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-white font-extrabold text-[10px] uppercase tracking-wider mb-2">Urology & Preventive Care</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1b26] mb-4 leading-tight">Breaking the Taboo: Why Men Need to Prioritize Urological Health</h3>
              <p className="text-white font-bold text-sm leading-relaxed mb-8">Discussing common misconceptions and modern diagnostic breakthroughs in male urological care that every man over 40 should know.</p>
              <div className="flex items-center space-x-3 mb-8">
                 <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full border-2 border-white" />
                 <div>
                   <div className="font-extrabold text-sm text-[#1a1b26]">Dr. Manisha Rajesh</div>
                   <div className="text-[10px] text-gray-200 font-bold">May 15, 2026 • 15 min read</div>
                 </div>
              </div>
              <div>
                <button className="bg-[#1a1b26] text-white px-6 py-2.5 rounded-full font-extrabold text-sm shadow-md">Read Full Article</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-200/50 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-shrink-0 text-[#1a1b26] font-extrabold text-lg">
            Explore by <span className="text-yellow-500">Categories</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <button 
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-5 py-2 rounded-full font-extrabold text-[11px] transition-colors shadow-sm ${
                  activeCategory === index 
                    ? 'bg-[#2dd4bf] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}  >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
             <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1b26]">Latest Articles</h2>
             <a href="#" className="flex items-center text-blue-600 text-[11px] font-extrabold hover:text-blue-700 transition-colors">
               View All <ArrowRight className="w-3 h-3 ml-1" />
             </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white text-blue-500 px-3 py-1 rounded-full text-[9px] font-extrabold">{article.tag}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-gray-400 text-[10px] font-bold mb-3">
                    <div className="flex items-center"><Calendar size={12} className="mr-1" /> {article.date}</div>
                    <div className="flex items-center"><Clock size={12} className="mr-1" /> {article.read}</div>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1a1b26] mb-3 leading-tight group-hover:text-[#2dd4bf] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed flex-grow">
                    {article.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-teal-50 to-[#2dd4bf]/80">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1b26] mb-4">Quick Health Tips</h2>
            <p className="text-gray-600 text-sm font-bold max-w-lg mx-auto">
              Simple, daily actions you can take to maintain your urological and gynecological wellness.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
             {tips.map((tip, index) => (
               <div 
                 key={index}
                 onClick={() => setActiveTip(index)}
                 className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                   activeTip === index 
                     ? 'bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-xl transform scale-105 text-[#1a1b26]'
                     : 'bg-white/70 shadow-sm hover:shadow-md border border-white text-[#1a1b26]'
                 }`}
               >
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-5 bg-[#1a1b26] text-white`}>
                   {tip.icon}
                 </div>
                 <h3 className="text-[13px] font-extrabold mb-2">{tip.title}</h3>
                 <p className={`text-[10px] font-bold leading-relaxed ${activeTip === index ? 'text-[#1a1b26]/70' : 'text-gray-500'}`}>
                   {tip.desc}
                 </p>
               </div>
             ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-extrabold text-[#1a1b26] mb-2">Popular Topics</h2>
            <p className="text-[11px] text-gray-500 font-bold">Quickly jump to the most searched healthcare topics and find expert solutions.</p>
          </div>
          <div className="md:w-2/3 flex flex-wrap gap-3">
             {["Kidney Stones", "UTI", "Prostate Health", "Pregnancy", "PCOS", "Menstrual Health", "Infertility", "Women's Wellness"].map((topic, i) => (
               <button key={i} className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-[10px] font-extrabold hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-colors shadow-sm">
                 {topic}
               </button>
             ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-[#1a1b26] rounded-[2rem] p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Have a Health Concern?
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10 font-bold">
              Don't wait. Early consultation can make all the difference. Our expert team is ready to provide the specialized care you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#2dd4bf] text-[#1a1b26] px-8 py-3 rounded-full font-extrabold text-sm hover:bg-[#14b8a6] transition-all shadow-lg">
                Book Appointment
              </button>
              <button className="bg-white text-[#1a1b26] px-8 py-3 rounded-full font-extrabold text-sm hover:bg-gray-50 transition-all shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Blog;
