"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Form, FormRoot,Select, Input, Label, Modal,ListBox, Surface, TextArea, TextField} from "@heroui/react";

export function EditModal({ explore }) {

  const { _id, imageUrl, price, category, description, Seat, carName, Location, availability } = explore;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data,"from data");

    const res = await fetch(`http://localhost:8000/details/${explore._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);
  }
  return (
    <Modal>
      <Button>Edit </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-4xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                 <form
                            onSubmit={onSubmit}
                            className=" space-y-8 "
                          >
                            <div className="grid md:mx-1 grid-cols-1 md:grid-cols-2 gap-8">
                              {/* Destination Name */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={explore.carName} name="carName" isRequired>
                                  <Label className="text-sm font-medium">Car Name</Label>
                                  <Input placeholder="BMW"  className="rounded-2xl" />
                                  <FieldError />
                                </TextField>
                              </div>
                
                              
                              <TextField defaultValue={explore.Location} name="Location" isRequired>
                                <Label>Pickup Location</Label>
                                <Input placeholder="Dhaka" className="rounded-2xl" />
                                <FieldError />
                              </TextField>
                
                              {/* Category - Updated Select Component */}
                              <div>
                                <Select
                                  name="category"
                                  defaultValue={explore.category}
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
                              <TextField defaultValue={explore.price} name="price" type="number" isRequired>
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
                                <TextField defaultValue={explore.Seat} name="Seat" type="number" isRequired>
                                  <Label>Seat Capacity</Label>
                                  <Input type="number" className="rounded-2xl" />
                                  <FieldError/>
                                </TextField>
                              </div>
                
                              {/* Image URL - Removed preview */}
                              <div className="md:col-span-2">
                                <TextField defaultValue={explore.imageUrl} name="imageUrl" isRequired>
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
                                <TextField defaultValue={explore.description} name="description" isRequired>
                                  <Label>Description</Label>
                                  <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-3xl"
                                  />
                                  <FieldError />
                                </TextField>
                              </div>
                              <div className="md:col-span-2">
                                <TextField defaultValue={explore.availability} name="availability" isRequired>
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
                            <Button  type="submit" slot="close">Save</Button>
                            
                          </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
             
              
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}