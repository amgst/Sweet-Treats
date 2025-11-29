import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { getAIRecommendation } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse('');
    
    try {
      const result = await getAIRecommendation(query);
      setResponse(result);
    } catch (err) {
      setResponse("Oops! I had a little brain freeze. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-md border border-indigo-100">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-6 w-6 text-indigo-500" />
        <h3 className="text-lg font-semibold text-slate-800">Gemini AI Event Assistant</h3>
      </div>
      <p className="text-slate-600 mb-4 text-sm">
        Not sure what you need? Describe your event (e.g., "Kids birthday for 20 with allergies") and let our AI suggest a package!
      </p>

      <form onSubmit={handleAsk} className="relative mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Describe your event here..."
          className="w-full pl-4 pr-12 py-3 rounded-xl border border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="absolute right-2 top-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
        >
          {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        </button>
      </form>

      {response && (
        <div className="bg-white p-4 rounded-xl border border-indigo-100 text-slate-700 text-sm leading-relaxed animate-fade-in">
          <p className="font-medium text-indigo-600 mb-1">Recommendation:</p>
          {response}
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
