import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();
  const { GoogleSign } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    GoogleSign().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: "employee",
      };
      axiosPublic.post("/user", userInfo).then((res) => {
        if (res.data.insertedId) {
          console.log("user added to database");
          toast.success("User Created Successfully!");
        }
      });

      navigate(from, { replace: true });
    });
  };
  return (
    <div className="text-center">
      <p className="text-sm font-semibold underline"> Or, Sign Up With</p>
      <div className="flex justify-center gap-4 my-3">
        <FaGoogle
          onClick={handleGoogleSignIn}
          size={28}
          className="cursor-pointer hover:scale-110"
        ></FaGoogle>
        <FaGithub
          className="hover:scale-110 cursor-pointer"
          size={28}
        ></FaGithub>
      </div>
    </div>
  );
};

export default SocialLogin;
