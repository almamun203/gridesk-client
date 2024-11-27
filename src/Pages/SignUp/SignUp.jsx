import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useAuth();
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
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            photoURL: data.photoURL,
            role:data.role,
            designation:data.designation,
            bank_acc:data.bank_acc,
            salary:data.salary
          };
          console.log(userInfo);
          axiosPublic.post('/user', userInfo)
          .then(res =>{
            if(res.data.insertedId){
              console.log("user added to database");
              reset();
              toast.success("User Created Successfully!")
              navigate('/');
            }
          })
          
        })
        .catch((error) => console.log(error.response.data));
    });
  };
  return (
    <div className="-mt-4 container mx-auto  max-w-screen-2xl flex justify-center bg-gradient-to-r from-light-green-500 to-light-green-900 bg-cover pt-6 login min-h-screen">
      <Helmet>
        <title>SignUp | GriDesk</title>
      </Helmet>
      <div className=" w-full max-w-sm md:max-w-xl lg:max-w-2xl shrink-0 ">
        <h2 className=" text-4xl text-center text-white">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body md:grid md:grid-cols-2">

         {/* 1.Role  */}
        <div className="form-control">
            <label className="label">
              <span className="label-text">Role</span>
            </label>
            <select
              type="text"
              className="input input-sm rounded-none "
              {...register("role", { required: true })}
            >
              <option value={"Employee"}>Employee</option>
              <option value={"HR"}>HR</option>              
            </select>
            {errors.name && (
              <span className=" text-red-900 text-xs">Name is required</span>
            )}
          </div>

          {/* 2.Name  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-sm rounded-none"
              {...register("name", { required: false })}
            />
            {errors.name && (
              <span className=" text-red-900 text-xs">Name is required</span>
            )}
          </div>

          {/* 3.Photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              className="input input-sm rounded-none "
              {...register("photoURL", { required: true })}
            />
            {errors.photoURL && (
              <span className=" text-red-900 text-xs">Photo is required</span>
            )}
          </div>

          {/* 4.Designation  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <select
              type="text"
              className="input input-sm rounded-none "
              {...register("designation", { required: true })}
            >
              <option value={"Sales Assistant"}>Sales Assistant</option>
              <option value={"Social Media Executive"}>Social Media Executive</option>
              <option value={"Digital Marketer"}>Digital Marketer</option>
              
            </select>
          </div>

          {/* 5.Salary  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary</span>
            </label>
            <input
              type="number"
              placeholder="$"
              className="input input-sm rounded-none"
              {...register("salary", { required: false })}
            />           
          </div>

          {/* 6.Bank Account Number  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Bank Account number</span>
            </label>
            <input
              type="number"
              placeholder="Type Here"
              className="input input-sm rounded-none"
              {...register("bank_acc", { required: false })}
            />
          </div>

          {/* 7.Email  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type Here"
              className="input input-sm rounded-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className=" text-red-900 text-xs">Email is required</span>
            )}
          </div>

          {/* 8.Password  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-sm rounded-none "
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
            {errors.password?.type === "pattern" && (
              <p className=" text-red-900 text-xs">
                Password must have at least one capital letter and one special
                character.
              </p>
            )}
          </div>
          <label className="label">
            <Link
              to="/login"
              className="label-text-alt  font-semibold link link-hover"
            >
              Already registered? Go to log in
            </Link>
          </label>
          <div className="form-control pt-2">
            <input
              className="btn btn-sm rounded-none text-white hover:text-black bg-gradient-to-r from-cyan-800 to-indigo-800 border-none"
              type="submit"
              value="Sign Up"
            />
          </div>
          

          <SocialLogin></SocialLogin>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
