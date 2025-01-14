import ic_dashboard from "../../public/ic_dashboard.png";
import logo from "../../public/logo.svg";
import ic_recruitment from "../../public/ic_recruitment.svg";
import ic_calendar from "../../public/ic_calendar.svg";
import Group from "../../public/Group.svg";
import Vector from "../../public/Vector.svg";
import ic_support from "../../public/ic_support.svg";
import ic_settings from "../../public/ic_settings.svg";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

const Side = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const mainMenuItems = [
    { icon: ic_dashboard, label: "Dashboard" },
    { icon: ic_recruitment, label: "Recruitment" },
    { icon: ic_calendar, label: "Calendar" },
    { icon: Group, label: "Employee" },
    { icon: Vector, label: "Group" },
  ];

  const otherMenuItems = [
    { icon: ic_support, label: "Support" },
    { icon: ic_settings, label: "Setting" },
  ];

  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const MenuItem = ({ icon, label }) => (
    <div className="flex items-center space-x-2 cursor-pointer hover:bg-slate-200 p-2 rounded-lg transition-colors">
      <img src={icon} alt={label} className="w-5 h-5" />
      <span className="text-gray-700">{label}</span>
    </div>
  );

  return (
    <div className="flex h-screen relative">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static
        z-30 lg:z-auto
        inset-y-0 left-0
        transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0
        transition duration-200 ease-in-out
        bg-slate-100 
        w-72 h-full
        flex flex-col
        lg:flex
      `}
      >
        {/* Close button for mobile */}
        <button
          className="lg:hidden absolute right-4 top-4 text-gray-600"
          onClick={() => setSidebarOpen(false)}
        >
          <CloseIcon />
        </button>

        {/* Sidebar Content */}
        <div className="p-4 flex flex-col h-full overflow-y-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Logo" className="w-40 h-20" />
          </div>

          {/* Main Menu */}
          <div className="flex flex-col items-center justify-center flex-grow space-y-8">
            {mainMenuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Others Section */}
          <div className="flex flex-col items-center justify-normal space-y-8 flex-grow mt-4">
            <h6 className="text-lg text-gray-400">Others</h6>
            {otherMenuItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b p-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-600 hover:text-gray-900"
          >
            <MenuIcon />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 lg:p-10 bg-white overflow-y-auto">
          {/* Your Header component would go here */}
          <Header />

          {/* Your Content component would go here */}
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Side;
