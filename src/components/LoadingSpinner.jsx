"use client";

import { Spinner } from "@heroui/react";

const LoadingSpinner = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">

        <Spinner
          size="lg"
          color="warning"
        />

        <p className="text-[#9d4300] text-3xl font-semibold animate-pulse">
          Loading DriveFleet...
        </p>

      </div>
    </div>
  );
};

export default LoadingSpinner;