import Image from "next/image";
import Link from "next/link";
// import banner from "@/public/assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      
      <div className="max-w-fit py-10 bg-[#F0F3FF] w-full">
        
        <div className="mx-4 sm:mx-6 md:mx-10 flex items-center justify-center">
          
          <div className="relative w-full sm:w-[500px] md:w-[700px] lg:w-[900px] rounded-2xl">
            
            <div className="px-4 sm:px-6 pt-8 pb-8">
              
              <p className="text-[#9d4300] text-[12px] sm:text-[14px] font-semibold leading-[16px] tracking-[2.8px] uppercase">
                Elite Car Rental
              </p>

              <h1 className="text-black mt-[16px] text-[32px] sm:text-[40px] md:text-[48px] font-extrabold leading-[42px] sm:leading-[50px] md:leading-[56px]">
                Redefine Your<br />
                <span className="text-[#9d4300]">Journey</span>
              </h1>

              <p className="text-[#45464d] mt-[16px] text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[26px] sm:leading-[29px]">
                Experience the pinnacle of automotive engineering with our
                curated fleet of luxury and performance vehicles. Designed
                for those who demand excellence in every ride.
              </p>

              <div className="flex flex-wrap gap-3 mt-[16px]">
                
                <button className="bg-[#9d4300] hover:bg-orange-500 active:scale-95 transition-all text-white text-sm font-medium px-5 py-2.5 rounded-full">
                   <Link
                   href="/explore-cars"
                   
                  >
                    Rent Now
                   </Link>
                </button>

                <button className="text-black bg-transparent hover:bg-white/10 active:scale-95 transition-all text-sm font-medium px-5 py-2.5 rounded-full border border-black/30">
                  <Link
                   href="/explore-cars"
                   
                  >
                    Explore Fleet
                   </Link>
                  </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full py-6 lg:py-0">
        <Image
          src="/assets/banner1.png"
          alt="homepic"
          width={300}
          height={600}
          className="w-[220px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;