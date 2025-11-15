import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection() {
  return (
    <div className="sm:m-20 space-y-7 py-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Answers to common questions about DevTinder — collaboration, chat,
          resume building, and our AI tech news feed. Still need help? Reach out
          to our support team.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg "
        defaultValue="item-1"
      >
        {questions.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
          >
            <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 px-4">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-muted-foreground">
        Can't find what you're looking for? Contact our{" "}
        <a href="#" className="text-primary hover:underline">
          customer support team
        </a>
      </p>
    </div>
  );
}

const questions = [
  {
    id: "item-1",
    title: "What is DevTinder?",
    content:
      "DevTinder is a social and productivity platform for developers — combining developer-focused chat & matching, collaborative project spaces, a resume builder, and an AI-curated tech news feed.",
  },
  {
    id: "item-2",
    title: "Who should use DevTinder?",
    content:
      "Individual developers, bootcamp grads, hiring engineers, and remote teams use DevTinder to discover collaborators, build a stronger developer profile, and stay updated on AI and dev trends.",
  },
  {
    id: "item-3",
    title: "What features does DevTinder offer?",
    content:
      "Chat & matches, team and group conversations, collaborative project boards, an advanced resume builder (export to PDF/ATS-friendly formats), and a personalized AI tech news stream tailored to your interests.",
  },
  {
    id: "item-4",
    title: "Is there a free plan or trial?",
    content:
      "Yes — the Community plan is free for individual developers and includes core chat, basic resume tools, and weekly AI news. A Pro plan unlocks collaboration, unlimited teams, advanced resume exports, and priority support.",
  },
  {
    id: "item-5",
    title: "How does collaboration work?",
    content:
      "Create project spaces, invite teammates, collaborate in real time on notes and boards, and track file/version history. Permissions let you control who can edit or view project content.",
  },
  {
    id: "item-6",
    title: "What about privacy and data export?",
    content:
      "Your profile and messages are private by default. You can export your resume and profile data at any time. We follow industry-standard practices for data protection — see our Privacy Policy for details.",
  },
  {
    id: "item-7",
    title: "How do I get help or support?",
    content:
      "Access documentation, community forums, and reports from inside the app. Pro users receive priority support and early access to new features and betas.",
  },
  {
    id: "item-8",
    title: "How do I get started?",
    content:
      "Sign up with your email or GitHub, import or create a resume, join the community, and start matching or creating projects right away.",
  },
];
