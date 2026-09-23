import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { InteriorHero } from "@/components/sections";

export const Route = createFileRoute("/$")({ component: NotFound });

function NotFound() {
  return (
    <>
      <InteriorHero
        kicker="404 / Not found"
        title={
          <>
            That page took a <em>wrong turn.</em>
          </>
        }
        intro="The page you requested could not be found. Let's get you back to the useful stuff."
        index="404"
      />
      <section className="not-found">
        <div className="section-inner">
          <Link to="/" className="button button-dark">
            Back to home <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
