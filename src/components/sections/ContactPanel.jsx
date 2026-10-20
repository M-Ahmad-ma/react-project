import { IconBubble } from "@/components/ui/IconBubble";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/form/ContactForm";
import { CheckList } from "@/components/ui/CheckList";
import { CONTACT_CHANNELS } from "@/data/contact";

const PROMISES = [
  "Bulk and catering orders from 20 bags",
  "Wholesale list for shops and stockists",
  "Press and collaboration requests",
];

export function ContactPanel() {
  return (
    <section className="section-y">
      <div className="container-x">
        <ul className="mb-16 grid grid-cols-4 gap-6 max-[1080px]:grid-cols-2 max-[560px]:grid-cols-1">
          {CONTACT_CHANNELS.map((channel) => (
            <Reveal
              as="li"
              key={channel.title}
              className="grid justify-items-start gap-2 rounded-card bg-white p-6 shadow-card"
            >
              <IconBubble name={channel.icon} />
              <h3 className="mt-2 text-[1rem] font-semibold">{channel.title}</h3>
              <p className="text-[0.9375rem] text-body">{channel.text}</p>
              <p className="text-[0.8125rem] text-muted">{channel.note}</p>
            </Reveal>
          ))}
        </ul>

        <div className="grid grid-cols-[1.05fr_1fr] items-center gap-[clamp(1.5rem,4vw,3.5rem)] rounded-card border-2 border-ink bg-cream p-[clamp(1.5rem,1rem+2.5vw,3rem)] shadow-pop max-[960px]:grid-cols-1">
          <Reveal className="grid gap-4 justify-items-start">
            <h2 className="text-section">Send a message</h2>
            <p className="text-body">
              Tell us what you need and we will point you to the right flavor, the right store or
              the right person.
            </p>

            <CheckList items={PROMISES} tight />
          </Reveal>

          <Reveal delay={120}>
            <ContactForm className="grid gap-4" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
