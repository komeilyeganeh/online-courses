import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components";

export const Layout: React.FC = () => {
  return (
    <>
      {/* HEADER */}
      <Header />
      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
