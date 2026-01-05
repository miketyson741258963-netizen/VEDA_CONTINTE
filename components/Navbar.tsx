
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Robust Intersection Observer for active section tracking
    const observerOptions: IntersectionObserverInit = {
      root: null,
      // Focus on the top part of the screen where the section starts to be "current"
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Track all sections including contact for highlight logic
    const sectionIds = [...navLinks.map(link => link.href.replace('#', '')), 'contact'];
    
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-1000 ${isScrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-2xl md:text-3xl font-serif font-black tracking-[0.4em] transition-all duration-700 hover:text-[#D4AF37]"
          style={{ color: isScrolled ? COLORS.primary : '#FFFFFF' }}
        >
          VEDA
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-14">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[10px] font-bold uppercase tracking-[0.5em] transition-all duration-300 relative group`}
                style={{ color: isActive ? '#D4AF37' : (isScrolled ? COLORS.primary : '#FFFFFF') }}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-2 left-0 h-px bg-[#D4AF37] transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`px-12 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-700 shadow-xl ${activeSection === 'contact' ? 'bg-[#D4AF37] text-white' : (isScrolled ? 'bg-black text-white hover:bg-[#D4AF37]' : 'bg-white text-black hover:bg-[#D4AF37] hover:text-white')}`}
          >
            Connect
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 group" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: isScrolled ? COLORS.primary : '#FFFFFF' }}
        >
          <div className="flex flex-col space-y-1.5 w-8">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black z-[110] transition-all duration-1000 flex flex-col justify-center items-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-full'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-white p-4">
           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="flex flex-col space-y-12 text-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-5xl font-serif transition-colors ${isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className={`text-xl font-bold uppercase tracking-[0.5em] transition-colors ${activeSection === 'contact' ? 'text-white' : 'text-[#D4AF37]'}`}
          >
            Get a Quote
          </a>
        </div>
        <div className="absolute bottom-10 text-gray-600 text-[10px] uppercase tracking-widest">
           © VEDA Design Studio
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
