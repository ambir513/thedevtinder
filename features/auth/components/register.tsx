"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { emailSchema, LoginSchema, nameSchema, passwordSchema } from "..";
import { file, set, z } from "zod";
import { Login, SignUp } from "../actions";
import { toast } from "sonner";

export function RegisterForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<{
    status: boolean;
    event: string;
  }>({ status: false, event: "" });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setIsLoading({ status: true, event: "Login" });

      const response = await Login(value);

      setIsLoading({ status: false, event: "" });

      if (response.status) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    },
  });

  return (
    <div className={"flex flex-col gap-6 lg:w-lg mx-5 w-full mt-22"} {...props}>
      <Card>
        <CardHeader>
          <div className="mb-2">
            <Image
              src={"/favicon.svg"}
              alt="The DevTinder Logo"
              width={50}
              height={50}
            />
          </div>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <form.Field
              name="name"
              validators={{
                onChange: ({ value }) => {
                  const isValidField = nameSchema.safeParse(value);

                  if (isValidField.error) {
                    return isValidField.error?.issues[0]?.message;
                  } else {
                    return undefined;
                  }
                },
              }}
              children={(field) => {
                return (
                  <>
                    <Field>
                      <FieldLabel htmlFor="name">Full Name</FieldLabel>
                      <Input
                        id="name"
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </Field>
                    {!field.state.meta.isValid && (
                      <FieldDescription className="text-red-500 mt-1">
                        {field.state.meta.errors.join(", ")}
                      </FieldDescription>
                    )}
                  </>
                );
              }}
            />
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) => {
                  const isValidField = emailSchema.safeParse(value);

                  if (isValidField.error) {
                    return isValidField.error?.issues[0]?.message;
                  } else {
                    return undefined;
                  }
                },
              }}
              children={(field) => {
                return (
                  <>
                    <Field className="mt-4">
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="m@example.com"
                        required
                      />
                    </Field>
                    {!field.state.meta.isValid && (
                      <FieldDescription className="text-red-500 mt-1">
                        {field.state.meta.errors.join(", ")}
                      </FieldDescription>
                    )}
                  </>
                );
              }}
            />
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) => {
                  const isValidField = passwordSchema.safeParse(value);

                  if (isValidField.error) {
                    return isValidField.error?.issues[0]?.message;
                  } else {
                    return undefined;
                  }
                },
              }}
              children={(field) => {
                return (
                  <>
                    <Field>
                      <div className="flex items-center mt-4">
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                      </div>
                      <div className="relative">
                        <Input
                          id="password"
                          type={isVisible ? "text" : "password"}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="••••••••••••••••"
                          className="pr-9"
                        />
                        <div
                          onClick={() =>
                            setIsVisible((prevState) => !prevState)
                          }
                          className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
                        >
                          {isVisible ? (
                            <EyeOffIcon className="size-5 m-2" />
                          ) : (
                            <EyeIcon className="size-5 m-2" />
                          )}
                          <span className="sr-only">
                            {isVisible ? "Hide password" : "Show password"}
                          </span>
                        </div>
                      </div>
                    </Field>
                    {!field.state.meta.isValid && (
                      <FieldDescription className="text-red-500 pt-3">
                        {field.state.meta.errors.join(", ")}
                      </FieldDescription>
                    )}
                  </>
                );
              }}
            />

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button
                  type="submit"
                  disabled={isLoading.status}
                  className="w-full mt-6"
                >
                  {isLoading.event === "Create" && <Spinner />}
                  <span>Create Account</span>
                </Button>
              )}
            />
          </form>
          <Button variant="outline" type="button" className="w-full my-2">
            Sign in with Github
          </Button>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/auth/login">Login</Link>
          </FieldDescription>
        </CardContent>
      </Card>
    </div>
  );
}
