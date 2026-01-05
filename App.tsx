
import React from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Visualizer from './components/Visualizer';
import { COLORS, SERVICES, PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-[#D4AF37] selection:text-white">
      <Navbar />

      {/* Floating Action Menu - D'Life Style Vertical CTAs */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex-col space-y-px">
        <a href="#contact" className="bg-[#1B4332] text-white px-5 py-10 flex items-center justify-center font-bold uppercase text-[10px] tracking-[0.3em] shadow-xl hover:bg-[#143225] transition-all rounded-l-2xl border-b border-white/10 group">
           <span className="sticky-cta-bar group-hover:tracking-[0.4em] transition-all">Free Quote</span>
        </a>
        <a href="https://wa.me/919999900000" target="_blank" rel="noreferrer" className="bg-white text-[#25D366] px-5 py-10 flex items-center justify-center font-bold uppercase text-[10px] tracking-[0.3em] shadow-xl hover:bg-gray-50 transition-all rounded-l-2xl group">
           <span className="sticky-cta-bar group-hover:tracking-[0.4em] transition-all">WhatsApp</span>
        </a>
      </div>

      <main>
        {/* Hero Section - High-Impact Narrative */}
        <section id="home" className="relative h-screen flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=1920" 
              alt="Luxury Interior Masterpiece" 
              className="w-full h-full object-cover opacity-70 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl animate-fade-in">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-px bg-[#D4AF37]"></div>
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.6em]">Premium Home Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-[100px] font-serif text-white leading-[0.9] mb-12">
                Designed to <br/> 
                <span className="italic font-light text-[#D4AF37]">Inspire</span>.
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed mb-12">
                India's most trusted partner for turnkey house construction and bespoke luxury interiors. Transparency. Quality. Perfection.
              </p>
              
              <div className="flex flex-wrap gap-6 pt-4">
                <a href="#contact" className="px-12 py-5 bg-[#D4AF37] text-white font-bold uppercase text-[11px] tracking-[0.4em] btn-premium shadow-2xl">
                  Get Free Estimate
                </a>
                <a href="#projects" className="px-12 py-5 bg-white text-black font-bold uppercase text-[11px] tracking-[0.4em] hover:bg-gray-100 transition-all shadow-2xl">
                  Recent Handovers
                </a>
              </div>
            </div>
          </div>
          
          {/* Scroll Anchor */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-40">
            <span className="text-white text-[9px] uppercase tracking-[0.5em] [writing-mode:vertical-rl]">Explore</span>
            <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </section>

        {/* Trust & Metrics Section */}
        <section className="py-16 bg-white border-b border-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center text-center">
              {[
                { label: "Years Experience", value: "12+", icon: "🏆" },
                { label: "Projects Completed", value: "850+", icon: "✨" },
                { label: "Service Cities", value: "08", icon: "🏙️" },
                { label: "Year Warranty", value: "10", icon: "🛡️" }
              ].map((m, i) => (
                <div key={i} className="space-y-3 group cursor-default">
                  <div className="text-3xl mb-1 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110">{m.icon}</div>
                  <p className="text-4xl font-serif font-bold text-black">{m.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services - Grid Overlays */}
        <section id="services" className="py-32 bg-[#F9F9FB]">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
              <div className="space-y-6 max-w-2xl">
                <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-[#D4AF37]">Expertise</h2>
                <h3 className="text-5xl md:text-6xl font-serif">Comprehensive Solutions <br/> for Modern Living.</h3>
              </div>
              <p className="text-gray-500 max-w-sm font-light leading-relaxed">
                From structural engineering to the finest interior finishes, VEDA delivers excellence at every stage.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {SERVICES.map((s) => (
                <div key={s.id} className="luxury-card group relative h-[450px] overflow-hidden rounded-2xl bg-black">
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12 text-white">
                    <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.4em] mb-4 block">{s.icon}</span>
                    <h4 className="text-3xl font-serif mb-4">{s.title}</h4>
                    <p className="text-gray-300 text-sm font-light max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{s.description}</p>
                    <div className="mt-8">
                      <a href="#contact" className="text-[10px] font-black uppercase tracking-[0.5em] border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">Start Project</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - High Polish Timeline */}
        <section id="process" className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
               <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-[#D4AF37]">The VEDA Journey</h2>
               <h3 className="text-5xl font-serif">A Process Built on Precision.</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-12 relative">
               {[
                 { t: "Consultation", d: "Deep dive into your needs and site analysis.", n: "01" },
                 { t: "3D Design", d: "Bespoke renders and material selection.", n: "02" },
                 { t: "Execution", d: "Rigorous quality control on the field.", n: "03" },
                 { t: "Handover", d: "Deep cleaning and key handover ceremony.", n: "04" }
               ].map((step, i) => (
                 <div key={i} className="group relative z-10 space-y-6">
                   <div className="w-16 h-16 rounded-full bg-[#F9F9FB] border border-gray-100 flex items-center justify-center text-xl font-bold group-hover:bg-black group-hover:text-white transition-all duration-500">
                     {step.n}
                   </div>
                   <h4 className="text-xl font-bold uppercase tracking-widest">{step.t}</h4>
                   <p className="text-gray-400 text-sm font-light leading-relaxed">{step.d}</p>
                 </div>
               ))}
               <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-gray-100 -z-0"></div>
            </div>
          </div>
        </section>

        <Visualizer />

        {/* Portfolio - Stylized Grid */}
        <section id="projects" className="py-32 bg-black text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="space-y-4">
                <h3 className="text-5xl md:text-7xl font-serif">Inspiration <br/> Gallery.</h3>
                <div className="w-24 h-1 bg-[#D4AF37]"></div>
              </div>
              <p className="text-gray-400 max-w-xs font-light text-sm">Every project we handover is a testament to our dedication to architectural beauty.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
              {PROJECTS.map((p, i) => (
                <div key={p.id} className={`group cursor-pointer ${i % 2 === 1 ? 'md:mt-32' : ''}`}>
                  <div className="overflow-hidden aspect-[16/10] rounded-3xl relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="px-8 py-3 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-full">Explore Project</span>
                    </div>
                  </div>
                  <div className="mt-8 space-y-2">
                    <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em]">{p.category}</span>
                    <h4 className="text-3xl font-serif">{p.title}</h4>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-32 text-center">
              <button className="px-16 py-6 border border-white/20 rounded-full font-bold uppercase text-[11px] tracking-[0.5em] hover:bg-white hover:text-black transition-all">
                View All Handovers
              </button>
            </div>
          </div>
        </section>

        {/* High-End Contact Form */}
        <section id="contact" className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden">
              <div className="lg:w-1/2 p-12 md:p-24 bg-black text-white space-y-12">
                <h3 className="text-5xl font-serif">Schedule a Free <br/> Site Inspection</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Join 500+ families who chose VEDA for their dream home. Our experts will visit your site, provide a 3D walkthrough vision, and a detailed cost estimate with zero hidden fees.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl">📞</div>
                    <p className="text-xl font-light tracking-widest">+91 99999 00000</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl">📍</div>
                    <p className="text-sm font-light uppercase tracking-widest">Road No 36, Jubilee Hills, HYD</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-12 md:p-24 bg-white">
                <form className="space-y-10" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-focus-within:text-[#D4AF37] transition-colors">Full Name</label>
                    <input type="text" className="w-full border-b border-gray-100 py-4 outline-none focus:border-[#D4AF37] transition-all font-light" placeholder="e.g. Vikram Reddy" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Mobile Number</label>
                    <input type="tel" className="w-full border-b border-gray-100 py-4 outline-none focus:border-[#D4AF37] transition-all font-light" placeholder="+91 XXX XXX XXXX" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Property Location</label>
                    <input type="text" className="w-full border-b border-gray-100 py-4 outline-none focus:border-[#D4AF37] transition-all font-light" placeholder="e.g. Gachibowli, Hyderabad" />
                  </div>
                  <button className="w-full py-6 bg-black text-white font-bold uppercase text-[11px] tracking-[0.5em] hover:bg-[#D4AF37] transition-all duration-500 shadow-2xl">
                    Request Free Visit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="py-24 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
             <div className="space-y-8">
               <span className="text-3xl font-serif font-black tracking-[0.4em]">VEDA</span>
               <p className="text-gray-500 text-sm font-light leading-relaxed">Crafting architectural legacies and luxury living spaces since 2012.</p>
             </div>
             <div className="space-y-6">
               <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Design Studios</h5>
               <ul className="space-y-4 text-sm text-gray-400 font-light">
                 <li>Hyderabad - Jubilee Hills</li>
                 <li>Bangalore - Whitefield</li>
                 <li>Chennai - Adyar</li>
                 <li>Vijayawada - Benz Circle</li>
               </ul>
             </div>
             <div className="space-y-6">
               <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Company</h5>
               <ul className="space-y-4 text-sm text-gray-400 font-light">
                 <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                 <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                 <li className="hover:text-white transition-colors cursor-pointer">Project Map</li>
                 <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
               </ul>
             </div>
             <div className="space-y-6">
               <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Connect</h5>
               <ul className="space-y-4 text-sm text-gray-400 font-light">
                 <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
                 <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
                 <li className="hover:text-white transition-colors cursor-pointer">Facebook</li>
                 <li className="hover:text-white transition-colors cursor-pointer">YouTube</li>
               </ul>
             </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600">© {new Date().getFullYear()} VEDA Architectural Studio. All Rights Reserved.</p>
             <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600">Site By LuxuryDigital</p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
