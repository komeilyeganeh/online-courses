import { Logo } from "@components";

export const Header: React.FC = () => {
  // ---- jsx return ----
  return (
    <header>
      <div className="container flex">
        <Logo />
      </div>
    </header>
  );
};
