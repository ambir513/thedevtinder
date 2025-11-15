import { RegisterForm } from "@/features/auth/components/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description:
    "Register to your Devtinder account to connect with developers worldwide.",
};

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <RegisterForm />
    </main>
  );
}
