import {
  FileUser,
  Image,
  MessageCircle,
  Network,
  Sparkles,
  UserPen,
} from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="space-y-8 md:space-y-16">
        <div className="relative z-10 space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Why Choose Our DevTinder?
          </h2>
          <p className="text-sm lg:w-xl mx-auto">
            Discover the advantages of using DevTinder for your networks. Our
            platform is designed to enhance your productivity, collaborative
            your Resume maker, and provide you with the tools you need to
            succeed.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Network className="size-4" />
              <h3 className="text-sm font-medium">Networks</h3>
            </div>
            <p className="text-sm">Make connections with relevant people.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="size-4" />
              <h3 className="text-sm font-medium">Collaboration</h3>
            </div>
            <p className="text-sm">
              Chats with connected people and share your ideas.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Image className="size-4" />
              <h3 className="text-sm font-medium">Post</h3>
            </div>
            <p className="text-sm">Upload your ideas and projects.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <UserPen className="size-4" />

              <h3 className="text-sm font-medium">Manage Profile</h3>
            </div>
            <p className="text-sm">
              Manage your profile in professional manner.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileUser className="size-4" />

              <h3 className="text-sm font-medium">Resume Maker</h3>
            </div>
            <p className="text-sm">
              Make your own resume in a professional ways
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">AI Support</h3>
            </div>
            <p className="text-sm">It supports helping developers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
