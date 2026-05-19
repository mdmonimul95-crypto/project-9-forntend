import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Car, User, LogIn, Menu, X } from "lucide-react";

const Navber = () => {
    return (
       <nav className='flex justify-between items-center mx-3 p-5'>
        <div className='text-[#9d4300FF] gap-2 items-center flex text-2xl font-semibold'>
             <Car className='h-15 w-15'/>
          DriveFleet
        </div>
        <ul className='flex justify-center gap-2'>
            <li>
                <Link href={"/"}> Home </Link>
            </li>
            <li>
                <Link href={"/explore-cars"}>Explore Cars</Link>
            </li>
            <li>
                <Link href={"/my-booking"}> My booking </Link>
            </li>
            <li>
                <Link href={"/add-car"}> Add Car </Link>
            </li>
        </ul>
        
        
         <ul className='flex justify-center gap-2'>
            <li>
                <Link href={"/profile"}>Profile</Link>
            </li>
            <li>
                <Link href={"/login"}> Login </Link>
            </li>
           
            <li>
                <Link href={"/signup"}>Singup</Link>
            </li>
        </ul>
       </nav>
    );
};


export default Navber;

