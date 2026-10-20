import { Link } from "react-router-dom";
import { Seo } from "@/components/layout/Seo";
import { Button } from "@/components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found — Crispo" />

      <section className="section-y">
        <div className="container-x grid justify-items-center gap-6 text-center">
          <span
            role="img"
            aria-label="bowl of chips"
            className="grid size-24 place-items-center rounded-full border-2 border-ink bg-yellow text-4xl shadow-pop"
          >
            🥔
          </span>

          <h1 className="text-hero">This page went for a walk</h1>

          <p className="max-w-[46ch] text-body">
            The page you were after does not exist — but there is plenty of crunch on the way.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button as={Link} to="/">
              Back home
            </Button>
            <Button as={Link} to="/flavors" variant="ghost">
              Explore flavors
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
