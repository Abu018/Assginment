import search from "../../public/search.svg";
import notifi from "../../public/notifi.svg";
import chat from "../../public/chat.svg";
import pre from "../../public/per.png";
import arrow from "../../public/arrow.svg";
import { useState } from "react";

const Header = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Main Header Container */}
      <div className="flex flex-row items-center justify-between max-w-7xl mx-auto py-4 px-4 lg:px-6 h-auto space-y-0">
        {/* Search Input */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="pr-10 pl-4 py-2 border rounded-md w-full"
          />
          <img
            src={search}
            alt="Search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <img
              src={notifi}
              alt="Notification"
              className="w-6 h-6 cursor-pointer"
            />
            <img src={chat} alt="Chat" className="w-6 h-6 cursor-pointer" />
          </div>

          {/* Profile Section */}
          <div className="relative flex items-center">
            <button
              className="flex items-center space-x-2"
              onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
            >
              <img
                src={pre}
                alt="Profile"
                className="w-8 h-8 cursor-pointer rounded-full"
              />
              <span className="text-sm font-semibold hidden sm:block">
                Alia
              </span>
              <img
                src={arrow}
                className="w-4 filter contrast-150 transform transition-transform duration-200"
                alt="Arrow"
                style={{
                  transform: isProfileMenuOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              />
            </button>

            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a
                  href="#profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
