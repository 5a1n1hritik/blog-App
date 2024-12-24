import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Articles", href: "*", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  const updateCurrentState = (href) => location.pathname === href;

  return (
    <>
      <nav className="bg-white sticky top-0 shadow-md w-full">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-20 items-center">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <i className="bi bi-x-lg h-8 w-8 text-2xl"></i>
                ) : (
                  <i className="bi bi-list h-8 w-8 text-3xl"></i>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center text-2xl font-extrabold bg-gradient-to-b from-blue-100 to-black bg-clip-text text-transparent">
                <a href="/">
                  Saini<span className="h-8 w-auto text-blue-500">.</span>
                </a>
              </div>
              <div className="hidden sm:block ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        updateCurrentState(item.href)
                          ? "bg-blue-500 text-white"
                          : "text-gray-900 hover:bg-blue-500 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <div className="flex items-center">
                <button
                  onClick={() => setIsClicked(!isClicked)}
                  className="ml-2 relative rounded-full px-2 p-1 text-blue-800 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <i
                    className={`bi ${
                      isClicked ? "bi-bell-fill" : "bi-bell"
                    } h-8 w-8`}
                  ></i>
                </button>
              </div> */}
              <div className="relative ml-3">
                <button
                  className="relative flex rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User profile"
                    className="h-8 w-8 rounded-lg"
                  />
                </button>
                {isOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-blue/5 focus:outline-none">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 w-full p-2 rounded-lg"
                    >
                      My Profile
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="sm:hidden px-2 pb-3 w-full">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  updateCurrentState(item.href)
                    ? "bg-blue-500 text-white"
                    : "text-gray-900 hover:bg-blue-500 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;