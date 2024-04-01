"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { BiRightArrow } from "react-icons/bi";
import { TbArrowNarrowRight } from "react-icons/tb";
const ErrorText = ({ children } ) => {
  return <p className="text-red-400 text-sm">{children}</p>;
};

export default function Onboarding() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      // Your form submission logic goes here

      // Validate all fields manually
      if (
        !data.email ||
        !data.password ||
        !data.confirmPassword ||
        !data.gender ||
        !data.dateOfBirth
      ) {
        toast.error("Please fill in all required fields");
        return;
      }

      // Check if password and confirm password match
      if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        toast.error("Invalid email format");
        return;
      }

      // Additional custom validations can be added here

      // If all validations pass, log the form data
      console.log("Form data:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }

    setSubmitting(true);
    // Your form submission logic goes here
  };

  return (
    <div className="flex items-stretch min-h-screen  px-4">
      <div className="mx-auto my-12 max-w-3xl border-2 px-8 py-12 border-gray-100 rounded-lg  w-full">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-semibold tracking-tighter">
              Onboarding
            </span>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tighter">
              Welcome to the App
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Let`s get you set up.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="john@example.com"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                  id="fullname"
                  placeholder="Enter your full name"
                  {...register("fullname")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  placeholder="Enter your last name"
                  {...register("lastname")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <ErrorText>{errors.password.message}</ErrorText>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <ErrorText>{errors.confirmPassword.message}</ErrorText>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  {...register("gender", { required: "Gender is required" })}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <ErrorText>{errors.gender.message}</ErrorText>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  {...register("dateOfBirth", {
                    required: "Date of Birth is required",
                  })}
                />
                {errors.dateOfBirth && (
                  <ErrorText>{errors.dateOfBirth.message}</ErrorText>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="bio"
                  placeholder="Enter your bio"
                  {...register("bio")}
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={submitting}>
              Continue &nbsp; <TbArrowNarrowRight size={20} />
            </Button>
            <Link
              className="inline-flex items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white h-10 w-full px-4 text-sm shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Continue without an account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
