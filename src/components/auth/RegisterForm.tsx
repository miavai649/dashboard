import type { FormEvent } from "react";
import InputField from "./InputField";
import { MailIcon, LockIcon, UserIcon } from "../icons";
import toast from "react-hot-toast";

interface Props {
  onCancel: () => void;
}

export default function RegisterForm({ onCancel }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Register Form Data:", data);

    fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.message || "Registration failed");
      });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField label="Full Name" type="text" placeholder="John Doe" icon={<UserIcon />} required name="name" />
      <InputField label="Email" type="email" placeholder="you@example.com" icon={<MailIcon />} required name="email" />
      <InputField label="Password" type="password" placeholder="Enter your password" icon={<LockIcon />} required name="password" />
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
