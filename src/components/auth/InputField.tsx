import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
}

export default function InputField({ label, icon, ...props }: Props) {
  return (
    <div>
      <label className="block text-sm text-[rgba(255,255,255,0.68)] mb-2">{label}</label>
      <div className="relative">
        <input
          {...props}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#67a7ff]/50 focus:outline-none focus:ring-2 focus:ring-[#67a7ff]/20 transition"
        />
        <div className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none">{icon}</div>
      </div>
    </div>
  );
}
