import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const Navbar = () => {
  console.log("Navbar rendered");
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <p>Navbar</p>
      <NavLinks />
      <NavSearch />
    </nav>
  );
};