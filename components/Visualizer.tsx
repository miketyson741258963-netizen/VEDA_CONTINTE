
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
    <section id="visualizer" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl font-serif leading-tight">
              Visualize Your <span style={{ color: COLORS.accent }}>Dream Space</span> Instantly
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the power of VEDA's AI engine. Describe the room of your dreams, and our system will generate a luxury visualization for you.
            </p>
            
            <div className="space-y-4">
              <textarea
                className="w-full p-6 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent outline-none transition-all shadow-inner bg-gray-50"
                rows={3}
                placeholder="e.g., A minimalist master bedroom with floor-to-ceiling windows, oak wood accents, and warm sunset lighting..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full py-4 rounded-xl text-white font-bold flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50"
                style={{ backgroundColor: COLORS.cta }}
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Generating your vision...</span>
                  </>
                ) : (
                  <span>Visualize Now</span>
                )}
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 border-8 border-white relative group">
              {imageUrl ? (
                <img src={imageUrl} alt="AI Generated Concept" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-12 text-center">
                  <div className="w-20 h-20 mb-4 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-4xl">✨</div>
                  <p className="font-serif italic text-xl">Your luxury concept will appear here</p>
                </div>
              )}
            </div>
            
            {/* Decor Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D6C4A1] opacity-20 rounded-full -z-10 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#C9A24D] opacity-10 rounded-full -z-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visualizer;
