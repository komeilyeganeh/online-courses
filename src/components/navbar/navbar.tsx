import { Link } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { NavbarLinksType } from "types/navbar-links.type";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex items-center hover:text-gray-300">
        {NavbarLinks.map((navbarLink: NavbarLinksType) => (
          <li key={navbarLink.href}>
            <Link
              to={navbarLink.href}
              className="py-2 px-6 relative duration-150 ease-linear after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:rounded-xl after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:duration-150 after:ease-linear hover:after:w-8/12 hover:text-black hover:font-semibold"
            >
              {navbarLink.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
