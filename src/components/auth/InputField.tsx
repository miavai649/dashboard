import { useState, type InputHTMLAttributes } from "react";
import { FaRegEye } from "react-icons/fa6";
import { LuEyeClosed } from "react-icons/lu";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
}

export default function InputField({ label, icon, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = props.type === "password";

  const inputType = isPasswordField && showPassword ? "text" : props.type;

  return (
    <div>
      <label className="block text-sm text-[rgba(255,255,255,0.68)] mb-2">{label}</label>
      <div className="relative">
        <input
          {...props}
          type={inputType}
          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#67a7ff]/50 focus:outline-none focus:ring-2 focus:ring-[#67a7ff]/20 transition"
        />
        {/* right side icon */}
        <div className="absolute left-3.5 top-4 text-gray-400 pointer-events-none">{icon}</div>

        {/* left side icon only for password input field */}
        {props.type === "password" && (
          <div onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-5 text-gray-400 cursor-pointer">
            {showPassword ? <FaRegEye /> : <LuEyeClosed />}
          </div>
        )}
      </div>
    </div>
  );
}
