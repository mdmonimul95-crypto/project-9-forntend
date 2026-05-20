"use client";

import Link from "next/link";
import { Car, Menu } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Button,
  Label,
  Dropdown,
} from "@heroui/react";
import React, { useState } from "react";

const Navber = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        
      
        <div className="text-[#9d4300] gap-2 items-center flex text-2xl font-bold">
          <Car className="h-8 w-8 md:h-10 md:w-10" />
          <span>DriveFleet</span>
        </div>

       
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/explore-cars">Explore Cars</Link>
          </li>

          <li>
            <Link href="/my-bookings">My Booking</Link>
          </li>

          <li>
            <Link href="/add-car">Add Car</Link>
          </li>
        </ul>

        
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <Dropdown>
              <Button className="bg-[#9d4300] text-white">
                <div className="flex items-center gap-2">
                  <Avatar
                    src={user?.image}
                    name={user?.name}
                  />
                  <span>{user?.name}</span>
                </div>
              </Button>

              <Dropdown.Popover>
                <Dropdown.Menu>
                  <Dropdown.Item href="/add-car">
                    <Label>Add Car</Label>
                  </Dropdown.Item>

                  <Dropdown.Item href="/my-bookings">
                    <Label>My Booking</Label>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Label>My Added Cars</Label>
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={handleSignOut}
                    variant="danger"
                  >
                    <Label>Logout</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/login">
              <Button className="bg-[#9d4300] text-white">
                  Login
                </Button></Link>

              <Link href="/signup">
                <Button className="bg-[#9d4300] text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/explore-cars">Explore Cars</Link>
            </li>

            <li>
              <Link href="/my-bookings">My Booking</Link>
            </li>

            <li>
              <Link href="/add-car">Add Car</Link>
            </li>
          </ul>

          <div className="mt-5">
            {user ? (
              <div className="flex flex-col gap-3">
                <div className="flex py-1 items-center gap-2">
                  <Avatar
                    src={user?.image}
                    name={user?.name}
                  />
                  <span>{user?.name}</span>
                </div>

                <Button
                  onClick={handleSignOut}
                  color="danger"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/login">
                  <Button
                    fullWidth
                    className="bg-[#9d4300] text-white"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button
                    fullWidth
                    className="bg-[#9d4300] text-white"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
