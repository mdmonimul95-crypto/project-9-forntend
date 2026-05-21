import React from "react";
import Image from "next/image";
import {
  MapPin,
  Armchair,
  CircleCheckBig,
  BadgeDollarSign,
} from "lucide-react";

import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlart";
import BookingCard from "@/components/BookingCard";

const Details = async ({ params }) => {

  const { id } = await params;

  const res = await fetch(`http://localhost:8000/details/${id}`, {
    cache: "no-store",
  });

  const explore = await res.json();

  return (
    <div className="bg-[#F0F3FF] min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Side */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-md">

          <Image
            className="w-full aspect-video object-cover"
            alt="carpic"
            src={explore.imageUrl}
            height={700}
            width={700}
          />

          <div className="p-6">

            <div className="flex items-center gap-2 text-sm text-[#9d4300] font-semibold uppercase tracking-[2px]">
              <CircleCheckBig size={18} />
              {explore.availability}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mt-4 leading-tight">
              {explore.carName}
            </h2>

            <p className="text-lg sm:text-xl text-gray-500 mt-2">
              {explore.category}
            </p>

            <div className="flex items-center gap-2 mt-5">
              <BadgeDollarSign className="text-[#9d4300]" />
              <p className="text-3xl font-bold text-[#9d4300]">
                ${explore.price}
                <span className="text-base text-gray-500 font-medium">
                  {" "}
                  / per day
                </span>
              </p>
            </div>

            <p className="text-gray-600 leading-8 mt-6 text-base sm:text-lg">
              {explore.description}
            </p>

          </div>
        </div>

        
        <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mb-8">

            <EditModal explore={explore} params={params} />

            <DeleteAlert explore={explore} params={params} />

          </div>

          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-[#F0F3FF] p-4 rounded-2xl">
              <MapPin className="text-[#9d4300]" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-black">
                  {explore.Location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#F0F3FF] p-4 rounded-2xl">
              <Armchair className="text-[#9d4300]" />
              <div>
                <p className="text-sm text-gray-500">Seats</p>
                <p className="font-semibold text-black">
                  {explore.Seat} Seats
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#F0F3FF] p-4 rounded-2xl">
              <CircleCheckBig className="text-[#9d4300]" />
              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="font-semibold text-black">
                  {explore.availability}
                </p>
              </div>
            </div>

          </div>

          <div className="mt-10">
            <BookingCard explore={explore} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;