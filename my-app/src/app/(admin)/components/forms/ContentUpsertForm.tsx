"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { contentKeys } from "@/utils/constants";
import { useUpsertContent } from "@/hooks/api/content/mutations/useUpsertContent";

const languages = contentKeys;

const FormSchema = z.object({
  keys: z.string({
    required_error: "Please select an Option.",
  }),
  value: z.string({
    required_error: "Please select an Option.",
  }),
});

export function ContentUpsertForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const contentUpsert = useUpsertContent();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    contentUpsert.mutate([{ key: data.keys, value: data.value }]);
    toast.success("Content Updated Successfully");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="keys"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Select Content Options</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "justify-between w-full",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? languages.find((key) => key.key === field.value)
                            ?.label
                        : "Select Content Options To Edit Them"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full">
                  <Command>
                    <CommandInput placeholder="Search language..." />
                    <CommandList>
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {languages.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.key}
                            onSelect={() => {
                              form.setValue("keys", language.key);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.key === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the Content Settings that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content Of The Site</FormLabel>
              <FormControl>
                <Textarea placeholder="content..." {...field} />
              </FormControl>
              <FormDescription>Add your content here</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={contentUpsert.isPending}>
          Update Changes
        </Button>
      </form>
    </Form>
  );
}
