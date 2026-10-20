import { Reveal } from "@/components/ui/Reveal";
import { Scallop } from "@/components/ui/Scallop";
import { SectionHead } from "@/components/ui/SectionHead";
import { Disclosure } from "@/components/ui/Disclosure";
import { FAQ } from "@/data/contact";

export function FaqList({ id = "faq" }) {
  return (
    <Scallop id={id}>
      <div className="container-x">
        <Reveal>
          <SectionHead
            title="Frequently Asked Questions"
            text="The things people ask us most often."
          />
        </Reveal>

        <ul className="mx-auto grid max-w-[56rem] gap-4">
          {FAQ.map((entry) => (
            <li key={entry.q}>
              <Reveal>
                <Disclosure summary={entry.q}>
                  <p>{entry.a}</p>
                </Disclosure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Scallop>
  );
}
