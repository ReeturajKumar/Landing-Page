import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [isMainLoading, setIsMainLoading] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const handleMainClick = () => {
    setIsMainLoading(true);
    setTimeout(() => setIsMainLoading(false), 1500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormLoading(true);
    setTimeout(() => setIsFormLoading(false), 1500);
  };

  return (
    <section className="relative pt-28 md:pt-36 lg:pt-32 pb-12 lg:pb-20 overflow-hidden bg-white">
      {/* Background: Modern Digital Architecture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-orange-50 rounded-full blur-[120px] mix-blend-multiply opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-yellow-50 rounded-full blur-[100px] mix-blend-multiply opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Content Architecture */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">

            {/* Premium Header Architecture */}
            <div className="space-y-4 md:space-y-6">
              
              <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] md:leading-[1.05] text-slate-900">
                <span className="text-slate-400 font-medium text-base sm:text-2xl md:text-5xl lg:text-6xl block mb-1 md:mb-2 italic">From ₹4.5 LPA to</span> 
                <span className="relative inline-block">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] via-[#F9A01B] to-[#FF5024] bg-[length:200%_auto] animate-gradient-x py-1">
                     ₹12 LPA in 6 months
                   </span>
                   {/* Hand-drawn accent underline */}
                   <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2 opacity-60" viewBox="0 0 318 12" fill="none" preserveAspectRatio="none">
                     <path d="M2.5 9.5C51 3.5 125.5 2 315.5 9.5" stroke="#FF5024" strokeWidth="4" strokeLinecap="round"/>
                   </svg>
                </span>
                <br />
                <span className="text-xl md:text-3xl lg:text-5xl font-bold tracking-tight text-slate-800/90 mt-2 md:mt-4 block leading-tight">
                  without quitting your job.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="max-w-lg mx-auto lg:mx-0 text-[13px] md:text-base text-gray-500 font-medium leading-relaxed lg:pr-10">
              Tired of support roles and salary freezes? Learn <span className="text-gray-900 font-bold underline decoration-orange-200">Cloud & DevOps</span> with real-world projects, live mentorship, and personalized career roadmaps.
            </p>

            {/* 3 Sharp Benefits - High Density */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 pt-2 select-none">
              {[
                { title: "Live DevOps projects", sub: "AWS Hands-on" },
                { title: "Weekend batches", sub: "Learn While You Earn" },
                { title: "Interview ready", sub: "Mock + Resume Prep" }
              ].map((benefit, i) => (
                <div key={i} className="group cursor-default border-l-2 md:border-l-0 md:border-t-2 lg:border-t-0 lg:border-l-2 border-slate-100 pl-4 md:pl-0 md:pt-3 lg:pt-0 lg:pl-4 py-0.5 hover:border-[#FF5024] transition-all duration-300 text-left sm:text-center lg:text-left">
                  <h4 className="text-[12px] md:text-[13px] font-bold text-slate-900 leading-tight mb-1">{benefit.title}</h4>
                  <p className="text-[10px] text-slate-400 font-extrabold tracking-tight leading-none uppercase">{benefit.sub}</p>
                </div>
              ))}
            </div>

            {/* CTA Layer */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4">
              <button 
                onClick={handleMainClick}
                disabled={isMainLoading}
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#FF5024] text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all hover:shadow-2xl hover:shadow-orange-200 hover:scale-[1.02] active:scale-95 overflow-hidden disabled:opacity-80"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {isMainLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Book Free Demo Class
                      <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </button>
              
              <div className="flex items-center gap-4 border-l border-slate-100 pl-6 w-full sm:w-auto justify-center lg:justify-start">
                 <div className="flex -space-x-3 shrink-0">
                   {[1, 2, 3, 4].map(i => <div key={i} className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-100 shadow-sm overflow-hidden flex-shrink-0"><img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="learner" width={40} height={40} className="w-full h-full object-cover" loading="lazy" /></div>)}
                 </div>
                 <div className="flex flex-col text-left">
                   <p className="text-[11px] font-bold text-gray-900 leading-none flex items-center gap-1.5">
                     <span className="text-[#F9A01B]">★★★★★</span>
                     4.8/5 rating
                   </p>
                   <p className="text-[9px] font-bold text-slate-400 tracking-tight mt-1.5">2,300+ learners transformed</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 max-w-2xl mx-auto w-full">
            <div className="relative z-10 w-full bg-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
              <div className="space-y-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                    Talk to a <span className="text-[#FF5024]">career mentor</span>
                  </h3>
                  <p className="text-[11px] text-gray-400 font-bold tracking-tight mt-1 capitalize">Get your personalized career roadmap for free</p>
                </div>

                <form className="space-y-5" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-tight">Full name</label>
                      <input required type="text" placeholder="Enter your name" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-[#FF5024] focus:bg-white outline-none transition-all placeholder:text-slate-300" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-tight">Email address</label>
                      <input required type="email" placeholder="name@company.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-[#FF5024] focus:bg-white outline-none transition-all placeholder:text-slate-300" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-tight">Phone number</label>
                    <div className="flex gap-2">
                       <div className="shrink-0 px-3 py-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-black flex items-center gap-1.5 text-slate-400">
                         <img src="https://flagcdn.com/w40/in.png" alt="India" width={16} height={11} className="w-4 h-auto rounded-sm opacity-80" />
                         +91
                       </div>
                      <input required type="tel" placeholder="00000 00000" className="flex-1 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold focus:ring-1 focus:ring-[#FF5024] focus:bg-white outline-none transition-all placeholder:text-slate-300" />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      disabled={isFormLoading}
                      className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-[0.98] shadow-2xl shadow-slate-100 disabled:opacity-80 flex items-center justify-center gap-3"
                    >
                      {isFormLoading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Get my roadmap now"
                      )}
                    </button>
                    <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest mt-4">
                      Limited seats for feb 25th cohort
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Ribbon: DRYo Infinite Auto-Scroll */}
        <div className="mt-10 pt-10 border-t border-slate-100 w-full overflow-hidden relative">
           <p className="text-center text-[10px] font-bold text-black tracking-[0.3em] mb-12 uppercase">Our alumni work at</p>
           
           <div className="flex relative select-none group/marquee">
             <div className="flex items-center gap-x-16 md:gap-x-24 animate-marquee whitespace-nowrap px-8">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {[
                      { name: "TCS", logo: "https://i.logos-download.com/113971/29583-s1280-f1edd59965558dfef713431e8730144a.avif/Tata_Consultancy_Services_Logo_2020-s1280.avif" },
                      { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/512px-Accenture.svg.png" },
                      { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
                      { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/512px-Infosys_logo.svg.png" },
                      { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/512px-Wipro_Primary_Logo_Color_RGB.svg.png" },
                      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png" },
                    ].map((brand, bIndex) => (
                      <img 
                        key={`${i}-${bIndex}`} 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="h-6 md:h-8 w-auto " 
                      />
                    ))}
                  </React.Fragment>
                ))}
             </div>
           </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: flex;
            width: fit-content;
          }
          .group\/marquee:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
