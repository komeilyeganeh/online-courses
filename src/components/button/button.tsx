import { Link } from "react-router-dom";
import { ButtonProps } from "./button.type";

export const Button: React.FC<ButtonProps> = ({
  as,
  children,
  className,
  href,
}) => {
    // ---- jsx return ----
  return as === "link" ? (
    <Link to={href} className={`py-2 px-3 duration-150 ${className}`}>
      {children}
    </Link>
  ) : as === "button" ? (
    <button className={`py-2 px-3 ${className}`} type="button">
      {children}
    </button>
  ) : (
    <button className={`py-2 px-3 ${className}`} type="submit">
      {children}
    </button>
  );
};
