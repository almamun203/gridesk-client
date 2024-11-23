import { Link } from "react-router-dom";
import useAuth from './../../../Hooks/useAuth';


const Navbar = () => {
  const {user,logOut} = useAuth();
  const handleLogOut = () => {
       logOut()
  }
    const navOptions = (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">#</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
         
        </>
      );  
    return (
        <div className="navbar  max-w-screen-2xl mx-auto  w-full  fixed z-10 bg-opacity-25 bg-teal-400">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100  rounded-box z-[1] text-black mt-3 w-36 md:w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className=" text-xl ">
            GriDesk
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
       
          {user ? (
            <>
           
              <button
                onClick={handleLogOut}
                className="btn btn-sm btn-outline "
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              

              <Link
                to="/login"
                className="btn btn-sm btn-outline  mr-2"
              >
                Login
              </Link>

              <Link
                to="/signUp"
                className="btn btn-sm btn-outline "
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    );
};

export default Navbar;