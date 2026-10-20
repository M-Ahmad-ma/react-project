import { Icon } from "@/lib/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Scallop } from "@/components/ui/Scallop";
import { SectionHead } from "@/components/ui/SectionHead";
import { STORES } from "@/data/stores";

export function StoreGrid({ id = "stockists" }) {
  return (
    <Scallop id={id}>
      <div className="container-x">
        <Reveal>
          <SectionHead
            title="Shops Stocking Crispo"
            text="Six neighborhood stockists and counting — call ahead for your favorite flavor."
          />
        </Reveal>

        <ul className="grid grid-cols-3 gap-6 max-[1080px]:grid-cols-2 max-[560px]:grid-cols-1">
          {STORES.map((store, index) => (
            <Reveal
              as="li"
              key={store.name}
              delay={index * 60}
              className="grid content-start gap-2 rounded-card border-2 border-ink bg-white p-6 shadow-pop-sm transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <span className="mb-2 grid size-11 place-items-center rounded-full bg-yellow text-ink">
                <Icon name="pin" className="size-5" />
              </span>

              <h3 className="text-[1rem] font-semibold">{store.name}</h3>
              <p className="text-[0.9375rem] text-body">{store.address}</p>
              <p className="text-[0.8125rem] text-muted">{store.hours}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Scallop>
  );
}
