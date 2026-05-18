import Image from "next/image";
// import banner from "@/public/assets/banner.png";


const Banner = () => {
  return (
   <div className="flex  ">
    <div className="  max-w-fit py-10  bg-[#F0F3FF]">
      

      <div className=" mx-10 flex items-center justify-center ">
      <div className="relative w-full w-300  sm:w-50 md:w-200 lg:w-250 rounded-2xl   ">
        <div className="px-6 pt-8 pb-8 ">

          
          <p  className="text-[#9d4300] text-[14px] font-semibold leading-[16px] tracking-[2.8px] uppercase">
            Elite Car Rental
          </p>

         
          <h1 className=" text-black mt-[16px] text-[48px] font-extrabold leading-[56px]">
            Redefine Your<br /><span className="text-[#9d4300] ">Journey</span>
          </h1>

         
          <p className="text-[#45464d] mt-[16px] text-[18px] font-normal leading-[29.25px]">
            Experience the pinnacle of automotive engineering with our<br/>
            curated fleet of luxury and performance vehicles. Designed<br/>
            for those who demand excellence in every ride.
          </p>

          
          <div className="flex gap-3 mt-[16px]">
            <button className="bg-[#9d4300] hover:bg-orange-500 active:scale-95 transition-all text-white text-sm font-medium px-5 py-2.5 rounded-full">
              Rent Now
            </button>
            <button className="text-black bg-transparent hover:bg-white/10 active:scale-95 transition-all  text-sm font-medium px-5 py-2.5 rounded-full border border-black/30">
              Explore Fleet
            </button>
          </div>

        </div>
      </div>
    </div>


    </div>
    <div className="flex "> <Image
            src="/assets/banner1.png"
            alt="homepic"
            width={300}
            height={600}
         />
    </div>
    
   </div>
  );
};

export default Banner;