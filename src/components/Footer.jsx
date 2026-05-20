export default function Footer() {
  return (
    <footer className="bg-[#f0f2f8] mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="col-span-2 md:col-span-1">
            <p className="text-[#9d4300] font-bold text-xl mb-3">DriveFleet</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Redefining luxury travel for the modern executive. Premium vehicles, seamless service, unforgettable journeys.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-4">Company</p>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/rentals" className="hover:text-[#9d4300]">Rentals</a></li>
              <li><a href="/fleet" className="hover:text-[#9d4300]">Fleet</a></li>
              <li><a href="/concierge" className="hover:text-[#9d4300]">Concierge</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-4">Support</p>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/contact" className="hover:text-[#9d4300]">Contact</a></li>
              <li><a href="/terms" className="hover:text-[#9d4300]">Terms</a></li>
              <li><a href="/privacy" className="hover:text-[#9d4300]">Privacy</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-4">Follow Us</p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-[#9d4300] text-xl">
                <i className="ti ti-brand-facebook" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9d4300] text-xl">
                <i className="ti ti-brand-instagram" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 mt-10 pt-5 text-center text-xs text-gray-400">
          © 2024 DriveFleet Luxury Car Rental. All rights reserved.
        </div>
      </div>
    </footer>
  );
}