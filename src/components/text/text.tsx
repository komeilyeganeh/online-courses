import { TextProps } from "./text.type";

export const Text: React.FC<TextProps> = ({
  as = "p",
  children,
  className,
}) => {
  const Tag = as;
  // ---- jsx return ----
  return <Tag className={className}>{children}</Tag>;
};
