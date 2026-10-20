import { Reveal } from "@/components/ui/Reveal";
import { STATS } from "@/data/about";

export function StatsBand() {
  return (
    <section className="bg-pink-soft py-16">
      <div className="container-x">
        <ul className="grid grid-cols-4 gap-8 max-[960px]:grid-cols-2 max-[560px]:gap-6">
          {STATS.map((stat) => (
            <Reveal as="li" key={stat.label} className="grid justify-items-center gap-1 text-center">
              <span className="text-hero font-bold text-maroon">{stat.value}</span>
              <span className="text-[0.9375rem] text-muted">{stat.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
