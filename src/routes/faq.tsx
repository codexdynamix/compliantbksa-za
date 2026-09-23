import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContactSection, FaqSection, InteriorHero } from "@/components/sections";
import { Eyebrow } from "@/components/layout";
import { scrollToContactForm } from "@/lib/scroll";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  return (
    <>
      <InteriorHero
        kicker="Good to know"
        title={
          <>
            The useful answers, <em>up front.</em>
          </>
        }
        intro="A first conversation should feel straightforward. Here are the questions we hear most often."
        index="04"
      />
      <FaqSection />
      <section className="faq-callout">
        <div className="section-inner callout-inner">
          <div>
            <Eyebrow>Still wondering?</Eyebrow>
            <h2>
              Bring the question. We'll bring the <em>context.</em>
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToContactForm();
            }}
            className="button button-accent"
          >
            Start a conversation <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
