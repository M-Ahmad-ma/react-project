import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/** Maroon closing call to action. */
export function CtaBand({
  id,
  title = "Ready To Crunch?",
  text = "Handpicked favorites with irresistible taste and perfect crisp.",
  to = "/stores",
  cta = "Shop Now",
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-maroon py-20 text-center text-white"
    >
      <div
        className="band-blur -inset-[20%_-5%]"
        style={{
          background:
            "radial-gradient(22rem 18rem at 16% 40%, rgb(233 214 220 / 22%), transparent 65%), radial-gradient(18rem 22rem at 82% 60%, rgb(233 214 220 / 20%), transparent 65%), radial-gradient(16rem 16rem at 50% 10%, rgb(233 214 220 / 14%), transparent 65%)",
          filter: "blur(16px)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10 grid justify-items-center gap-4">
        <Reveal as="h2" className="text-section">
          {title}
        </Reveal>

        <Reveal as="p" delay={80} className="max-w-[52ch] text-white/82">
          {text}
        </Reveal>

        <Reveal delay={160} className="mt-2">
          <Button as={Link} to={to}>
            {cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
