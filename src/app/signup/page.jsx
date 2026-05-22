"use client";

import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";
import toast from "react-hot-toast";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    console.log(data);

    if (data) {
      toast.success("Account created successfully 🎉");

      redirect("/login");
    }

    if (error) {
      toast.error("error");
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6">
      <div className="text-center my-4">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Create Account
        </h1>

        <p className="text-sm sm:text-base">
          Start your adventure with Wanderlust
        </p>
      </div>

      <Card className="w-full items-center border rounded-none p-4 sm:p-6">
        <Form
          onSubmit={onSubmit}
          className="flex w-full max-w-md flex-col gap-4"
        >
          <TextField
            isRequired
            name="name"
            type="text"
            className="w-full"
          >
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField
            name="image"
            type="url"
            className="w-full"
          >
            <Label>Image URL</Label>
            <Input placeholder="Image url" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  value
                )
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>

            <FieldError />
          </TextField>

          <div className="flex justify-center gap-2 w-full">
            <Button
              className="rounded-none w-full bg-cyan-500"
              type="submit"
            >
              Create Account
            </Button>
          </div>
        </Form>

        <div className="flex justify-center items-center gap-3 w-full my-5">
          <Separator className="flex-1" />

          <div className="whitespace-nowrap text-sm sm:text-base">
            Or sign up with
          </div>

          <Separator className="flex-1" />
        </div>

        <div className="w-full max-w-md">
          <Button
            onClick={handleGoogleSignin}
            variant="outline"
            className="w-full rounded-none"
          >
            <FcGoogle /> Sign up with Google
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;