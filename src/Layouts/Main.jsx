import { Outlet } from "react-router-dom";
import Navbar from './../Components/Shared/Navbar/Navbar';
import Footer from "../Components/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" pt-16 lg:pt-[68px] ">
            <Outlet></Outlet>
            </div>            
            <Footer></Footer>
        </div>
    );
};

export default Main;