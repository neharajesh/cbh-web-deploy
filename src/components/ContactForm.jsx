"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().includes("@"),
  subject: z.string(),
  message: z.string(),
});

export const ContactForm = () => {
  const { register, handleSubmit } = useForm({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (values) => {
    console.log(values);
    const data = {
      service_id: "",
      template_id: "",
      user_id: "",
    };
  };

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <Label>Name</Label>
          <Input
            placeholder="What do we call you?"
            {...register("name", { required: true })}
          />
        </div>

        <div>
          <Label>Email</Label>
          <Input
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
        </div>

        <div>
          <Label>Subject</Label>
          <Input
            placeholder="Email Subject"
            {...register("subject", { required: true })}
          />
        </div>

        <div>
          <Label>Message</Label>
          <Textarea
            placeholder="Enter your message here"
            {...register("message", { required: true })}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
