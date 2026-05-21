"use client";

import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BookingCard = ({ explore }) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(null);
  const [driverNeeded, setDriverNeeded] = useState("");
  const [specialNote, setSpecialNote] = useState("");

  const { price, _id, carName, imageUrl, country } = explore;

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      exploreId: _id,
      carName,
      price,
      imageUrl,
      country,
      departureDate: new Date(),
      driverNeeded,
      specialNote,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      }
    );

    const data = await res.json();
    console.log(data)

    if (data) {
      toast.success("You booked successfully!");
      router.push("/my-bookings");
    }
  };

  return (
    <Card className="rounded-none border mt-5">
      <p className="text-sm text-muted">Starting from</p>

      <h2 className="text-3xl font-bold text-cyan-500">
        ${price}
      </h2>

      <p className="text-sm text-muted">per person</p>


      <div className="mt-4">
        <label className="text-sm font-medium">
          Driver Needed
        </label>

        <select
          value={driverNeeded}
          onChange={(e) => setDriverNeeded(e.target.value)}
          className="w-full border p-2 mt-1"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium">
          Special Note
        </label>

        <textarea
          value={specialNote}
          onChange={(e) => setSpecialNote(e.target.value)}
          placeholder="Write your special note..."
          className="w-full border p-2 mt-1"
          rows={4}
        />
      </div>
      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-cyan-500"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;