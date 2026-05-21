import React from "react";
import { ShieldCheck, Zap, Settings } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">

      
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
        Why choose us
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        A rental flow that feels premium end to end.
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

       
        <div className="p-6 border rounded-xl bg-white hover:shadow-md hover:scale-[1.02] transition">
          <ShieldCheck className="w-6 h-6 text-cyan-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Protected Booking
          </h3>
          <p className="text-gray-600 text-sm">
            Private APIs validate sessions before cars or bookings can be changed.
          </p>
        </div>

       
        <div className="p-6 border rounded-xl bg-white hover:shadow-md hover:scale-[1.02] transition">
          <Zap className="w-6 h-6 text-cyan-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Fast Discovery
          </h3>
          <p className="text-gray-600 text-sm">
            Search by name and filter by type using MongoDB query operators.
          </p>
        </div>

        
        <div className="p-6 border rounded-xl bg-white hover:shadow-md hover:scale-[1.02] transition">
          <Settings className="w-6 h-6 text-cyan-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Owner Control
          </h3>
          <p className="text-gray-600 text-sm">
            Owners can update availability, price, location, type, image, and description.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;