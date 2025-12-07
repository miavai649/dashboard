import { useMutation } from "@tanstack/react-query";
import CustomForm from "../form/CustomForm";
import InputField from "../form/InputField";
import { MailIcon, LockIcon, UserIcon } from "../icons";
import type { FieldValues, SubmitHandler } from "react-hook-form";
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
      toast.error(error || "Registration failed");
    }
  });

  const handleRegisterUser: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate(data as TUserData);
  };

  return (
    <CustomForm onSubmit={handleRegisterUser}>
      <div className="space-y-5">
        <InputField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          icon={<UserIcon />}
          rules={{ required: "Name is required" }}
          name="name"
        />
        <InputField
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={<MailIcon />}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email"
            }
          }}
          name="email"
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<LockIcon />}
          rules={{ required: "Password is required" }}
          name="password"
        />
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
      </div>
    </CustomForm>
  );
}
