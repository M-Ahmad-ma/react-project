import { Link } from "react-router-dom";
import { Scallop } from "@/components/ui/Scallop";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Reveal } from "@/components/ui/Reveal";
import { FLAVOR_POINTS } from "@/data/flavors";

/** Pink scalloped band: the circular product shot beside the flavour promise. */
export function FlavorsBand({ id = "flavors" }) {
  return (
    <Scallop id={id}>
      <img
        src="/flavors-deco-1.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[7%] right-[2%] w-[7rem] -rotate-[8deg] select-none max-[560px]:hidden"
      />
      <img
        src="/flavors-deco-2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[3%] bottom-[7%] w-[9.5rem] select-none max-[560px]:hidden"
      />

      <div className="container-x relative grid grid-cols-[0.95fr_1fr] items-center gap-[clamp(1.5rem,5vw,4rem)] max-[960px]:grid-cols-1 max-[960px]:text-center">
        <Reveal as="figure" className="m-0 grid place-items-center">
          <div className="grid aspect-square w-[min(100%,30rem)] place-items-center rounded-full bg-yellow shadow-[0_26px_50px_-26px_rgb(127_26_60/45%)]">
            <img
              src="/flavors-circle.jpg"
              alt="Enjoying a bag of Crispo chips"
              width="280"
              height="280"
              loading="lazy"
              className="size-[92%] rounded-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-section mb-4">
            From Classic to Bold — Discover a Flavor for Every Mood.
          </h2>
          <p className="mb-5 text-[#5d2440]">
            From Classic To Spicy—There&apos;s A Flavor For Every Craving.
          </p>

          <CheckList items={FLAVOR_POINTS} className="mb-6" itemClassName="text-[#40203a]" />

          <Button as={Link} to="/flavors" caps>
            Explore Flavors
          </Button>
        </Reveal>
      </div>
    </Scallop>
  );
}
