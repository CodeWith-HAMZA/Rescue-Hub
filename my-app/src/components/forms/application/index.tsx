"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createApplication } from "@/services/applicants";
import useApplication from "@/hooks/useApplication";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { PiSpinner } from "react-icons/pi";

const schema = z.object({
  description: z.string().min(1, "Description is required"),
  // status: z.enum(["ongoing", "resolved", "unresolved"], {
  //   errorMap: () => ({ message: "Status is required" }),
  // }),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  contactName: z.string().min(1, "Contact Name is required"),
  contactPhone: z.string().min(1, "Contact Phone is required"),
  contactEmail: z.string().email("Invalid email address"),
  magnitude: z.string().min(1, "Magnitude is required"),
  earthquakeLocation: z.string().min(1, "Earthquake Location is required"),
  earthquakeDate: z.date(),
  floodSeverity: z.enum(["Minor", "Moderate", "Severe"], {
    errorMap: () => ({ message: "Flood Severity is required" }),
  }),
  floodLocation: z.string().min(1, "Flood Location is required"),
  floodDate: z.date(),
});

export default function ApplicationForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  // const { createApplicationMutation } = useApplication();
  // const res = useQuery({
  //   queryKey: ["thi"],
  //   queryFn: async () => {
  //     const { data } = await axios.get("https://dummyjson.com/test");
  //     return data;
  //   },
  // });

  // pending", "processing", "eligible", "not_eligible
  const onSubmit = async (data) => {
    console.log(data);

    // createApplicationMutation.mutate(data, {
    //   onSuccess(data, variables, context) {
    //     toast.success("Successfully Applied For Natural Disaster Emergency");
    //   },
    //   onError(data, variables, context) {
    //     toast.error("Something went wrong");
    //   },
    // });
    setLoading(true);
    const res = await createApplication({ ...data });
    setLoading(false);

    toast.success("Successfully Applied For Natural Disaster Emergency");

    // Handle form submission
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Natural Disaster Report
        </CardTitle>
        <CardDescription>
          Please fill out the form below to report a natural disaster.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    id="description"
                    rows={3}
                    placeholder="Provide details about the disaster..."
                  />
                )}
              />
              {errors.description && (
                <span className="text-red-500">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} id="city" placeholder="Enter city" />
                  )}
                />
                {errors.city && (
                  <span className="text-red-500">{errors.city.message}</span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="country">Country</Label>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="country"
                      placeholder="Enter country"
                    />
                  )}
                />
                {errors.country && (
                  <span className="text-red-500">{errors.country.message}</span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-name">Contact Name</Label>
                <Controller
                  name="contactName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="contact-name"
                      placeholder="Enter contact name"
                    />
                  )}
                />
                {errors.contactName && (
                  <span className="text-red-500">
                    {errors.contactName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="contact-phone">Contact Phone</Label>
                <Controller
                  name="contactPhone"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="contact-phone"
                      type="tel"
                      placeholder="Enter contact phone"
                    />
                  )}
                />
                {errors.contactPhone && (
                  <span className="text-red-500">
                    {errors.contactPhone.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Controller
                  name="contactEmail"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="contact-email"
                      type="email"
                      placeholder="Enter contact email"
                    />
                  )}
                />
                {errors.contactEmail && (
                  <span className="text-red-500">
                    {errors.contactEmail.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="magnitude">Magnitude</Label>
                <Controller
                  name="magnitude"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="magnitude"
                      type="number"
                      placeholder="Enter magnitude"
                    />
                  )}
                />
                {errors.magnitude && (
                  <span className="text-red-500">
                    {errors.magnitude.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="earthquake-location">
                  Earthquake Location{" "}
                  <a
                    target="_blank"
                    className="text-xs text-black hover:text-black underline"
                    href="https://www.gps-coordinates.net/#longitude"
                  >
                    View Guide (Learn More)?
                  </a>
                </Label>
                <Controller
                  name="earthquakeLocation"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="earthquake-location"
                      placeholder="Enter Lat | Lon"
                    />
                  )}
                />
                {errors.earthquakeLocation && (
                  <span className="text-red-500">
                    {errors.earthquakeLocation.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="earthquake-date">Earthquake Date</Label>
                <Controller
                  name="earthquakeDate"
                  control={control}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start font-normal"
                          onClick={() => field.onChange(new Date())} // This will set the current date as default value
                        >
                          {field.value
                            ? field.value.toLocaleDateString()
                            : "Pick a date"}
                          <div className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => field.onChange(date)}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.earthquakeDate && (
                  <span className="text-red-500">
                    {errors.earthquakeDate.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="flood-severity">Flood Severity</Label>
                <Controller
                  name="floodSeverity"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Minor">Minor</SelectItem>
                        <SelectItem value="Moderate">Moderate</SelectItem>
                        <SelectItem value="Severe">Severe</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.floodSeverity && (
                  <span className="text-red-500">
                    {errors.floodSeverity.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="flood-location">
                  Flood Location{" "}
                  <a
                    target="_blank"
                    className="text-xs text-black hover:text-black underline"
                    href="https://www.gps-coordinates.net/#longitude"
                  >
                    View Guide (Learn More)?
                  </a>
                </Label>
                <Controller
                  name="floodLocation"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="flood-location"
                      placeholder="Enter Lat | Lon"
                    />
                  )}
                />
                {errors.floodLocation && (
                  <span className="text-red-500">
                    {errors.floodLocation.message}
                  </span>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="flood-date">Flood Date</Label>
                <Controller
                  name="floodDate"
                  control={control}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start font-normal"
                          onClick={() => field.onChange(new Date())} // This will set the current date as default value
                        >
                          {field.value
                            ? field.value.toLocaleDateString()
                            : "Pick a date"}
                          <div className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => field.onChange(date)}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
                {errors.floodDate && (
                  <span className="text-red-500">
                    {errors.floodDate.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Submit Report"}
            {loading ? <PiSpinner /> : null}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end gap-2"></CardFooter>
    </Card>
  );
}
