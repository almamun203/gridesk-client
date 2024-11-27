import { Helmet } from "react-helmet-async";
import "./Login.css"
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import toast from "react-hot-toast";

const Login = () => {
    const {signIn}=useAuth();
    const navigate = useNavigate();
    const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data)=>{
        signIn(data.email,data.password)
        .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            toast.success('Logged in Successfully.', {
              style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
              },
              iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
              },
            });
            navigate(from, { replace: true });
        }).catch(error=>{
          toast.error(error.message)
          console.log(error);
         }
       )
      }
    return (
        <div  className="-mt-4 container mx-auto  max-w-screen-2xl flex justify-center bg-gradient-to-r from-light-green-500 to-light-green-900 bg-cover lg:pt-[68px] pt-16 login min-h-screen">
              <Helmet>
                <title>Login | GriDesk</title>
            </Helmet>
        <div className=" w-full max-w-sm shrink-0 ">
            <h2 className=" text-4xl text-center text-white">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Here"
                  className="input rounded-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-900 text-xs">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input rounded-none"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className=" text-red-900 text-xs">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className=" text-red-900 text-xs">
                    Password must be at least 6 characters.
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className=" text-red-900 text-xs">
                    Password must be less than 20 characters.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className=" text-red-900 text-xs">
                    Password must have at least one uppercase,one lowercase,one
                    number and one special character.
                  </p>
                )}
              </div>

              <div className="form-control pt-6">
                <input
                  className="btn rounded-none bg-gradient-to-r from-cyan-800 to-indigo-800 border-none text-white hover:text-black bg-[#D1A054]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <label className="label">
                <Link
                  to="/signUp"
                  className="label-text-alt  font-semibold link link-hover"
                >
                  New here? SignUp first
                </Link>
              </label>
               
               <SocialLogin></SocialLogin>
              
            </form>
        </div>
        </div>
    );
};

export default Login;