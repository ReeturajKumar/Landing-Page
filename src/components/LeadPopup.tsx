import React, { useState, useEffect } from 'react';

const LeadPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show popup on every reload after a short delay
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-500">
      
      {/* Popup Container: Ultra-Compact & Non-Scrollable */}
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] border border-slate-100 animate-in zoom-in-95 slide-in-from-bottom-8 duration-700">
        
        {/* Close Button: Discreet but accessible */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 w-8 h-8 md:w-11 md:h-11 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all border border-slate-100 z-[110]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header: Tightened Spacing */}
        <div className="mb-4 md:mb-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-orange-50 border border-orange-100 rounded-full mb-1">
            <span className="w-1 h-1 rounded-full bg-[#FF5024] animate-pulse" />
            <span className="text-[7px] md:text-[9px] font-black text-[#FF5024] uppercase tracking-widest">Consultation</span>
          </div>
          <h2 className="text-xl md:text-4xl font-bold tracking-tighter text-slate-900 leading-none">
            Talk to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5024] to-[#F9A01B]">Cloud Consultant</span>
          </h2>
          <p className="text-[11px] md:text-[14px] font-medium text-slate-400 max-w-sm mx-auto leading-tight mt-1">Get your personalized 1:1 roadmap discussion.</p>
        </div>

        {/* Form: Ultra-High Density */}
        <form className="space-y-3 md:space-y-6" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-1">
              <label className="text-[8px] md:text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-tight">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Rahul Sharma" 
                className="w-full px-4 py-2.5 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl text-[12px] font-bold focus:ring-1 focus:ring-[#FF5024] outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[8px] md:text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-tight">Work Email</label>
              <input 
                type="email" 
                required
                placeholder="name@company.com" 
                className="w-full px-4 py-2.5 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl text-[12px] font-bold focus:ring-1 focus:ring-[#FF5024] outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="space-y-1">
              <label className="text-[8px] md:text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-tight">Phone Number</label>
              <div className="flex gap-2">
                <div className="shrink-0 px-3 py-2.5 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl flex items-center justify-center text-[11px] font-black text-slate-400 gap-1.5">
                  <img src="https://flagcdn.com/w40/in.png" alt="India" width={12} height={8} className="w-3 h-auto" loading="lazy" />
                  <span>+91</span>
                </div>
                <input 
                  type="tel" 
                  required
                  placeholder="00000 00000" 
                  className="flex-1 px-4 py-2.5 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl text-[12px] font-bold focus:ring-1 focus:ring-[#FF5024] outline-none transition-all placeholder:text-slate-300"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[8px] md:text-[10px] font-bold text-slate-400 ml-1 uppercase tracking-tight">Inquiry Purpose</label>
              <div className="relative">
                <select required className="w-full px-4 py-2.5 md:py-4 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl text-[12px] font-bold focus:ring-1 focus:ring-[#FF5024] outline-none appearance-none transition-all text-slate-600">
                  <option value="">Select Purpose</option>
                  <option>Career Guidance</option>
                  <option>Interested in DevOps</option>
                  <option>Salary Hike Query</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="pt-2 md:pt-4">
            <button 
              disabled={isLoading}
              className="w-full md:w-3/4 mx-auto py-4 md:py-6 bg-[#FF5024] text-white rounded-xl md:rounded-2xl text-[12px] md:text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-orange-100 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-80"
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
                "Book Free Call Now →"
              )}
            </button>
            <p className="text-[9px] text-slate-300 text-center font-bold mt-3 uppercase tracking-tighter">Seats filling fast for March Cohort</p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LeadPopup;
