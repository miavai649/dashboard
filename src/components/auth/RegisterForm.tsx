import type { FormEvent } from "react";
import InputField from "./InputField";
import { MailIcon, LockIcon, UserIcon } from "../icons";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../lib/api";
import { toast } from "react-toastify";

type TUserData = {
  name: string;
  email: string;
  password: string;
};

interface IRegisterFormProps {
  onCancel: () => void;
}

export default function RegisterForm({ onCancel }: IRegisterFormProps) {
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success(data?.message || "Registration successful");
      onCancel();
    },
    onError: (error: string) => {
      toast.error(error || "Registration failed", { position: "bottom-center" });
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    mutation.mutate(data as TUserData);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField label="Full Name" type="text" placeholder="John Doe" icon={<UserIcon />} required name="name" />
      <InputField label="Email" type="email" placeholder="you@example.com" icon={<MailIcon />} required name="email" />
      <InputField label="Password" type="password" placeholder="Enter your password" icon={<LockIcon />} required name="password" />
      <div className="flex gap-3 pt-3">
        <button
          type="submit"
          className="px-8 py-3 bg-linear-to-b from-[#67a7ff] to-[#2f7be6] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 cursor-pointer">
          Create account
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-3 text-gray-400 border border-white/10 rounded-xl hover:bg-white/5 transition cursor-pointer">
          Cancel
        </button>
      </div>
    </form>
  );
}
