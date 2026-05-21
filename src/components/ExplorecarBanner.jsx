import ExploreCard from "@/components/ExploreCard";
import React from "react";

const ExplorecarBanner = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/explore`, {
    cache: "no-store",
  });

  const explore = await res.json();

  return (
    <div className="bg-[#F0F3FF] py-12 px-4 sm:px-6 md:px-10 lg:px-16">

      
      <div className="text-center mb-14">

        <p className="text-[#9d4300] text-sm sm:text-base font-semibold tracking-[3px] uppercase">
          Premium Collection
        </p>

         <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight">
              Explore Our <span className="text-[#9d4300]">Luxury Cars</span>
         </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
           Discover premium vehicles crafted for comfort, speed, and unforgettable
          journeys. Choose the perfect ride that matches your lifestyle and travel needs.
        </p>

     </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

        {explore.map((explore) => (
          <ExploreCard
            key={explore._id}
            explore={explore}
          />
        ))}

      </div>
    </div>
  );
};

export default ExplorecarBanner;