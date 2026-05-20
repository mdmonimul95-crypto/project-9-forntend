"use client";


import Link from 'next/link';
import Image from 'next/image';
import {  Car,  } from "lucide-react";
import { authClient } from '@/lib/auth-client';
import { Avatar,Button,Label, Description, Header, Kbd, Separator,Dropdown, Tabs } from '@heroui/react';
import React from 'react';

const Navber = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
    await authClient.signOut();
    };
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
      
       
        {user ? (
          <>
           <div className='flex gap-2  items-center '>
            <Dropdown>
              <Button className="bg-[#9d4300FF] py-7 " aria-label="Menu" variant="secondary">
             <div className="flex  items-center gap-2">
             <Avatar>
            <Avatar.Image
             referrerPolicy="no-referrer"
               src={user?.image}
               width={5}
               height={5}
             />
             <Avatar.Fallback>
            {user?.name?.charAt(0)}
            </Avatar.Fallback>
             </Avatar>

              <span className='text-white'>{user?.name}</span>
             </div>
            </Button>
            <Dropdown.Popover >
             <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
            <Dropdown.Item href={"/add-car"} id="new-file" textValue="New file">
            <Label>Add Car</Label>
            </Dropdown.Item>
            <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>My booking </Label>
            </Dropdown.Item>
            <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>My Added Cars</Label>
            </Dropdown.Item>
            <Dropdown.Item id="delete-file" textValue="Delete file" onClick={handleSignOut}  variant="danger">
             <Label> <Button size="sm" onClick={handleSignOut} variant="danger" className={"rounded-none"}>
               Logout
            </Button></Label>
            </Dropdown.Item>
            </Dropdown.Menu>
             </Dropdown.Popover>
            </Dropdown>
           </div>
          </>
        ) : (
          <>
           <div className='flex  gap-2 items-center'>
             <li>
              <Link href={"/login"}>Login</Link>
             </li>
             <li>
              <Link href={"/signup"}>Sign Up</Link>
             </li>
            </div>
          </>
        )}
       </nav>
    );
};


export default Navber;

