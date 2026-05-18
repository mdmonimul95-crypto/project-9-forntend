"use client";

import { Button, FieldError,  Select, Input, Label, ListBox, TextArea, TextField } from '@heroui/react';
import React from 'react';
import Explore from '../explore-cars/page';

const AddCarPage = () => {
  const onSubmit = async(e) => {
    e.preventDefault()
    const fromData = new FormData(e.currentTarget)
    const explore = Object.fromEntries(fromData.entries())
    console.log(explore)

    const res = await fetch("http://localhost:8000/add-car",{
          method: 'POST',
          headers: {
           'content-type' : 'application/json'
          },
     body: JSON.stringify(explore),
    })
    const data = await res.json()
    console.log(data)
  }

  

    return (
        <div>
            <h1 className=" flex justify-center h-7 font-bold">Add Car </h1>

            <form
            onSubmit={onSubmit}
            className="p-10 space-y-8 "
          >
            <div className="grid md:mx-40 grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="carName" isRequired>
                  <Label className="text-sm font-medium">Car Name</Label>
                  <Input placeholder="BMW" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              
              <TextField name="Location" isRequired>
                <Label>Pickup Location</Label>
                <Input placeholder="Dhaka" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Category - Updated Select Component */}
              <div>
                <Select
                  name="category"
                  isRequired
                  className="w-full"
                  placeholder="Select category"
                >
                  <Label>Car Type</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="SUV" textValue="SUV">
                        SUV
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Sedan" textValue="Sedan">
                        Sedan
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Hatchback" textValue="Hatchback">
                        Hatchback
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="etc" textValue="etc">
                       etc
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="BMW" textValue="BMW">
                       BMW
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label>Daily Rent Price(USD)</Label>
                <Input
                  type="number"
                  placeholder="1299"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              {/* <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField> */}

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="Seat" type="number" isRequired>
                  <Label>Seat Capacity</Label>
                  <Input type="number" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com/bali-paradise.jpg"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="Describe the travel experience..."
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
              <div className="md:col-span-2">
                <TextField name="availability" isRequired>
                  <Label>Availability Status</Label>
                  <TextArea
                    placeholder="Available or Unavailable"
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              // isLoading={isPending}
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
              {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
              add Travel
            </Button>
          </form>
        </div>
    );
};

export default AddCarPage ;