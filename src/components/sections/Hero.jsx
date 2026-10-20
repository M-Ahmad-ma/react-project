import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream py-[clamp(2.5rem,1rem+6vw,5rem)]">
      <div className="container-x relative grid grid-cols-[1fr_1.05fr] items-center gap-[clamp(1.5rem,4vw,3rem)] max-[960px]:grid-cols-1 max-[960px]:text-center">
        <Reveal>
          <h1 className="text-hero">
            Feel the Ultimate Taste of Every Crisp
            <span className="inline-block translate-y-[0.08em]" role="img" aria-label="bowl of chips">
              🥔
            </span>
          </h1>

          <p className="mt-4 max-w-[46ch] text-body max-[960px]:mx-auto">
            Made from carefully selected potatoes and seasoned to perfection, every crisp delivers
            bold flavor and an unforgettable crunch you&apos;ll crave again and again.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 max-[960px]:justify-center">
            <Button as={Link} to="/flavors">
              Explore Flavors
            </Button>
            <Button as={Link} to="/stores" variant="ghost">
              Shop Now
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative isolate grid place-items-center">
          <span className="hero-glow" aria-hidden="true" />
          <img
            src="/hero-chips.jpg"
            alt="Crispo golden potato crisps with a splash of flavour"
            width="454"
            height="372"
            fetchPriority="high"
            className="animate-float relative w-full max-w-[38rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
