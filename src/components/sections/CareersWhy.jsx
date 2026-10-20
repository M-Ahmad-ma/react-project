import { IconBubble } from "@/components/ui/IconBubble";
import { Reveal } from "@/components/ui/Reveal";
import { CAREERS_POINTS } from "@/data/jobs";

/** Maroon band explaining why people join the factory. */
export function CareersWhy({ id = "why-join" }) {
  return (
    <section id={id} className="relative overflow-hidden bg-maroon py-16 text-white">
      <div
        className="band-blur -inset-[10%_-5%]"
        style={{
          background:
            "radial-gradient(16rem 20rem at 12% 30%, rgb(233 214 220 / 22%), transparent 65%), radial-gradient(20rem 14rem at 52% 88%, rgb(233 214 220 / 16%), transparent 65%), radial-gradient(14rem 18rem at 88% 22%, rgb(233 214 220 / 20%), transparent 65%)",
          filter: "blur(14px)",
        }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        <Reveal as="h2" className="mb-12 text-center text-section">
          Why Work At Crispo?
        </Reveal>

        <ul className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
          {CAREERS_POINTS.map((point) => (
            <Reveal
              as="li"
              key={point.title}
              className="grid grid-cols-[auto_1fr] items-start gap-4 max-[560px]:grid-cols-1 max-[560px]:justify-items-start"
            >
              <IconBubble name={point.icon} />
              <div>
                <h3 className="mb-1 text-[1.125rem] font-semibold">{point.title}</h3>
                <p className="text-[0.9375rem] text-white/82">{point.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
