import DottedButton from "../../../Components/Shared/Buttons/DottedButton";


const Banner = () => {
  
  

  return (
    <>
      <div
        className=" container mx-auto -mt-4  max-w-screen-2xl
         min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gradient-to-r from-cyan-600 to-indigo-500 pt-14 md:pt-24 flex flex-col items-center text-center text-white"
      >
        <h3 className="aust text-4xl md:text-6xl lg:text-8xl font-bold  ">
          Where work connects.
        </h3>
        <p className="py-6 text-sm md:text-xl px-12">
          The everything app, for work. <br /> One place for teams of all sizes
          to communicate and get work done.
        </p>
       <DottedButton to={'dashboard'} text={'Dashboard'} ></DottedButton>
       
      </div>
     
    </>
  );
};

export default Banner;
