"use client";

import {
  Button,
  FieldError,
  Select,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
} from "@heroui/react";
import React from "react";

const AddCarPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const explore = Object.fromEntries(formData.entries());

    console.log(explore);

    const res = await fetch("http://localhost:8000/add-car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(explore),
    });

    const data = await res.json();
    console.log(data);
    
  };

  return (
    <div>
      <h1 className="flex justify-center font-bold text-2xl mb-5">
        Add Car
      </h1>

      <form onSubmit={onSubmit} className="p-10 space-y-8">
        <div className="grid md:mx-40 grid-cols-1 md:grid-cols-2 gap-8">

          {/* Car Name */}
          <div className="md:col-span-2">
            <TextField name="carName" isRequired>
              <Label>Car Name</Label>
              <Input placeholder="BMW" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Location */}
          <TextField name="Location" isRequired>
            <Label>Pickup Location</Label>
            <Input placeholder="Dhaka" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Category */}
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
                  <ListBox.Item id="SUV" textValue="SUV">SUV</ListBox.Item>
                  <ListBox.Item id="Sedan" textValue="Sedan">Sedan</ListBox.Item>
                  <ListBox.Item id="Hatchback" textValue="Hatchback">Hatchback</ListBox.Item>
                  <ListBox.Item id="Luxury" textValue="Luxury">Luxury</ListBox.Item>
                  <ListBox.Item id="BMW" textValue="BMW">BMW</ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Price */}
          <TextField name="price" type="number" isRequired>
            <Label>Daily Rent Price (USD)</Label>
            <Input type="number" placeholder="1299" className="rounded-2xl" />
            <FieldError />
          </TextField>

          {/* Seat */}
          <div className="md:col-span-2">
            <TextField name="Seat" type="number" isRequired>
              <Label>Seat Capacity</Label>
              <Input type="number" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/car.jpg"
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
                placeholder="Car description..."
                className="rounded-3xl"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Availability */}
          <div className="md:col-span-2">
            <TextField name="availability" isRequired>
              <Label>Availability Status</Label>
              <Input placeholder="Available / Unavailable" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full bg-cyan-500 text-white rounded-xl"
        >
          Add Car
        </Button>
      </form>
    </div>
  );
};

export default AddCarPage;