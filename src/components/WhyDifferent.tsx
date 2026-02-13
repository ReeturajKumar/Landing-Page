import React, { useState, useEffect } from 'react';
import user1 from '../assets/avatars/user1.jpg';
import user2 from '../assets/avatars/user2.jpg';
import user3 from '../assets/avatars/user3.jpg';
import user4 from '../assets/avatars/user4.jpg';

const WhyDifferent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const points = [
    {
      other: "Generic recorded lectures",
      otherStat: "Low retention",
      cb: "180+ Hrs Live Architecture Sessions",
      cbStat: "94% Active completion",
      accent: "bg-blue-500"
    },
    {
      other: "Theory-heavy documentation",
      otherStat: "Lack of context",
      cb: "12+ Real-World DevOps Capstones",
      cbStat: "Industry-ready portfolio",
      accent: "bg-orange-500"
    },
    {
      other: "Average salary hike: 10-15%",
      otherStat: "Gradual growth",
      cb: "Average Salary Hike: 156%",
      cbStat: "₹12L-₹24L Range",
      accent: "bg-green-500"
    },
    {
      other: "Email-only support queues",
      otherStat: "24-48hr delay",
      cb: "Instant 1:1 Slack & Live Mentorship",
      cbStat: "5-min response time",
      accent: "bg-purple-500"
    },
    {
      other: "No placement accountability",
      otherStat: "Self-driven job hunt",
      cb: "3-Stage Career Acceleration Program",
      cbStat: "Placement assistance",
      accent: "bg-[#FF5024]"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 4000); // Cycle every 4 seconds
    return () => clearInterval(interval);
  }, [points.length]);

  return (
    <section id="approach" className="relative py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#FF5024] tracking-tight ml-0.5 uppercase tracking-widest">Other bootcamps vs Your new path</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 leading-none">
              Why our students <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] to-[#F9A01B]">succeed.</span>
            </h2>
          </div>
          <p className="text-[13px] text-slate-500 font-medium max-w-[280px] md:text-right leading-relaxed italic border-r-2 border-slate-100 pr-4">
             Numbers don't lie. Most institutes just sell courses; <span className="text-slate-900 font-bold">we build your future.</span>
          </p>
        </div>

        {/* High-Performance Comparison Matrix - Compact Pro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 overflow-hidden rounded-[2rem] border border-slate-100">
          
          {/* Left Side: Standard Way - Short & Sharp */}
          <div className="bg-white p-6 md:p-8 space-y-6">
            <div className="pb-3 border-b border-slate-100">
               <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">The "Old" Way</span>
            </div>
            <div className="space-y-6">
              {points.map((item, i) => (
                <div key={i} className={`flex items-center gap-4 transition-all duration-700 ${i === activeIndex ? 'opacity-100' : 'opacity-30 blur-[0.5px]'}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 shrink-0" />
                  <div className="flex flex-col">
                    <p className="text-[12px] font-bold text-slate-400 leading-none">{item.other}</p>
                    <span className="text-[8px] font-bold text-slate-300 uppercase mt-1">Common Issue</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: CloudBlitz Way - Dynamic Methodology */}
          <div className="bg-white p-6 md:p-8 space-y-6 relative overflow-hidden group/method">
            {/* Background Glow that reacts to active point */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[100px] opacity-40 -mr-32 -mt-32 transition-transform duration-1000" style={{ transform: `translateY(${activeIndex * 60}px)` }} />
            
            <div className="pb-3 border-b border-orange-100 flex items-center justify-between">
               <span className="text-[9px] font-black text-[#FF5024] uppercase tracking-widest">Our Way</span>
               <div className="flex items-center gap-1.5">
                  <span className="text-[8px] font-black text-orange-300 uppercase tracking-tighter">Step {activeIndex + 1}</span>
                  <div className="flex gap-0.5">
                    {points.map((_, i) => (
                      <div key={i} className={`w-1 h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-3 bg-[#FF5024]' : 'bg-slate-200'}`} />
                    ))}
                  </div>
               </div>
            </div>

            <div className="relative space-y-6">
              {/* Vertical Progress Line */}
              <div className="absolute left-[10px] top-2 bottom-2 w-[1px] bg-slate-100">
                <div 
                  className="absolute top-0 left-0 w-full bg-[#FF5024] transition-all duration-700 ease-in-out"
                  style={{ height: `${((activeIndex + 1) / points.length) * 100}%` }}
                />
              </div>

              {points.map((item, i) => (
                <div 
                  key={i} 
                  className={`relative pl-8 transition-all duration-500 group/item ${i === activeIndex ? 'scale-[1.02]' : 'opacity-40 grayscale blur-[0.2px]'}`}
                  onClick={() => setActiveIndex(i)}
                >
                  {/* Step Connector Node */}
                  <div className={`absolute left-0 top-1.5 w-5 h-5 rounded-lg border flex items-center justify-center transition-all duration-500 ${i === activeIndex ? 'bg-[#FF5024] border-[#FF5024] shadow-lg shadow-orange-200 scale-110' : 'bg-white border-slate-200'}`}>
                    <span className={`text-[9px] font-black transition-colors ${i === activeIndex ? 'text-white' : 'text-slate-300'}`}>
                      {i + 1}
                    </span>
                  </div>

                  <div className="flex flex-col cursor-pointer">
                    <p className={`text-[13px] font-black transition-colors duration-500 ${i === activeIndex ? 'text-slate-900 underline decoration-[#FF5024] decoration-2 underline-offset-4' : 'text-slate-500'}`}>
                      {item.cb}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md transition-colors ${i === activeIndex ? 'bg-orange-50 text-[#FF5024]' : 'bg-slate-50 text-slate-400'}`}>
                        {i === 0 ? "Students actually finish" : 
                         i === 1 ? "Build what companies want" :
                         i === 3 ? "We answer in minutes" :
                         item.cbStat}
                      </span>
                      {i === activeIndex && (
                        <span className="text-[9px] font-bold text-green-500 animate-pulse">● Learning in progress</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proof Statement */}
        <div className="mt-8 pt-8 border-t border-slate-50 text-center max-w-4xl mx-auto space-y-4">
          <p className="text-lg md:text-xl font-bold text-slate-900 leading-tight tracking-tight">
            "Our students don't just learn tools. They build portfolios that make recruiters say: <span className="text-[#FF5024] italic underline decoration-orange-100 underline-offset-4 decoration-2">When can you join?</span>"
          </p>
          
          <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-1.5">
                {[user1, user2, user3, user4].map((src, j) => (
                  <img 
                    key={j} 
                    src={src}
                    alt="Success story"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover bg-slate-100 shadow-sm" 
                    loading="lazy"
                  />
                ))}
              </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
               Joined by <span className="text-slate-900">1,500+ professionals</span>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
