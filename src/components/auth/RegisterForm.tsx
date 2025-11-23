import type { FormEvent } from "react";
import InputField from "./InputField";
import { MailIcon, LockIcon, UserIcon } from "../icons";

interface Props {
  onCancel: () => void;
}

export default function RegisterForm({ onCancel }: Props) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Register submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField label="Full Name" type="text" placeholder="John Doe" icon={<UserIcon />} required />
      <InputField label="Email" type="email" placeholder="you@example.com" icon={<MailIcon />} required />
      <InputField label="Password" type="password" placeholder="At least 8 characters" icon={<LockIcon />} required />
      <div className="flex gap-3 pt-3">
        <button
          type="submit"
          className="px-8 py-3 bg-linear-to-b from-[#67a7ff] to-[#2f7be6] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition">
          Create account
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-3 text-gray-400 border border-white/10 rounded-xl hover:bg-white/5 transition">
          Cancel
        </button>
      </div>
    </form>
  );
}
