import React, { useState } from 'react';
import user1 from '../assets/avatars/user1.jpg';
import user2 from '../assets/avatars/user2.jpg';
import user3 from '../assets/avatars/user3.jpg';
import user4 from '../assets/avatars/user4.jpg';

const FinalCTA: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <section className="relative py-8 bg-white overflow-hidden group/section">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-50/40 rounded-full blur-[160px] animate-pulse duration-[10000ms]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-full">
          {/* Left-Aligned Header with Subheading */}
          <div className="space-y-3 mb-6 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-tight text-[#FF5024]">Career Decision Point</span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-slate-900 leading-none">
                Your next career move <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] to-[#F9A01B] animate-gradient-x underline decoration-slate-100 underline-offset-8">starts here.</span>
              </h2>
            </div>
            <p className="text-sm font-medium text-slate-500 max-w-2xl leading-relaxed">
              In 6 months, you'll either be watching others grow or leading the charge yourself. <span className="text-slate-900 font-bold">The choice is yours.</span>
            </p>
          </div>

          {/* Redesigned High-Concept Choice Interface */}
          <div className="relative mb-12">
            {/* The Floating "OR" Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
              <div className="w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50">
                <span className="text-[10px] font-bold text-slate-300 italic font-serif">vs</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 relative z-10">
              {/* Card 01: The Cost of Inaction */}
              <div className="relative group/card1 p-10 rounded-[2.5rem] bg-slate-50/50 border border-slate-100/50 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden cursor-default">
                {/* Visual Depth Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16 group-hover/card1:bg-red-50/40 transition-colors duration-700" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 tracking-tight">Stagnation path</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-400 group-hover/card1:text-slate-600 transition-colors">Same role, same salary</h4>
                    <p className="text-xs font-medium text-slate-400 leading-relaxed max-w-xs">
                      Watching the DevOps wave pass by while you wait for a generic 10% appraisal in an outdated role.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-white border border-slate-100 rounded-full text-[9px] font-bold text-slate-300">Legacy tech</span>
                    <span className="px-3 py-1 bg-white border border-slate-100 rounded-full text-[9px] font-bold text-slate-300">Stuck salary</span>
                  </div>
                </div>
              </div>

              {/* Card 02: The DevOps Elite */}
              <div className="relative group/card2 p-10 rounded-[2.5rem] bg-white border border-orange-100 shadow-[0_40px_80px_-20px_rgba(255,80,36,0.1)] hover:shadow-[0_40px_100px_-20px_rgba(255,80,36,0.18)] transition-all duration-700 overflow-hidden cursor-default">
                {/* Visual Depth Decoration */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50 rounded-full blur-[80px] -mr-20 -mt-20 group-hover/card2:bg-orange-100 transition-colors duration-700" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF5024] flex items-center justify-center shadow-lg shadow-orange-200">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-[#FF5024] tracking-tight">Transformation path</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 group-hover/card2:text-[#FF5024] transition-colors">Senior DevOps Architect</h4>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed max-w-xs">
                      Mastering K8s, Terraform, and CI/CD Pipelines with a <span className="text-slate-900 font-bold">100%+ salary jump</span> in elite tech firms.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[9px] font-bold text-[#FF5024]">Hiring ready</span>
                    <span className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-[9px] font-bold text-[#FF5024]">Cloud-first</span>
                  </div>
                </div>

                <div className="absolute bottom-6 right-10 opacity-0 group-hover/card2:opacity-100 group-hover/card2:translate-x-2 transition-all duration-500">
                   <span className="text-[10px] font-bold text-[#FF5024]">Your future ➔</span>
                </div>
              </div>
            </div>
          </div>

          {/* Redesigned Side-by-Side Action Hub */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            
            {/* Left: Primary Action & Schedule */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5024] to-[#F9A01B] rounded-xl blur-lg opacity-25 group-hover/btn:opacity-50 transition-opacity" />
                <button 
                  onClick={handleClick}
                  disabled={isLoading}
                  className="relative bg-[#FF5024] hover:bg-[#E4451D] text-white px-10 py-5 rounded-xl text-xs md:text-sm font-bold tracking-tight transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-orange-200 whitespace-nowrap min-w-[240px] flex items-center justify-center gap-3 disabled:opacity-80"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Book my FREE demo class"
                  )}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 border-l border-slate-200 pl-10 hidden sm:grid">
                {[
                  { l: "Fri", v: "7PM" },
                  { l: "Sat", v: "11AM" },
                  { l: "Sun", v: "4PM" }
                ].map((t, i) => (
                  <div key={i} className="group/time">
                    <p className="text-[9px] font-bold text-[#FF5024] transition-transform group-hover/time:-translate-y-0.5">{t.l}</p>
                    <p className="text-[11px] font-bold text-slate-900">{t.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Social Proof Stats */}
            <div className="flex flex-col md:items-end gap-1 md:text-right">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5 mr-2">
                   {[user1, user2, user3, user4].map((img, i) => (
                     <img 
                       key={i} 
                       src={img} 
                       alt={`Student ${i + 1}`} 
                       className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm bg-slate-100" 
                     />
                   ))}
                </div>
                <div className="h-4 w-px bg-slate-200" />
                <span className="text-xl md:text-2xl font-bold text-slate-900 leading-none">1,500+</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 tracking-tight leading-none">Indian professionals enrolled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
