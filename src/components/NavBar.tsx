import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, Outlet } from "react-router-dom";
import Cart from "../pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toggle } from "../redux/uiSlice";
import { StateType, uiStateType } from "../types/types";
import cartLogo from "../assets/cart.svg";

function Nav() {
  const dispatch = useDispatch();
  const ui = useSelector((state: uiStateType) => state.ui);
  const cart = useSelector((state: StateType) => state.cart);

  const [isOpen, setIsOpen] = useState(false);

  const handleCartOpen = () => {
    dispatch(toggle());
  };
  return (
    <div>
      {ui.cartDrawerVisible ? (
        <>
          <Cart />
        </>
      ) : (
        <></>
      )}
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Shop
                  </Link>
                  <div
                    onClick={handleCartOpen}
                    style={{
                      textDecoration: "none",
                    }}
                    className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Cart
                  </div>

                  <a
                    href="https://www.zapper.com/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Zapper
                  </a>
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="-mr-2 flex px-4 ">
                <button
                  onClick={handleCartOpen}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <img
                    // className="block h-6 w-6"
                    src={cartLogo}
                    className="block h-6 w-6"
                    // className="logo"
                    alt="React logo"
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "20px",
                      width: "20px",
                      backgroundColor: "red",
                      borderRadius: "50%",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      textAlign: "center",
                      marginRight: "10px",
                      textDecoration: "none",
                      position: "relative",
                      // right: "10px",
                      // top: "10px",
                    }}
                  >
                    <>{cart.length}</>
                  </div>
                </button>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Shop
                </Link>
                <div
                  onClick={handleCartOpen}
                  style={{
                    textDecoration: "none",
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Cart
                </div>

                <a
                  href="https://www.zapper.com/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Zapper
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
