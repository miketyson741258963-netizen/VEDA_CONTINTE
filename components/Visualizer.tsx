
import React, { useState } from 'react';
import { generateVisual } from '../services/geminiService';
import { COLORS } from '../constants';

const Visualizer: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    const result = await generateVisual(prompt);
    if (result) setImageUrl(result);
    setIsGenerating(false);
  };

  return (
    <section id="visualizer" className="py-32 bg-[#F9F9FB]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-5/12 space-y-12">
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.6em] text-[#D4AF37]">Innovation</h2>
              <h3 className="text-5xl font-serif leading-tight">
                Architectural <br/> AI Visualization.
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Experience your vision before the first brick is laid. Describe your dream aesthetic, and our AI Studio will generate a high-fidelity rendering of your future space.
              </p>
            </div>
            
            <div className="space-y-8">
              <textarea
                className="w-full p-8 bg-white border border-gray-100 focus:border-[#D4AF37] outline-none transition-all text-sm font-light h-40 resize-none rounded-xl shadow-sm"
                placeholder="Describe your mood (e.g. A serene Japanese-inspired bedroom with oak wood flooring, large floor-to-ceiling windows overlooking a rain-kissed garden...)"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="group flex items-center space-x-8 text-[11px] font-bold uppercase tracking-[0.5em] disabled:opacity-40 transition-all"
              >
                <span>{isGenerating ? "Rendering Vision..." : "Generate Preview"}</span>
                <div className="w-16 h-px bg-black group-hover:w-32 transition-all duration-700"></div>
              </button>
            </div>
          </div>

          <div className="lg:w-7/12 w-full">
            <div className="relative aspect-[16/10] bg-white overflow-hidden rounded-3xl shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] border border-gray-50 group">
              {imageUrl ? (
                <img src={imageUrl} alt="AI Concept" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-200 p-12 text-center">
                   <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent mb-8"></div>
                   <p className="font-serif italic text-3xl text-gray-300">Awaiting Your Inspiration</p>
                   <p className="text-[10px] uppercase tracking-widest mt-4">AI Studio Powered by VEDA</p>
                </div>
              )}
              {isGenerating && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                   <div className="flex flex-col items-center space-y-4">
                     <div className="w-12 h-12 border-t-2 border-[#D4AF37] rounded-full animate-spin"></div>
                     <span className="text-[10px] font-bold uppercase tracking-widest animate-pulse">Processing Pixels</span>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualizer;
