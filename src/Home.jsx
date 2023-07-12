import "./App.css";
import { useState } from "react";
import Products from "./Products";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Home = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/products" },
    { name: "CATEGORIES", link: "/products" },
    { name: "CONTACT US", link: "/contact" },
  ];

  return (
    <div className="bg-white">
      <nav className="w-full flex items-center justify-between py-4 px-7 lg:px-12 bg-black text-white sticky top-0 z-50">
        <div className="flex items-center">
          <Link to="/" className="text-lg font-bold">
            Nastro Furniture
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        <ul className={`md:flex md:items-center ${open ? "block" : "hidden"}`}>
          {Links.map((link) => (
            <li key={link.name} className="ml-6">
              <Link
                to={link.link}
                className="hover:text-gray-300 transition-colors duration-300"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="bg-black overflow-hidden">
        <div className="h-40 md:h-screen flex items-center justify-center">
          <img
            src="Cupboard.png"
            alt="Header Image"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <Products />
        <Testimonials />
      </div>
    </div>
  );
};
