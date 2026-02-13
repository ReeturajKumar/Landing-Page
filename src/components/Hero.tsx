import React, { useState, useRef } from 'react';
import user1 from '../assets/avatars/user1.jpg';

const Hero: React.FC = () => {
  const [isMainLoading, setIsMainLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMainClick = () => {
    setIsMainLoading(true);
    setTimeout(() => setIsMainLoading(false), 1500);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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
          <div className="lg:col-span-12 xl:col-span-7 space-y-6 md:space-y-8 text-center xl:text-left">

            {/* Premium Header Architecture */}
            <div className="space-y-4 md:space-y-6">
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] md:leading-[1.05] text-slate-900">
                <span className="text-slate-400 font-medium text-[20px] sm:text-2xl md:text-5xl lg:text-6xl italic">From ₹4.5 LPA to</span> 
                <br className="block sm:hidden" />
                <span className="relative inline-block mt-2 sm:mt-0">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] via-[#F9A01B] to-[#FF5024] bg-[length:200%_auto] animate-gradient-x py-1">
                     ₹12 LPA in 6 months
                   </span>
                   {/* Hand-drawn accent underline */}
                   <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2 opacity-60" viewBox="0 0 318 12" fill="none" preserveAspectRatio="none">
                     <path d="M2.5 9.5C51 3.5 125.5 2 315.5 9.5" stroke="#FF5024" strokeWidth="4" strokeLinecap="round"/>
                   </svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-slate-800/90 mt-3 md:mt-4 block leading-tight">
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

          {/* Right Column: Success Story Video & Career Jump */}
          <div className="lg:col-span-12 xl:col-span-5 relative w-full group/video shrink-0">
            


            {/* Video Container */}
            <div 
              onClick={togglePlay}
              className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-900 shadow-[0_40px_80px_-15px_rgba(255,80,36,0.25)] border-4 border-white group-hover/video:shadow-[#FF502444] transition-all duration-700 cursor-pointer"
            >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover relative z-10"
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/From_Stuck_to_Success_Career_Growth_Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlays when paused */}
              <div className={`absolute inset-0 z-20 bg-slate-900/40 backdrop-blur-[1px] transition-all duration-500 flex items-center justify-center ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                 <div className="w-20 h-20 bg-white/20 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/30 transform hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                 </div>
              </div>

              {/* Identity Overlay */}
              <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full border-2 border-white/50 overflow-hidden shadow-2xl">
                       <img src={user1} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-base font-bold text-white leading-none tracking-tight">Prashant K.</h4>
                      <p className="text-[10px] font-bold text-orange-400 uppercase tracking-tighter mt-1.5">Senior DevOps Engineer</p>
                    </div>
                  </div>
              </div>
            </div>

            {/* Salary Transformation - Creative Progression Architecture */}
            <div className="mt-8 relative px-2">
              <div className="flex flex-row items-center justify-between gap-3 sm:gap-6 md:gap-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden group/stats">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 group-hover/stats:scale-150 transition-transform duration-700" />
                
                {/* Left Side: The Past */}
                <div className="relative flex flex-col gap-0.5 min-w-fit">
                  <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">Previous</span>
                  <div className="flex items-baseline gap-0.5 grayscale opacity-50 group-hover/stats:grayscale-0 group-hover/stats:opacity-100 transition-all duration-500">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-500 line-through decoration-slate-300">₹4.5</span>
                    <span className="text-[10px] md:text-[12px] font-bold text-slate-400">LPA</span>
                  </div>
                </div>

                {/* The "Transformation Bridge" */}
                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 via-[#FF502444] to-[#FF5024] relative flex items-center justify-center min-w-[20px]">
                  <div className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white shadow-lg rounded-full border border-orange-50 flex items-center justify-center -translate-y-px group-hover/stats:scale-110 transition-transform">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF5024]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Right Side: The Future */}
                <div className="relative flex flex-col items-end gap-0.5 min-w-fit">
                  <span className="text-[8px] md:text-[10px] font-black text-[#FF5024] uppercase tracking-[0.15em]">Result</span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tighter drop-shadow-sm">₹12.0</span>
                    <span className="text-[11px] md:text-[14px] font-black text-slate-900">LPA</span>
                  </div>
                </div>
              </div>

              {/* Sub-label for context */}
              <p className="mt-6 sm:mt-8 text-[9px] md:text-[11px] font-bold text-slate-400 text-center uppercase tracking-[0.2em] opacity-60">Verified transformational results after 24 weeks</p>
            </div>

            <style>{`
              @keyframes bounce-subtle {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-3px); }
              }
              .animate-bounce-subtle {
                animation: bounce-subtle 3s ease-in-out infinite;
              }
            `}</style>

            {/* Decorative Card Glow */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-[120px] -z-10 animate-pulse" />
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
