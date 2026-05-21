

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Image from "next/image";
import { DeleteAlert } from "@/components/DeleteAlart";
import { EditModal } from "@/components/EditModal";

const MyAddedCarsPage = async () => {
   
    let token;
    let user;

    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });
        user = session?.user;

        const result = await auth.api.getToken({
            headers: await headers(),
        });
        token = result?.token;
    } catch (error) {
        redirect("/login");
    }

    if (!token || !user) {
        redirect("/login");
    }

    
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/user/${user?.id}`,
        {
            headers: {
                authorization: `Bearer ${token}`,
            },
        }
    );

    if (res.status === 401) {
        redirect("/login");
    }

    const cars = await res.json();
    const totalCars = cars.length;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">My Added Cars</h1>

            <p className="text-xl font-semibold text-cyan-600 mb-8">
                Total Cars: {totalCars}
            </p>

            <div className="space-y-6">
                {cars.length === 0 ? (
                   
                    <div className="text-center py-20 text-gray-400 text-3xl">
                        you did not add any car
                    </div>
                ) : (
                    cars.map((car) => (
                        <div
                            key={car._id}
                            className="flex flex-col md:flex-row gap-5 border rounded-2xl p-4 sm:p-5 bg-white shadow-sm"
                        >
                            <Image
                                src={car.imageUrl}
                                alt={car.carName}
                                height={250}
                                width={250}
                                className="rounded-xl w-full md:w-[250px] h-[220px] object-cover"
                            />

                            <div className="flex flex-col justify-between w-full">
                                <div>
                                    <h1 className="font-bold text-2xl sm:text-3xl">
                                        {car.carName}
                                    </h1>

                                    <p className="text-gray-500 mt-1">{car.location}</p>

                                    <p className="text-gray-500 mt-1">
                                        Seats: {car.seats} &bull; Type: {car.type}
                                    </p>

                                    <p className="text-sm text-gray-400 mt-2 break-all">
                                        Car Id: {car._id}
                                    </p>

                                    <p className="text-2xl sm:text-3xl font-bold text-cyan-500 mt-4">
                                        ${car.price}{" "}
                                        <span className="text-base font-normal text-gray-400">
                                            / day
                                        </span>
                                    </p>
                                </div>

                               
                                <div className="mt-5 flex gap-3">
                                    <EditModal explore={car}/>
                                    <DeleteAlert explore={car} />
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyAddedCarsPage;