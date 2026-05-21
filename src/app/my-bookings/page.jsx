import { auth } from "@/lib/auth";
import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingPage = async () => {
 

  
  const session = await auth.api.getSession({ headers: await headers() });
  const token = session?.session?.token;
  const user = session?.user;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`,  
    },
  });

  const bookings = await res.json();


  const totalPrice = bookings.reduce((sum, booking) => {
    return sum + Number(booking.price || 0);
  }, 0);

  const totalBooking = bookings.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        My Bookings
      </h1>

      <p className="text-xl font-semibold text-cyan-600 mb-2">
        Total Booking: {totalBooking}
      </p>


      <p className="text-xl font-semibold text-cyan-600 mb-8">
        Total Price: ${totalPrice}
      </p>



      <div className="space-y-6">

        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="flex flex-col md:flex-row gap-5 border rounded-2xl p-4 sm:p-5 bg-white shadow-sm"
          >


            <Image
              src={booking.imageUrl}
              alt={booking.carName}
              height={250}
              width={250}
              className="rounded-xl w-full md:w-[250px] h-[220px] object-cover"
            />

            <div className="flex flex-col justify-between w-full">

              <div>

                <h1 className="font-bold text-2xl sm:text-3xl">
                  {booking.carName}
                </h1>

                <p className="text-gray-600 mt-2">
                  {new Date(booking.departureDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>

                <p className="text-sm text-gray-500 mt-2 break-all">
                  Booking Id: {booking._id}
                </p>

                <p className="text-2xl sm:text-3xl font-bold text-cyan-500 mt-4">
                  ${booking.price}
                </p>

              </div>

              <div className="mt-5">
                <BookingCancelAlert bookingId={booking._id} />
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MyBookingPage;