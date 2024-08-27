"use client"; 
import Logo from "../Logo";
import Image from "../Image";
import { useState } from "react";
const Navbar: React.FC  = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between py-2 px-5 bg-gray-900">
      <Logo />
      <div className="bg-pink-700 rounded-full">
        <Image
          src="/images/profile.png"
          alt="Profile"
          width={39}
          height={39}
          className="cursor-pointer"
          onClick={toggleDropdown}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-10">
            <a
              href="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <a
              href="/logout"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
