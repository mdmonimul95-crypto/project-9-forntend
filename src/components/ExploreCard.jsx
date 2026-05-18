import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const ExploreCard = ({explore}) => {
    const {imageUrl,price,category,description , Seat, carName , Location,availability} = explore
    return (
        <div className='rounded-2xl relative bg-white'>
         <div className=''>
            
           <Image
            className="rounded-t-2xl w-full aspect-video object-cover"
            alt="carpic"
            src={imageUrl}
            height={400}
            width={400}
           />
           <p className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded">{availability}</p>

         </div>
         <div className='flex justify-between ml-5 mr-15'>
            <div>
               <p>{category}</p> 
               <p>{carName}</p> 
            
            </div>
            <div>{price}<br/>per day</div>
         </div>
         <div className='ml-5'>{description}</div>
         <div className='ml-5'>{Location}</div>
         <div className='ml-5'>{Seat} seat</div>
         <button className='bg-amber-700 p-2.5 rounded-2xl text-white flex justify-center items-center mx-auto'><Link href={`/details/${explore._id}`}>View Details</Link> </button>
         
        </div>
    );
};

export default ExploreCard;