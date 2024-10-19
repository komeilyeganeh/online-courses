import { InputProps } from "./input.type";

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  name
}) => {
  // ---- jsx return ----
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={`py-1 px-3 h-10 outline-none bg-gray-200 rounded-lg placeholder:text-sm ${className}`}
    />
  );
};
