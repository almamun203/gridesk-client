import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const { GoogleSign } = useAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        GoogleSign().then((result) => {
          console.log(result.user);
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
          };
        //   axiosPublic.post("/users", userInfo).then((res) => {
        //     console.log(res.data);
        //     
        //   });
        navigate("/");
        });
      };
    return (
        <div className="text-center">
      <p className="text-sm font-semibold underline"> Or, Sign Up With</p>
      <div className="flex justify-center gap-4 my-3">
       <FaGoogle onClick={handleGoogleSignIn} size={28} className="cursor-pointer"></FaGoogle>
       <FaGithub className="cursor-pointer" size={28}></FaGithub>
      </div>
    </div>
    );
};

export default SocialLogin;