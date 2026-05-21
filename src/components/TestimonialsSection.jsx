import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F0F3FF] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[4px] text-lime-600 font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none text-black max-w-3xl">
            Drivers love the curated feel.
          </h2>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          
          <div className="bg-black rounded-[28px] p-6 md:p-8">
            <div className="flex gap-1 text-lime-400 mb-6">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            <h3 className="text-white text-xl font-semibold leading-relaxed mb-10">
              “The fastest rental experience I have used in Dhaka.”
            </h3>

            <p className="text-cyan-300 text-sm">Member #1</p>
          </div>

        
          <div className="bg-black rounded-[28px] p-6 md:p-8">
            <div className="flex gap-1 text-lime-400 mb-6">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            <h3 className="text-white text-xl font-semibold leading-relaxed mb-10">
              “Listing my SUV took less than a minute.”
            </h3>

            <p className="text-cyan-300 text-sm">Member #2</p>
          </div>

         
          <div className="bg-black rounded-[28px] p-6 md:p-8">
            <div className="flex gap-1 text-lime-400 mb-6">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            <h3 className="text-white text-xl font-semibold leading-relaxed mb-10">
              “The booking dashboard is clean and examiner-friendly.”
            </h3>

            <p className="text-cyan-300 text-sm">Member #3</p>
          </div>

        </div>
      </div>
    </section>
  );
}