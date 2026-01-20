import { useState, type InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaRegEye } from 'react-icons/fa6';
import { LuEyeClosed } from 'react-icons/lu';

interface IValidationRules {
  required?: boolean | string;
  minLength?: number | { value: number; message: string };
  maxLength?: number | { value: number; message: string };
  pattern?: RegExp | { value: RegExp; message: string };
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
  rules?: IValidationRules;
}

export default function InputField({ label, icon, rules, ...props }: Props) {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = props.type === 'password';

  const inputType = isPasswordField && showPassword ? 'text' : props.type;

  // React Hook Form context
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const errorMessage = errors[props.name!]?.message as string | undefined;

  return (
    <div>
      <label className='block text-sm text-[rgba(255,255,255,0.68)] mb-1'>{label}</label>
      <div className='relative'>
        <input
          {...register(props.name!, rules)}
          {...props}
          type={inputType}
          className='w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#67a7ff]/50 focus:outline-none focus:ring-2 focus:ring-[#67a7ff]/20 transition'
        />
        {/* right side icon */}
        <div className='absolute left-3.5 top-4 text-gray-400 pointer-events-none'>{icon}</div>

        {/* left side icon only for password input field */}
        {props.type === 'password' && (
          <div onClick={() => setShowPassword(!showPassword)} className='absolute right-3.5 top-4 text-gray-400 cursor-pointer'>
            {showPassword ? <LuEyeClosed /> : <FaRegEye />}
          </div>
        )}
      </div>

      <div className='min-h-4 mt-1'>{errorMessage && <p className='text-xs text-red-500'>{errorMessage}</p>}</div>
    </div>
  );
}
