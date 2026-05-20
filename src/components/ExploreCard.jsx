import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaCarSide,
  FaTag,
} from "react-icons/fa";

const ExploreCard = ({ explore }) => {
  const {
    imageUrl,
    price,
    category,
    description,
    Seat,
    carName,
    Location,
    availability,
  } = explore;

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 w-full">

      <div className="relative">
        <Image
          className="w-full aspect-video object-cover"
          alt="carpic"
          src={imageUrl}
          height={400}
          width={400}
        />

        <p className="absolute top-3 left-3 bg-green-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
          {availability}
        </p>
      </div>

      <div className="p-4 sm:p-5">

        <div className="flex justify-between items-start gap-3">

          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaTag className="text-amber-700" />
              <p>{category}</p>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-black mt-1">
              {carName}
            </h2>
          </div>

          <div className="text-right">
            <p className="text-lg sm:text-xl font-bold text-amber-700">
              ${price}
            </p>

            <span className="text-xs sm:text-sm text-gray-500">
              per day
            </span>
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-600 mt-3 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 text-sm text-gray-700">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-amber-700" />
            <p>{Location}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaCarSide className="text-amber-700" />
            <p>{Seat} Seat</p>
          </div>
        </div>

        <div className="mt-5">
          <Link href={`/details/${explore._id}`}>
            <button className="w-full bg-amber-700 hover:bg-amber-800 transition-all duration-300 text-white py-2.5 rounded-xl text-sm sm:text-base font-medium">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ExploreCard;