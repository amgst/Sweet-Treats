import { GoogleGenAI } from "@google/genai";
import { SERVICES, PACKAGES } from '../constants';

// Initialize Gemini
// Note: In a real production app, ensure this is handled securely.
// For this demo, we assume the environment variable is available.
const apiKey = process.env.API_KEY || ''; 

let ai: GoogleGenAI | null = null;
if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
}

export const getAIRecommendation = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I cannot connect to the AI assistant right now. Please contact us directly for recommendations!";
  }

  const context = `
    You are a helpful event planning assistant for "SweetTreats & Events Hub".
    
    Here are our available services:
    ${JSON.stringify(SERVICES.map(s => ({ title: s.title, category: s.category, price: s.priceStart })))}
    
    Here are our pre-defined packages:
    ${JSON.stringify(PACKAGES)}

    The user is asking for help planning an event.
    Based on their query, recommend specific services or packages we offer. 
    Be friendly, enthusiastic, and keep the answer under 100 words.
    If they ask about something we don't clearly offer, suggest they contact us for a custom quote.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Context: ${context}\n\nUser Query: ${userQuery}`,
    });
    
    return response.text || "I couldn't generate a specific recommendation, but our team would love to help!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble thinking right now. Please check out our Packages page!";
  }
};
