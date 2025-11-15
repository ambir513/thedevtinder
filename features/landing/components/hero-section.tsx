import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoCloud from "./logo-cloud";

export function HeroSection() {
  return (
    <section className="max-auto">
      <div className="flex md:justify-between xl:p-20 lg:p-10 items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="sm:text-4xl text-3xl lg:w-xl w-fit tracking-tight leading-9">
              The Hub for Modern Developers.
            </h1>
            <p className="text-muted-foreground lg:w-xl md:w-sm">
              Global connections, effortless collaboration, easy posting, and a
              powerful resume builder — all in one platform.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <Button className="-tracking-tight sm:w-sm w-full">
              <Github /> <span>Sign up with Github</span>
            </Button>
            <Button
              className="-tracking-tight sm:w-sm w-full"
              variant={"secondary"}
              asChild
            >
              <Link href={"/auth/login"}>
                <Mail /> <span>Sign up with Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:block hidden">
          <Image
            className=" active:scale-98 rounded-lg"
            draggable={false}
            src={"/hero-image.png"}
            alt="Collaboration with developers"
            width={400}
            height={400}
            priority={true}
          />
        </div>
      </div>
      <LogoCloud />
    </section>
  );
}
