import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Why Now', href: '#why-now' },
    { name: 'Approach', href: '#approach' },
    { name: 'Roadmap', href: '#curriculum' },
    { name: 'Success Stories', href: '#testimonials' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
      <div 
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled || isOpen ? 'max-w-6xl' : 'max-w-7xl'
        }`}
      >
        <div 
          className={`relative flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isScrolled || isOpen
              ? 'bg-white/95 backdrop-blur-2xl py-3 px-6 sm:px-8 shadow-[0_10px_40px_-15px_rgba(255,80,36,0.1)] rounded-b-2xl mt-0' 
              : 'bg-transparent py-6 px-4 md:px-8'
          }`}
        >
          {/* Logo Section */}
          <div 
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer z-50" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            <div className="relative transition-transform duration-500 group-hover:rotate-[15deg] shrink-0">
              <img 
                src="/logo.png" 
                alt="Cloudblitz Logo" 
                className={`relative object-contain transition-all duration-500 ${isScrolled ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-9 h-9 sm:w-10 sm:h-10'}`} 
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black tracking-tighter bg-gradient-to-r from-[#FF5024] to-[#F9A01B] bg-clip-text text-transparent leading-none transition-all duration-500 ${isScrolled ? 'text-sm sm:text-lg' : 'text-lg sm:text-xl'}`}>
                CLOUDBLITZ
              </span>
              <span className={`uppercase tracking-[0.25em] text-gray-400 font-black mt-0.5 transition-all duration-500 ${isScrolled ? 'text-[6px]' : 'text-[7px] sm:text-[8px]'}`}>
                AI-Native DevOps
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center text-[13px] font-bold text-gray-500 gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative hover:text-[#FF5024] transition-colors py-1 group/link"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5024] transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
            
            <div className="h-5 w-[1px] bg-gray-200/80 mx-2" />
            
            <div className="flex items-center gap-8">
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#FF5024] transition-all group/wa">
                <svg className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.626 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
              <button className="relative group/btn">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5024] to-[#F9A01B] rounded-full blur opacity-40 group-hover/btn:opacity-100 transition duration-500"></div>
                <div className={`relative bg-[#FF5024] hover:bg-[#ff3d0a] text-white font-black rounded-full transition-all transform hover:scale-[1.05] active:scale-95 shadow-lg shadow-orange-200 flex items-center justify-center ${isScrolled ? 'px-6 py-2.5 text-[11px]' : 'px-7 py-3 text-xs'}`}>
                  Book FREE Demo
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Actions (Menu Toggle) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4">
             <a href="https://wa.me/91XXXXXXXXXX" className="p-2.5 text-[#25D366] hover:bg-green-50 rounded-xl transition-colors">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.626 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
             </a>
             <button 
               onClick={() => setIsOpen(!isOpen)}
               className="p-2 text-slate-900 relative z-[70] transition-colors hover:text-[#FF5024]"
             >
               <div className="w-8 h-8 relative flex items-center justify-center">
                 <span className={`absolute h-0.5 transition-all duration-300 ${isOpen ? 'w-7 rotate-45 bg-[#FF5024]' : 'w-6 translate-y-[-6px] bg-slate-900'}`} />
                 <span className={`absolute h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6'}`} />
                 <span className={`absolute h-0.5 transition-all duration-300 ${isOpen ? 'w-7 -rotate-45 bg-[#FF5024]' : 'w-4 translate-y-[6px] bg-slate-900'}`} />
               </div>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/98 backdrop-blur-3xl z-[65] transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-8 sm:px-10 space-y-7">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF5024]">Quick Navigation</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-[#FF5024]"
            >
              Close
            </button>
          </div>
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-black text-slate-900 transition-all duration-500 delay-[${100 + i * 50}ms] ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`mt-auto pb-10 space-y-6 transition-all duration-500 delay-300 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button className="w-full relative group/mob-btn">
               <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5024] to-[#F9A01B] rounded-2xl blur opacity-40"></div>
               <div className="relative w-full bg-[#FF5024] text-white py-5 rounded-2xl text-base font-black uppercase tracking-widest shadow-xl shadow-orange-100">
                  Book FREE Demo Class
               </div>
            </button>
            <p className="text-center text-gray-400 text-xs font-medium">Join 1,500+ Indian IT Professionals</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
