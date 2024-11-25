import { Link } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleLogOut = () => {
    logOut();
  };
  const navOptions = (
    <>
      <li>
        <Link className="linkDesign" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="linkDesign" to="">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="linkDesign" to="">
          Contact Us
        </Link>
      </li>
    </>
  );
  return (
    <div className="w-full   fixed ">
      <div className="navbar container bg-gradient-to-r from-cyan-600 to-indigo-500  max-w-screen-2xl mx-auto rounded-b-xl  shadow-xl z-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={toggleDrawer}
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-blue-gray-100   z-[1] text-black mt-3 w-36 md:w-52 p-2 shadow rounded-md"
            >
              {navOptions}
            </ul> */}
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="top"
              className="menu menu-lg dropdown-content bg-blue-gray-100   content-center w-full z-[1] text-black "
            >
              <div>
                <ul tabIndex={0} className=" w-full">
                  <li>
                    <Link className=" " to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </Drawer>
          </div>
          <Link
            to="/"
            className=" text-xl anton pl-4 md:text-2xl lg:text-3xl text-white"
          >
            GriDesk
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className="btn btn-sm btn-outline text-white"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn btn-sm btn-outline text-white mr-2"
              >
                Login
              </Link>

              <Link to="/signUp" className="btn btn-sm text-white btn-outline ">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
