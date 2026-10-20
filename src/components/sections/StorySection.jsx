import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Reveal } from "@/components/ui/Reveal";
import { STORY_POINTS } from "@/data/about";

/** Image + copy split telling the factory story. */
export function StorySection({ id = "story" }) {
  return (
    <section id={id} className="section-y">
      <div className="container-x grid grid-cols-2 items-center gap-[clamp(1.5rem,5vw,4rem)] max-[960px]:grid-cols-1">
        <Reveal className="grid gap-4 justify-items-start">
          <h2 className="text-section">Small batches, carefully seasoned</h2>
          <p className="text-body">
            Every bag travels through the same short process: whole potatoes, cut fresh, seasoned
            with real spices, then fried in small batches so each slice curls and crisps evenly.
            Nothing is hidden, nothing is hurried.
          </p>

          <CheckList items={STORY_POINTS} />

          <Button as={Link} to="/stores" caps>
            Taste the difference
          </Button>
        </Reveal>

        <Reveal as="figure" delay={120} className="m-0 max-[960px]:order-first max-[960px]:mx-auto max-[960px]:w-full max-[960px]:max-w-[28rem]">
          <img
            src="/hero-chips.jpg"
            alt="Freshly fried Crispo chips cooling after a batch"
            width="454"
            height="372"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-card object-cover shadow-pop"
          />
        </Reveal>
      </div>
    </section>
  );
}
