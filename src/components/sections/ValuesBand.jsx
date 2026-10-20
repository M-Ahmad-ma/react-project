import { CheckList } from "@/components/ui/CheckList";
import { Reveal } from "@/components/ui/Reveal";
import { VALUES } from "@/data/about";

/** Quality promise checklist on the maroon band. */
export function ValuesBand({ title = "Our quality promise" }) {
  return (
    <section className="relative overflow-hidden bg-maroon py-16 text-white">
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
        <Reveal as="h2" className="mb-8 text-center text-section">
          {title}
        </Reveal>

        <CheckList items={VALUES} columns={2} itemClassName="text-white/88" />
      </div>
    </section>
  );
}
