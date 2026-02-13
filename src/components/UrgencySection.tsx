import React, { useState, useEffect } from 'react';

const UrgencySection: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-02-25T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const urgencyPoints = [
    {
      text: "67% seats booked (17/25)",
      svg: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      text: "Last cohort filled early",
      svg: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-8 bg-white overflow-hidden">
      {/* Abstract Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="relative group">
           {/* Decorative Border Glow */}
           <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-100 via-[#FF5024]/10 to-orange-100 rounded-[2.5rem] blur-lg opacity-40 group-hover:opacity-70 transition duration-1000" />
           
           <div className="relative flex flex-col lg:flex-row bg-white rounded-[2.2rem] border border-slate-100 shadow-xl overflow-hidden">
              
              {/* Left Column: Visual Seat Counter */}
              <div className="lg:w-[320px] p-8 bg-slate-50/50 flex flex-col justify-between border-r border-slate-100">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-slate-100 rounded-lg shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF5024] animate-pulse" />
                    <span className="text-[10px] font-bold tracking-tight text-[#FF5024]">Batch 2.25</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-bold text-slate-900 leading-none tracking-tighter">08</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-1.5">Seats left</span>
                    </div>
                    {/* Visual Progress Track */}
                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden flex">
                      <div className="h-full bg-[#FF5024] transition-all duration-1000 shadow-[0_0_8px_rgba(255,80,36,0.4)]" style={{ width: '68%' }} />
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 tracking-tight">Only 8 spots remaining for this cohort</p>
                  </div>
                </div>

                <div className="space-y-3 pt-8 mt-auto">
                  {urgencyPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-[#FF5024] shadow-sm">
                        {point.svg}
                      </div>
                      <span className="text-[11px] font-bold text-slate-600">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Main Pressure & Timer */}
              <div className="flex-1 p-8 md:p-10 relative overflow-hidden flex flex-col justify-center">

                <div className="max-w-xl space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-900 leading-none">
                      Stop waiting. <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] to-[#F9A01B]">Start building your future.</span>
                    </h2>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-md">
                      Batch starts <span className="text-slate-900 font-bold">February 25th.</span> Missing this cohort means 6 weeks of lost career growth.
                    </p>
                  </div>

                  {/* Countdown Dashboard */}
                  <div className="grid grid-cols-4 gap-3 max-w-sm">
                    {[
                      { l: 'Days', v: timeLeft.days },
                      { l: 'Hrs', v: timeLeft.hours },
                      { l: 'Min', v: timeLeft.minutes },
                      { l: 'Sec', v: timeLeft.seconds }
                    ].map((t, i) => (
                      <div key={i} className="space-y-1.5">
                        <div className="relative group/timer transition-transform hover:-translate-y-0.5">
                          <div className="bg-slate-50 border border-slate-100 rounded-xl py-3 flex flex-col items-center shadow-sm">
                            <span className="text-2xl font-bold text-slate-900 tabular-nums leading-none tracking-tighter">{t.v.toString().padStart(2, '0')}</span>
                          </div>
                        </div>
                        <span className="block text-[9px] font-bold tracking-tight text-[#FF5024] text-center">{t.l}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                    <button className="w-full sm:w-auto bg-[#FF5024] hover:bg-[#E4451D] text-white py-4 px-10 rounded-xl text-[11px] font-bold tracking-tight transition-all hover:shadow-xl hover:shadow-orange-200 active:scale-95">
                      Reserve my seat now
                    </button>
                    <div className="flex items-center gap-3 border-l border-slate-100 pl-6 h-10">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 tracking-tight leading-none italic">Last 3 batches</span>
                        <span className="text-xs font-bold text-slate-900 mt-1">Sold out early</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default UrgencySection;
