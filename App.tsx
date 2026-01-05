
import React from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Visualizer from './components/Visualizer';
import { COLORS, SERVICES, PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] md:h-screen flex items-center overflow-hidden scroll-mt-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920" 
            alt="Beautiful Indian Home" 
            className="w-full h-full object-cover brightness-[0.5]"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl md:text-8xl font-serif leading-tight">
              A Home for Every <span style={{ color: COLORS.accent }}>Indian Family</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
              India's most trusted partner for high-quality house construction and beautiful interiors. 
              No hidden costs, only transparent work.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#contact" 
                className="px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-xl flex items-center gap-2"
                style={{ backgroundColor: COLORS.cta }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Book Free Consultation
              </a>
              <a 
                href="https://wa.me/919999900000" 
                target="_blank"
                rel="noreferrer"
                className="px-10 py-4 rounded-full text-lg font-semibold border-2 border-white transition-all hover:bg-white hover:text-black flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-[#1F1F1F] py-8 border-b border-gray-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-300">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🏗️</span>
            <p className="text-sm font-medium">A-Grade Materials</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">📜</span>
            <p className="text-sm font-medium">Clear Legal Paperwork</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🕒</span>
            <p className="text-sm font-medium">On-Time Delivery</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">💰</span>
            <p className="text-sm font-medium">Fixed Pricing</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#FAFAFA] scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" 
                  alt="VEDA Philosophy" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#C9A24D] rounded-3xl -z-0"></div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <h3 className="text-[#C9A24D] font-bold tracking-widest uppercase text-sm">Our Mission</h3>
              <h2 className="text-5xl font-serif">Building Homes with <br/> Values & Integrity</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                For over a decade, VEDA has been the trusted name for families across South India. We understand that a house is not just an investment; it is the sanctuary for your family. We focus on durability, safety, and modern aesthetics using only the best local and global materials.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-4xl font-serif text-[#1F1F1F]">12+</h4>
                  <p className="text-gray-500 text-sm">Years of Experience</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-4xl font-serif text-[#1F1F1F]">100%</h4>
                  <p className="text-gray-500 text-sm">Legal Transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-5xl font-serif">Services for Your Home</h2>
            <div className="w-20 h-1 mx-auto bg-[#C9A24D]"></div>
            <p className="text-gray-500">Simple solutions for construction and interior design under one roof.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(service => (
              <div key={service.id} className="group relative bg-[#FAFAFA] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all p-8 flex flex-col items-center text-center border border-gray-100">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="mt-auto">
                   <a href="#contact" className="px-6 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest transition-all" style={{ backgroundColor: COLORS.cta }}>
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VEDA Section */}
      <section id="why-veda" className="py-24 bg-[#FAFAFA] scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h3 className="text-[#C9A24D] font-bold tracking-widest uppercase text-sm">The VEDA Advantage</h3>
              <h2 className="text-5xl font-serif">Why Families <br/> Trust Us</h2>
              <div className="space-y-6">
                {[
                  { title: "No Hidden Costs", desc: "Our initial quote is what you pay. No surprises midway." },
                  { title: "Material Check", desc: "Live tracking of construction materials used on your site." },
                  { title: "Vastu Compliant", desc: "All our designs respect traditional Vastu principles for prosperity." },
                  { title: "Lifetime Support", desc: "Post-handover support for plumbing, electrical, and structural needs." }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D6C4A1] flex items-center justify-center text-[#1F1F1F] font-bold text-lg">{idx + 1}</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1590608897129-79da98d15969?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl" alt="Trust and Quality" />
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-4xl">⭐</div>
                    <div>
                      <h5 className="font-bold">4.9/5 Rating</h5>
                      <p className="text-xs text-gray-500">on Google Business</p>
                    </div>
                  </div>
                  <p className="text-sm italic text-gray-600">"VEDA made our home building journey stress-free. Very professional team!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Visualizer Section */}
      <Visualizer />

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#1F1F1F] text-white overflow-hidden scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-5xl font-serif">Our Recent Projects</h2>
              <p className="text-gray-400 max-w-md">Real photos of homes we have built and designed across South India.</p>
            </div>
            <button className="px-8 py-3 rounded-full border border-[#C9A24D] text-[#C9A24D] font-bold hover:bg-[#C9A24D] hover:text-white transition-all">See Full Portfolio</button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.map(project => (
              <div key={project.id} className="group relative overflow-hidden rounded-[2.5rem] aspect-[16/10] cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] font-bold">{project.category}</span>
                  <h3 className="text-3xl font-serif mt-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 text-center lg:text-left">
          <div className="bg-[#D6C4A1] rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-5xl font-serif text-[#1F1F1F]">Let's Build Your <br/> Dream Home Together</h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  Fill in the form or contact us via WhatsApp to get a free site visit and cost estimate for your project.
                </p>
                <div className="flex flex-col space-y-4">
                  <a href="tel:+919999900000" className="flex items-center justify-center lg:justify-start space-x-4 group bg-[#1F1F1F] text-white p-4 rounded-2xl w-full lg:w-max shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7.59 1 1 0 011 1V20a1 1 0 01-1 1A15 15 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.27 1.11l-2.2 2.2z"/></svg>
                    <span className="font-bold text-xl">Call: +91 99999 00000</span>
                  </a>
                  <a href="https://wa.me/919999900000" className="flex items-center justify-center lg:justify-start space-x-4 group bg-[#1E7F63] text-white p-4 rounded-2xl w-full lg:w-max shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.607 6.04L0 24l6.117-1.605a11.77 11.77 0 005.925 1.585h.005c6.635 0 12.03-5.395 12.033-12.032a11.75 11.75 0 00-3.417-8.481"/></svg>
                    <span className="font-bold text-xl">WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
              <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl space-y-4">
                  <h4 className="text-2xl font-serif text-center mb-6">Quick Enquiry</h4>
                  <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-[#C9A24D] outline-none" />
                  <input type="tel" placeholder="Mobile Number" className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 focus:ring-2 focus:ring-[#C9A24D] outline-none" />
                  <select className="w-full p-4 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 focus:ring-2 focus:ring-[#C9A24D] outline-none">
                    <option>Interested in...</option>
                    <option>Independent House Construction</option>
                    <option>Villa Construction</option>
                    <option>Home Interiors (Flat/Villa)</option>
                    <option>Commercial Design</option>
                  </select>
                  <button className="w-full py-5 rounded-xl text-white font-bold text-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-lg" style={{ backgroundColor: COLORS.cta }}>Book My Free Site Visit</button>
                  <p className="text-[10px] text-center text-gray-400 mt-4">We value your privacy. Your data is safe with VEDA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#1F1F1F] text-white border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <span className="text-3xl font-serif font-bold tracking-widest">VEDA</span>
              <p className="text-gray-400 text-sm leading-relaxed">
                India's most reliable brand for high-quality house construction and elegant interiors. Building for your family's future.
              </p>
              <div className="flex space-x-4">
                {['ig', 'fb', 'yt', 'li'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#C9A24D] hover:border-transparent transition-all group">
                    <span className="text-xs uppercase font-bold text-gray-400 group-hover:text-white">{social}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-[#C9A24D] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#C9A24D] transition-colors">About VEDA</a></li>
                <li><a href="#services" className="hover:text-[#C9A24D] transition-colors">Our Services</a></li>
                <li><a href="#projects" className="hover:text-[#C9A24D] transition-colors">Real Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Our Expertise</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#C9A24D] transition-colors">House Construction</a></li>
                <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Apartment Interiors</a></li>
                <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Villa Interiors</a></li>
                <li><a href="#" className="hover:text-[#C9A24D] transition-colors">Commercial Fit-outs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Us</h4>
              <p className="text-gray-400 text-sm mb-4">
                101, Luxury Arcade, Jubilee Hills, <br/>
                Hyderabad, Telangana 500033
              </p>
              <p className="text-[#C9A24D] font-bold">Bangalore • Chennai • Pune</p>
              <p className="mt-4 text-gray-400 text-sm">Support: +91 99999 00000</p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} VEDA Construction & Interiors. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
