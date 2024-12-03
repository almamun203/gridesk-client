import { FaHome, FaPhone } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
    const handleFeedback = (e)=>{
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const email= form.email.value;
     const message=form.message.value;
     const feedback = {name,email,message};
     console.log(feedback);
     e.target.reset();
    }
  return (
    <div
      className=" container mx-auto -mt-4  max-w-screen-2xl
         min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gradient-to-r from-cyan-600 to-indigo-500 py-10 md:py-14  "
    >
      <h3 className="aust text-center text-white text-4xl lg:text-6xl font-extrabold mb-6">
        Contact Us
      </h3>
      <div className="flex flex-col md:flex-row justify-center  items-center">
      <div className="rounded-xl max-w-sm px-24 py-6 bg-blue-gray-100 m-4 ">
        <div className="">
          <FaHome></FaHome>
          <div>
            <h3 className="text-lg font-bold text-deep-purple-500">Address</h3>
            <p className="text-sm ">453,Sugarcane Road ,North Drumstick</p>
          </div>
        </div>
        <div className="">
          <FaPhone></FaPhone>
          <div>
            <h3 className="text-lg font-bold text-deep-purple-500">Phone</h3>
            <p className="text-sm ">635-2781-435</p>
          </div>
        </div>
        <div className="">
          <FaMessage></FaMessage>
          <div>
            <h3 className="text-lg font-bold text-deep-purple-500">Email</h3>
            <p className="text-sm ">gridesk453@mail.com</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl p-6 max-w-sm bg-blue-gray-100 m-4">
        <h3 className="text-lg font-bold ">Send Message</h3>
        <form onSubmit={handleFeedback}>
            <input className="w-full pl-2 my-2 rounded underline-offset-auto" name="name" type="text" placeholder="Full name"/>
            <input className="w-full pl-2 my-2 rounded underline-offset-auto" name="email" type="email" placeholder="Email"/>
            <textarea className="w-full pl-2 my-2 rounded underline-offset-auto" name="message" type="text" placeholder="Type Your Message.."> </textarea>
            <input className="btn text-white btn-accent btn-sm w-full rounded" type="submit" value="Send"  />
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default Contact;
