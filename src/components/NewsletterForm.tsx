"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client"; // Fixed typo here
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "exists">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    const { error } = await supabase
      .from("newsletter_subscriptions")
      .insert([{ email }]);

    if (error) {
      if (error.message.includes("duplicate") || error.code === "23505") {
        setStatus("exists");
        setMessage("This email is already subscribed.");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } else {
      setStatus("success");
      setMessage("You are in! Check your inbox for updates.");
      setEmail("");
    }
  };

  if (status === "success" || status === "exists") {
    return (
      <div className="bg-accent/10 border border-accent/30 p-5 rounded-sm">
        <div className="flex items-start gap-3">
          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${status === "success" ? "text-green-400" : "text-accent"}`} />
          <div>
            <p className="text-white text-sm font-semibold">
              {status === "success" ? "Successfully Subscribed!" : "Already Subscribed"}
            </p>
            <p className="text-white/60 text-xs mt-1 leading-relaxed">{message}</p>
          </div>
        </div>
      </div> // Added missing closing div
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status !== "idle") setStatus("idle"); }}
          placeholder="Enter your email address"
          className="w-full bg-transparent border border-white/30 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-accent text-primary-dark px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent-light transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0"
        >
          {status === "loading" ? "..." : "Subscribe"}
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-xs mt-3">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {message}
        </div>
      )}
    </form>
  );
}