import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const { createUser  , updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL).then(() => {
        const userInfo = {
          name: data.name,
          email:data.email
        }
        // axiosPublic.post('/users', userInfo)
        // .then(res =>{
        //   if(res.data.insertedId){
        //     console.log("user added to database");
        //            
        //     Swal.fire({
        //       title: "User Created Successfully!",
        //       icon: "success",
        //       position: "top-end",
        //       timer: 1500,
        //       showConfirmButton: false
        //     });
        //     navigate('/');
        //   }
        // })
        reset();
      }).catch(error =>console.log(error))
      
    });
  };
    return (
        <div className="container mx-auto  max-w-screen-2xl flex justify-center bg-gradient-to-r from-light-green-500 to-light-green-900 bg-cover pt-6 lg:pt-[36px] login min-h-screen">
            <Helmet>
                <title>SignUp | GriDesk</title>
            </Helmet>
            <div className=" w-full max-w-sm shrink-0 ">
            <h2 className=" text-4xl text-center text-white">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="input "
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className=" text-red-600 text-xs">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="input "
                  {...register("photoURL", { required: false })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Here"
                  className="input "
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className=" text-red-600 text-xs">
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
                  className="input "
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className=" text-red-600 text-xs">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <p className=" text-red-600 text-xs">
                    Password must be at least 6 characters.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className=" text-red-600 text-xs">
                    Password must have at least one capital letter and one special character.
                  </p>
                )}
              </div>

              <div className="form-control pt-6">
                <input
                  className="btn text-white hover:text-black bg-gradient-to-r from-cyan-800 to-indigo-800 border-none"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt  font-semibold link link-hover"
                >
                  Already registered? Go to log in
                </Link>
              </label>
               
               <SocialLogin></SocialLogin>
              
            </form>
            </div>
        </div>
    );
};

export default SignUp;