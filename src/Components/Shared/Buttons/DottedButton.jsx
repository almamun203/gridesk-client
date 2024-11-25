import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DottedButton = ({text,link,bgColor,to}) => {
    return (
     <Link to={to}> <button onClick={link} className={`rounded-lg border-2 border-dashed border-white ${bgColor} px-6 py-1 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none `}>
        {text}
      </button>
      </Link>
    );
  };
  
  export default DottedButton;