"use client";

import { z } from "zod";
import Container from "@/components/container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Button from "@/components/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { send } from "@/lib/mail";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaHackerrank, FaInstagram, FaLinkedin, FaMediumM, FaStackOverflow } from "react-icons/fa";
import { PiDevToLogoFill } from "react-icons/pi";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").max(254, "254 characters max"),
  message: z.string().min(1, "Message is required"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    send(values);
  }

  return (
    <Container className="justify-center items-center gap-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="your message"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" text="Submit" />
        </form>
      </Form>

      <div className="flex gap-6 [&>*:hover]:opacity-50 [&>*]:duration-300">
        <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/gsampaiowz/")} size={30}/>
        <FaGithub onClick={() => window.open("https://github.com/gsampaiowz")} size={30}/>
        <FaInstagram onClick={() => window.open("https://www.instagram.com/gsampaiowz/")} size={30}/>
        {/* <FaXTwitter size={30}/> */}
        <FaStackOverflow onClick={() => window.open("https://stackoverflow.com/users/21460112/gsampaiowz")} size={30}/>
        <FaMediumM onClick={() => window.open("https://medium.com/@gsampaiowz")} size={30}/>
        <PiDevToLogoFill onClick={() => window.open("https://pidev.to/gsampaiowz")} size={30}/>
        <FaHackerrank size={30}/>
      </div>
    </Container>
  );
}
