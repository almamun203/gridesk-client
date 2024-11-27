/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <div className="flex justify-center items-center w-full min-h-screen"> <span className="loading loading-bars loading-xl text-indigo-600 "></span> </div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;