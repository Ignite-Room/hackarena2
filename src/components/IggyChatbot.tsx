import { useState, useRef, useEffect, type FC } from "react";

// Use environment variable for the API key in production
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_MODEL = "llama-3.3-70b-versatile";

const SYSTEM_PROMPT = `You are Iggy 🔥, the official AI assistant for HackArena 2.0 — the flagship hackathon of Ignite Room. You have a fun, energetic, Gen-Z personality. Keep responses concise (2-4 sentences max unless asked for details). Use emojis sparingly but effectively.

Here is everything you know about HackArena 2.0:

HackArena 2.0 is the flagship hackathon of Ignite Room, bringing together student innovators, developers, and builders from across India. Theme: Generative & Agentic AI.

COMPETITION STRUCTURE:
Stage 1 - Zonal Rounds: Regional hackathons across 6 cities.
- Delhi: 12th April (Regs Closed), Location: Master Union, Gurgaon
- Chandigarh: 26th April (Regs Live)
- Mumbai: 9th May (Regs Live)
- Hyderabad: 23rd May (Regs Live)
- Bangalore: 6th June (Regs Live)
- Kolkata: 13th June (Regs Live)

Process: PPT submission → Shortlisting → 8-hour zonal hackathon → Top 10-12 teams advance.

Stage 2 - Grand Finale in Delhi: 24-hour hackathon, last week of June.

PRIZE POOL: ₹20 Lakhs+ total. Cash Prize: ₹1,00,000. Additional sponsor prizes TBA.

RULES:
- Teams can participate in only ONE zonal round
- Participating in multiple zonals = immediate disqualification
- If one member participates with another team, BOTH teams disqualified

LOGISTICS:
- Travel NOT reimbursed for zonals or finale
- Grand Finale: Accommodation + food provided during hackathon
- Personal expenses borne by participants

REGISTRATION: Via Unstop platform at https://unstop.com/college-fests/hackarena-20-indraprastha-institute-of-information-technology-iiit-delhi-446261

WHY PARTICIPATE: Build AI solutions, compete nationally, mentorship, showcase to judges, prizes, recognition.

If someone asks something you don't know about HackArena 2.0, say you'll get back to them and suggest they email admin@igniteroom.in.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const IggyChatbot: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey there! 🔥 I'm Iggy, your HackArena 2.0 assistant. Ask me anything about the hackathon — dates, cities, rules, prizes, or registration!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: userMessage.content },
          ],
          temperature: 0.7,
          max_tokens: 512,
        }),
      });

      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Hmm, something glitched. Try again! 🔄";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection lost to the arena servers. Try again in a moment! ⚡" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-600 to-fuchsia-800 text-white flex items-center justify-center shadow-[0_0_30px_rgba(232,121,249,0.5)] hover:shadow-[0_0_50px_rgba(232,121,249,0.7)] hover:scale-110 transition-all duration-300 cursor-pointer group"
        aria-label="Open Iggy chatbot"
        id="iggy-fab"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <img src={`${baseUrl}images/6110f78c98c92.png`} alt="Iggy" className="w-12 h-12 rounded-full object-cover" />
        )}
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping bg-fuchsia-500/30 pointer-events-none" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-[9999] w-[380px] max-w-[calc(100vw-48px)] rounded-lg overflow-hidden border border-fuchsia-500/40 shadow-[0_0_40px_rgba(232,121,249,0.2)] flex flex-col"
          style={{ height: "520px", backdropFilter: "blur(20px)" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-fuchsia-900/90 to-fuchsia-800/90 px-5 py-4 flex items-center gap-3 border-b border-fuchsia-500/30">
            <div className="relative">
              <img src={`${baseUrl}images/6110f78c98c92.png`} alt="Iggy" className="w-10 h-10 rounded-full object-cover border-2 border-fuchsia-400" />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-fuchsia-900" />
            </div>
            <div className="flex-1">
              <h3 className="font-headline font-bold text-white text-sm tracking-wide">IGGY 🔥</h3>
              <p className="text-fuchsia-300 text-[10px] font-mono uppercase tracking-widest">HackArena 2.0 Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-fuchsia-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/80" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(232,121,249,0.3) transparent" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-fuchsia-600/30 text-fuchsia-100 rounded-2xl rounded-br-sm border border-fuchsia-500/30"
                      : "bg-surface-container-high text-zinc-200 rounded-2xl rounded-bl-sm border border-zinc-700/50"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface-container-high text-zinc-400 rounded-2xl rounded-bl-sm border border-zinc-700/50 px-4 py-3 flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 bg-black/60 flex gap-2 flex-wrap border-t border-zinc-800/50">
              {["📅 Zonal dates", "💰 Prize pool", "📝 How to register", "📋 Rules"].map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q);
                    setTimeout(() => {
                      setInput(q);
                      sendMessage();
                    }, 50);
                  }}
                  className="text-[11px] px-3 py-1.5 bg-fuchsia-900/40 text-fuchsia-300 rounded-full border border-fuchsia-500/20 hover:bg-fuchsia-800/50 hover:border-fuchsia-400/40 transition-all cursor-pointer font-mono"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-black/90 border-t border-fuchsia-500/20 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask Iggy anything..."
              className="flex-1 bg-surface-container-high/80 text-white text-sm px-4 py-3 rounded-lg border border-zinc-700/50 focus:border-fuchsia-500/50 focus:outline-none placeholder:text-zinc-500 font-body"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="px-4 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
