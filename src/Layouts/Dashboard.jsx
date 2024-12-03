import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import {
  FaHome,
  FaList,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { FaMessage} from "react-icons/fa6";


const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer md:drawer-open flex text-white bg-gradient-to-r from-teal-300 to-teal-800">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start p-4 md:p-0   justify-start ">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" btn btn-sm shadow-xl drawer-button md:hidden"
        >
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
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
        </label>
      </div>
  
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu  bg-gradient-to-r from-green-600 to-green-300 shadow-2xl min-h-full w-80 p-4">
        <p className=" text-2xl font-medium anton  pl-6 py-4">GriDesk</p>
          {/* Sidebar content here */}
          {isAdmin ?
            <>
            
              <li>
                <NavLink to="">
                  <FaUsers />
                  All Employee
                </NavLink>
              </li>
            </>
           :
            <>
              <li>
                <NavLink to="">
                  <FaHome></FaHome>
                 Work Sheet
                </NavLink>
              </li>
              
              <li>
                <NavLink to="">
                  <FaWallet></FaWallet>
                  Payment History
                </NavLink>
              </li>
             
            </>}
          

          {/* shared NavLinks */}
          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaList />
              Services
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/">
              <FaMessage />
              Contact
            </NavLink>
          </li> 
        </ul>
      </div>
      <div className="md:flex-1  min-h-screen">
       <Outlet></Outlet>
  </div>
    </div>
  );
};

export default Dashboard;
