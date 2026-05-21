import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f0f2f8] mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

          
          <div className="md:col-span-2">
            <h2 className="text-[#9d4300] font-bold text-2xl mb-4">
              DriveFleet
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Redefining luxury travel for the modern executive.
              Premium vehicles, seamless service, unforgettable journeys.
            </p>

            
            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#9d4300]" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#9d4300]" />
                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#9d4300]" />
                <span>support@drivefleet.com</span>
              </div>

            </div>
          </div>

          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Useful Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#9d4300] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/explore-cars"
                  className="hover:text-[#9d4300] transition"
                >
                  Explore Cars
                </Link>
              </li>

              <li>
                <Link
                  href="/add-car"
                  className="hover:text-[#9d4300] transition"
                >
                  Add Car
                </Link>
              </li>

              <li>
                <Link
                  href="/my-bookings"
                  className="hover:text-[#9d4300] transition"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="hover:text-[#9d4300] transition"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/rentals"
                  className="hover:text-[#9d4300] transition"
                >
                  Rentals
                </Link>
              </li>

              <li>
                <Link
                  href="/fleet"
                  className="hover:text-[#9d4300] transition"
                >
                  Fleet
                </Link>
              </li>

              <li>
                <Link
                  href="/concierge"
                  className="hover:text-[#9d4300] transition"
                >
                  Concierge
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <Link
                href="https://facebook.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 hover:bg-[#9d4300] hover:text-white transition"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 hover:bg-[#9d4300] hover:text-white transition"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 hover:bg-[#9d4300] hover:text-white transition"
              >
                <FaTwitter />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-500 hover:bg-[#9d4300] hover:text-white transition"
              >
                <FaLinkedinIn />
              </Link>

            </div>
          </div>

        </div>

       
        <div className="border-t border-gray-400 mt-10 pt-5 text-center text-xs text-gray-500">
          © 2024 DriveFleet Luxury Car Rental. All rights reserved.
        </div>

      </div>
    </footer>
  );
}