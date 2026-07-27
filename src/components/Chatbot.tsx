import { motion } from "framer-motion";
import { Bot } from "lucide-react";
import { useEffect, useState } from "react";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const prompts = [
  "Tell me about your projects",
  "What are your skills?",
  "Show your certifications",
  "How can I contact you?",
];

function useTyping(text: string, speed = 80) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput("");
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));
      if (index >= text.length) window.clearInterval(id);
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return output;
}

function getBotReply(message: string) {
  const msg = message.toLowerCase();

  if (msg.includes("skill")) {
    return "Vrushabh is skilled in Python, SQL, Power BI, Excel, Pandas, NumPy, data visualization, and machine learning fundamentals.";
  }
  if (msg.includes("project")) {
    return "Vrushabh has worked on DeepTrade stock prediction, Global EV Market Insight Dashboard, IPL Data Analysis, and business analytics dashboards.";
  }
  if (msg.includes("education")) {
    return "Vrushabh is pursuing B.Tech in Computer Science Engineering at Sandip University, Nashik.";
  }
  if (msg.includes("certification") || msg.includes("certificate")) {
    return "Vrushabh has certifications from Microsoft Learn, Cisco Networking Academy, TechnoHacks, Codec Technologies, Coding Seekho, and Profound Edutech.";
  }
  if (msg.includes("contact") || msg.includes("email") || msg.includes("linkedin")) {
    return "You can contact Vrushabh by email, GitHub, LinkedIn, or the contact form near the bottom of the site.";
  }

  return "I am here to help you know more about Vrushabh's analytics, BI, Python, and project work.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I am Vrushabh's AI assistant🚀." },
  ]);
  const [input, setInput] = useState("");
  const typed = useTyping("Hi, I'm Vrushabh's  AI Assistant👋", 80);

  const sendMessage = (value = input) => {
    const clean = value.trim();
    if (!clean) return;

    setMessages((current) => [
      ...current,
      { role: "user", content: clean },
      { role: "assistant", content: getBotReply(clean) },
    ]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[calc(100%-2rem)] items-center gap-3 sm:bottom-6 sm:right-6">
      {!open ? (
        <div className="hidden whitespace-nowrap rounded-full border border-cyan-400/30 bg-black/70 px-4 py-2 text-sm text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.3)] backdrop-blur sm:block">
          {typed}
          <span className="ml-0.5 inline-block h-3 w-[2px] animate-pulse bg-cyan-300 align-middle" />
        </div>
      ) : null}

      <motion.button
        type="button"
        onClick={() => setOpen((current) => !current)}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-white shadow-[0_0_40px_cyan] sm:h-20 sm:w-20"
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
      >
        <Bot className="h-9 w-9 sm:h-11 sm:w-11" />
      </motion.button>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-20 right-0 flex h-[min(550px,calc(100vh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-cyan-400 bg-black/90 backdrop-blur-xl sm:bottom-24"
        >
          <div className="bg-cyan-500 px-6 py-4 font-bold text-black">AI Portfolio Assistant</div>
          <div className="border-b border-white/10 px-4 py-3">
            <p className="mb-2 text-xs text-cyan-300/70">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-cyan-400/30 px-3 py-1 text-xs text-cyan-300 transition hover:bg-cyan-400/10"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
          <div className="no-scrollbar flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "rounded-2xl bg-cyan-500/20 p-3 text-white" : "rounded-2xl bg-purple-500/20 p-3 text-white"}>
                {message.content}
              </div>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-white/10 p-4"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask something..."
              className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none"
            />
            <button type="submit" className="rounded-2xl bg-cyan-500 px-5 font-bold text-black hover:shadow-[0_0_20px_cyan]">
              Send
            </button>
          </form>
        </motion.div>
      ) : null}
    </div>
  );
}
