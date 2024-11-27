import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { IoIosRestaurant } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbCalendarCheck, TbMessageStar } from "react-icons/tb";
import { FaMessage, FaShop } from "react-icons/fa6";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex text-white bg-gradient-to-r from-teal-300 to-teal-800">
      <div className="w-64 min-h-screen hidden md:flex md:flex-col bg-gradient-to-r from-green-600 to-teal-900 shadow-2xl rounded-xl">
        <p className=" text-2xl font-medium anton  pl-6 pt-4">
           GriDesk
        </p>
        <ul className="menu playFair font-semibold">
         
         {isAdmin? 
         <>
          <li>
            <NavLink to="">
              <FaHome></FaHome>
              Admin Home 
            </NavLink>
          </li>
          <li>
            <NavLink to="">
            <IoIosRestaurant />
              Add Item
            </NavLink>
          </li>
          <li>
            <NavLink to="">
            <CgMenuGridO />
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="">
            <MdOutlineLibraryBooks />
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaUsers /> 
              All Users
            </NavLink>
          </li>
          
         </> 
         :
          <>
           <li>
            <NavLink to="">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaWallet></FaWallet>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaShoppingCart></FaShoppingCart>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <TbMessageStar />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <TbCalendarCheck />
              My Bookings
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
              <FaList/>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaShop />
              Shop
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
      <div className="md:flex-1  p-8">
        <Outlet></Outlet>
      </div>
    </div>
    );
};

export default Dashboard;