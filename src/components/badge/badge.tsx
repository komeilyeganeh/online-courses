import { BadgeProps } from "./badge.type";

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  // ---- jsx return ----
  return (
    <div className={`py-2 px-4 rounded-3xl text-sm bg-purple-200 text-purple-600 ${className}`}>
      {children}
    </div>
  );
};
