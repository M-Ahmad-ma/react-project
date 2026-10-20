import { Icon } from "@/lib/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { CAREERS_BENEFITS } from "@/data/jobs";

export function CareersBenefits({ id = "benefits" }) {
  return (
    <section id={id} className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHead
            title="What We Offer"
            text="Nothing revolutionary — just the things that make a job worth keeping."
          />
        </Reveal>

        <ul className="grid grid-cols-3 gap-6 max-[1080px]:grid-cols-2 max-[560px]:grid-cols-1">
          {CAREERS_BENEFITS.map((benefit) => (
            <Reveal
              as="li"
              key={benefit.title}
              className="grid content-start gap-2 rounded-card bg-white p-6 shadow-card"
            >
              <span className="grid size-11 place-items-center rounded-full border-2 border-ink bg-yellow text-ink">
                <Icon name={benefit.icon} className="size-5" />
              </span>
              <h3 className="mt-2 text-[1rem] font-semibold">{benefit.title}</h3>
              <p className="text-[0.9375rem] text-body">{benefit.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
