import React from 'react'
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./App.css";
import { useState } from "react";

const ContactPage = () => {
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
      <div className="h-40 md:h-64 flex items-center justify-center">
        <img
          src="Cupboard.png"
          alt="Header Image"
          className="w-full object-cover"
        />
      </div>
    </div>

    <div className="container mx-auto mt-10">
        <div className='flex flex-col md:flex-row gap-12'>
            <div
                className="object-cover object-center h-full w-full md:w-1/2"
                style={{
                    backgroundImage: `url(Cupboard.png)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    transition: "filter 0.3s ease",
                }}
            >
            </div>
            <div className='md:w-1/2'>
                <p className='font-bold text-4xl'>Contact Us</p>
                <form action="" className='flex flex-col gap-4 w-1/2'>
                    <input type="text" placeholder='Name' className='p-2 border-2 border-gray-400 bg-gray-200' />
                    <input type="text" placeholder='Phone' className='p-2 border-2 border-gray-400 bg-gray-200' />
                    <input type="text" placeholder='Email' className='p-2 border-2 border-gray-400 bg-gray-200' />
                    <textarea type="text" placeholder='Message' className='p-2 border-2 border-gray-400 bg-gray-200' />
                    <div className='flex w-full justify-center'>
                        <button className='bg-black text-white rounded-md hover:bg-gray-600 p-2 w-1/2'>Contact</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>

  )
}

export default ContactPage