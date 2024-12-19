import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedIn } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  if (onlineStatus === false) {
    return (
      <div
        className="bg-red-100 border-l-4 border-red-500 text-center text-red-700 p-4"
        role="alert"
      >
        <p className="font-bold">You're Offline</p>
        <p>Please check your internet connection.</p>
      </div>
    );
  }

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <h1 className="text-4xl">
                <span className="font-bold text-white">Crave</span>
                <span className="text-yellow-500 font-semibold font-sans">Express</span>
              </h1>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-base font-medium text-gray-400 hover:text-gray-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/cart"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-yellow-500 hover:bg-yellow-600"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart ({cartItems.length})
            </Link>
            <button
              type="button"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-yellow-600 bg-white hover:bg-yellow-50"
              onClick={() =>
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
              }
            >
              <User className="mr-2 h-5 w-5 " />
              {btnNameReact}
            </button>
            <span className="ml-4 text-sm font-medium text-gray-500 cursor-pointer">
              {onlineStatus ? "Online" : "Offline"}
            </span>
            {loggedIn && (
              <span className="ml-4 text-sm font-medium text-gray-500 cursor-pointer">
                {loggedIn}
              </span>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img src={LOGO_URL} alt="Logo" className="h-8 w-auto" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  to="/cart"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Cart ({cartItems.length})
                </Link>
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-yellow-600 bg-white hover:bg-yellow-50"
                  onClick={() => {
                    setBtnNameReact(
                      btnNameReact === "Login" ? "Logout" : "Login"
                    );
                    setIsMenuOpen(false);
                  }}
                >
                  {btnNameReact}
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  {onlineStatus ? "Online" : "Offline"}
                </span>
                {loggedIn && (
                  <span className="text-sm font-medium text-gray-500">
                    {loggedIn}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
