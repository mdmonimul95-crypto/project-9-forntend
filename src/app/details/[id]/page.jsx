import React from 'react';
// import DetailsCard from '@/components/DetailsCard';
import Image from 'next/image';
import { MapPin,Armchair,CircleCheckBig  } from "lucide-react";
import { Button, ButtonGroup } from '@heroui/react';
import { EditModal } from '@/components/EditModal';
import { DeleteAlert } from '@/components/DeleteAlart';
import  BookingCard from '@/components/BookingCard';

const Details = async({params}) => {
    const {id} = await params
    const res = await fetch(`http://localhost:8000/details/${id}`)
    const explore = await res.json()
    console.log(explore);


    return (
        <div className='bg-[#F0F3FF] px-20 flex gap-4 '>
            <div className="bg-white  ">
                {/* {
                    // explore.map(explore => <DetailsCard key={explore._id} explore={explore}/>)
                    
                }  */}
                <Image
                                       className="rounded-t-2xl  aspect-video object-cover"
                                       alt="carpic"
                                       src={explore.imageUrl}
                                       height={400}
                                       width={400}
                />
                

            </div>
            <div className='bg-white gap-3'>
                
                         <div className='  ml-5 mr-15 gap-2'>
                            <div className='flex justify-between'> <div>
                               <p className='text-3xl'>{explore.category}</p> 
                               <p className='text-6xl'>{explore.carName}</p> </div>
                                 <EditModal explore={explore} params={params}/>
                                 <DeleteAlert explore={explore} params={params}/>
                            </div>
                            <br/>
                            <div className=''><span className='text-4xl'>{explore.price}</span>/per day</div>
                            <p> {explore.description}</p>

                         </div>
                         <div className='flex gap-2 '><MapPin/> {explore.Location}</div>
                         <div className='flex gap-2'><Armchair /> {explore.Seat}</div>
                         <div className='flex gap-2 '><CircleCheckBig /> {explore.availability}</div>
                         <BookingCard explore={explore}/> 
            </div>
        </div>
    );
};

export default Details;