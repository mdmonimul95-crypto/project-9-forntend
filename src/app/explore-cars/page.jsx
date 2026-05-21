import ExploreCard from "@/components/ExploreCard";
import React from "react";
import { Search, SlidersHorizontal, Car } from "lucide-react";

const Explore = async ({ searchParams }) => {

  const params = await searchParams;
  const search = params?.search || "";
  const category = params?.category || "";

  const queryString = new URLSearchParams();
  if (search) queryString.set("search", search);
  if (category) queryString.set("category", category);

   const res = await fetch(
     `${process.env.NEXT_PUBLIC_SERVER_URL}/explore-cars?${queryString.toString()}`,
  { cache: "no-store" }
  );

  const filteredCars = await res.json();

  return (
    <div className="bg-[#F0F3FF] min-h-screen py-10 px-4 sm:px-6 md:px-10 lg:px-16">

   
      <div className="text-center mb-10 px-2">
        <p className="text-[#9d4300] text-xs sm:text-sm font-semibold tracking-[3px] uppercase">
          Premium Collection
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
          Explore Our{" "}
          <span className="text-[#9d4300]">Luxury Cars</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-7 max-w-2xl mx-auto">
          Discover premium vehicles crafted for comfort, speed, and
          unforgettable journeys.
        </p>
      </div>

      
      <form
        action="/explore-cars"
        method="GET"
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10 max-w-4xl mx-auto w-full"
      >
        
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-4 sm:size-5" />
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search by car name"
            className="w-full outline-none pl-11 pr-4 py-3 rounded-full shadow bg-white text-sm sm:text-base"
          />
        </div>

        
        <div className="relative">
          <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-4 sm:size-5 pointer-events-none" />
          <select
            key={category}
            name="category"
            defaultValue={category}
            className="w-full sm:w-auto outline-none pl-11 pr-6 py-3 rounded-full shadow bg-white appearance-none text-sm sm:text-base"
          >
            <option value="">All Types</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
            <option value="BMW">BMW</option>
          </select>
        </div>

       
        <button
          type="submit"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#9d4300] hover:bg-[#e49457] text-white transition px-6 py-3 rounded-full font-semibold text-sm sm:text-base"
        >
          <Car className="size-4 sm:size-5" />
          Search
        </button>
      </form>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
        {filteredCars.length === 0 ? (
          <p className="col-span-full text-center text-gray-500 text-base sm:text-lg py-20">
            No Car found on your search
          </p>
        ) : (
          filteredCars.map((explore) => (
            <ExploreCard key={explore._id} explore={explore} />
          ))
        )}
      </div>

    </div>
  );
};

export default Explore;