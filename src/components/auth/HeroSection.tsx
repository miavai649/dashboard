import { useState, useEffect } from "react";
import { Logo } from "../icons";

const quotes = [
  "Keep pushing — small steps win races.",
  "One more push. You’ve got this.",
  "Learn fast. Ship faster.",
  "Progress > Perfection."
];

export default function HeroSection() {
  const [quote, setQuote] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const text = quotes[i % quotes.length];
      setQuote(isDeleting ? text.substring(0, charIndex--) : text.substring(0, charIndex++));

      if (!isDeleting && charIndex === text.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      }
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        i++;
      }

      setTimeout(type, isDeleting ? 30 : 60);
    };

    const timer = setTimeout(type, 800);
    const cursor = setInterval(() => setCursorVisible((v) => !v), 500);

    return () => {
      clearTimeout(timer);
      clearInterval(cursor);
    };
  }, []);

  return (
    <section className="p-8 md:p-12 flex flex-col justify-center gap-6 text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-3 text-3xl font-bold text-primary-300">
        <Logo />
        <span>Challenge</span>
      </div>
      <div className="text-sm text-[rgba(255,255,255,0.68)] min-h-10 font-light">
        <span>{quote}</span>
        <span className={`cursor ${cursorVisible ? "opacity-90" : "opacity-0"}`}>|</span>
      </div>
      <p className="text-[rgba(255,255,255,0.68)] max-w-sm text-sm leading-relaxed">
        Sign in or create your Challenge account to continue.
      </p>
    </section>
  );
}
