import InputField from "../form/InputField";
import { LockIcon, MailIcon } from "../icons";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../lib/api";
import { toast } from "react-toastify";
import CustomForm from "../form/CustomForm";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../hook/useAuth";
import { useNavigate } from "react-router";

interface Props {
  onForgot?: () => void;
}

type TLoginData = {
  email: string;
  password: string;
};

export default function LoginForm({ onForgot }: Props) {
  const navigate = useNavigate();
  const { login } = useAuth();

  // Mutation for user login
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      toast.success(response?.message || "Login successful");
      login({ name: response?.data?.name, email: response?.data?.email });
      navigate("/", { replace: true });
    },
    onError: (error: string) => {
      toast.error(error || "Login failed");
    }
  });

  const handleLogin: SubmitHandler<FieldValues> = (data) => {
    mutation.mutate(data as TLoginData);
  };

  return (
    <CustomForm onSubmit={handleLogin} isReset={true}>
      <div className="space-y-5">
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="you@example.com"
          icon={<MailIcon />}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email"
            }
          }}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="••••••••"
          icon={<LockIcon />}
          rules={{ required: "Password is required" }}
        />
        <div className="flex gap-3 pt-3">
          <button
            type="submit"
            className="px-8 py-3 bg-linear-to-b from-[#67a7ff] to-[#2f7be6] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition cursor-pointer">
            Sign in
          </button>
          <button
            type="button"
            onClick={onForgot}
            className="px-5 py-3 text-gray-400 border border-white/10 rounded-xl hover:bg-white/5 transition cursor-pointer">
            Forgot?
          </button>
        </div>
      </div>
    </CustomForm>
  );
}
