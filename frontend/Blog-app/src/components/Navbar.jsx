import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import jwtDecode from "jwt-decode";
// import Cookies from "js-cookie";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Portfolio", href: "*", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "About", href: "*", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                  My<span className="h-8 w-auto text-blue-500">_</span>Blog
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
              <div className="flex items-center">
                <a
                  href="/login" 
                  className="hidden sm:block px-4 py-2 text-sm font-medium text-blue-800 border border-blue-500 rounded-xl hover:text-blue-800"
                >
                  Log In
                </a>
                <a
                  href="/register"
                  className="ml-2 px-4 py-2 text-sm font-medium text-blue-800 border border-blue-500 rounded-xl hover:text-blue-800"
                >
                  Sign In
                </a>
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
