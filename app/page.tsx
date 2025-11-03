import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen gap-5 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image
        className="dark:invert  "
        draggable={false}
        src="/favicon.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
      <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
        <h1 className="text-lg font-semibold">Welcome to DevTinder</h1>
        <p className="text-sm text-muted-foreground">
          A platform to connect developers around the world.
        </p>
      </div>
    </div>
  );
}
