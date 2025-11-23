// src/components/auth/LoginForm.tsx
import type { FormEvent } from "react";
import InputField from "./InputField";
import { LockIcon, MailIcon } from "../icons";

interface Props {
  onForgot?: () => void;
}

export default function LoginForm({ onForgot }: Props) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField label="Email" type="email" placeholder="you@example.com" icon={<MailIcon />} required />
      <InputField label="Password" type="password" placeholder="••••••••" icon={<LockIcon />} required />
      <div className="flex gap-3 pt-3">
        <button
          type="submit"
          className="px-8 py-3 bg-linear-to-b from-[#67a7ff] to-[#2f7be6] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition">
          Sign in
        </button>
        <button
          type="button"
          onClick={onForgot}
          className="px-5 py-3 text-gray-400 border border-white/10 rounded-xl hover:bg-white/5 transition">
          Forgot?
        </button>
      </div>
    </form>
  );
}
