import { LoginForm } from "@/features/auth/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - The Devtinder",
  description:
    "Login to your Devtinder account to connect with developers worldwide.",
};

export default function Page() {
  return (
    <main className="flex justify-center items-center mt-20">
      <LoginForm />
    </main>
  );
}
