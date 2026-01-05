
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithVeda = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  const ai = getAIClient();
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are VEDA Assistant, a respectful and helpful AI consultant for VEDA – Construction & Interiors.
    Tone: Polite, respectful (using 'Namaste' or 'Sir/Madam' where appropriate), friendly, and simple English.
    Supported Languages: English, Telugu, Hindi.
    
    Context:
    - VEDA is a leading Indian brand providing House Construction (Independent Houses/Villas), Flat Interiors, and Turnkey Home Projects.
    - Regions: Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, Maharashtra.
    - Values: Trust, Transparency, No Hidden Costs, Family-friendly designs.
    
    Lead Qualification Flow (if they show interest):
    1. Ask for their Name.
    2. Ask for their House Type (Flat / Villa / Independent House).
    3. Ask for the City.
    4. Ask for their Approximate Budget (Ranges: Below ₹10L, ₹10-25L, ₹25-50L, ₹50L+).
    5. Ask for their Mobile Number and preferred callback time.
    
    Crucial Instructions:
    - Always emphasize quality and trust.
    - If asked about prices, provide approximate ranges and suggest a free site visit for an accurate quote.
    - Encourage users to check our "Projects" section to see real Indian homes we've built.
    - Offer to redirect to WhatsApp (+91-9999900000) for instant sharing of catalogs.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.6,
        topP: 0.8,
      }
    });

    return response.text || "I apologize, Sir/Madam. I am having a bit of trouble. Could you please rephrase your question?";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I am sorry for the inconvenience. Please contact our team directly at +91 99999 00000.";
  }
};

export const generateVisual = async (prompt: string) => {
  const ai = getAIClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: `A realistic modern Indian home interior: ${prompt}, warm ambient lighting, premium furniture, magazine-style photography, high quality 4k` }]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Image Generation Error:", error);
  }
  return null;
};
