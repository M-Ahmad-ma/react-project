import { Icon } from "@/lib/icons";
import { Avatar } from "@/components/ui/Avatar";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Tag } from "@/components/ui/Tag";
import { OWNER, TEAM } from "@/data/team";

/** Owner profile + the team grid. */
export function TeamSection({ id = "team" }) {
  return (
    <section id={id} className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHead
            title="The People Behind The Bags"
            text="A small crew in a converted warehouse, obsessed with one thing: a better crisp."
          />
        </Reveal>

        {/* --- Owner --------------------------------------------------- */}
        <Reveal className="mb-16">
          <div className="grid grid-cols-[auto_1fr] items-center gap-[clamp(1.5rem,4vw,3rem)] rounded-card border-2 border-ink bg-cream p-[clamp(1.5rem,1rem+2.5vw,3rem)] shadow-pop max-[760px]:grid-cols-1 max-[760px]:text-center">
            <div className="relative justify-self-center">
              <Avatar
                src={OWNER.photo}
                initials={OWNER.initials}
                alt={OWNER.name}
                className="size-36 text-4xl"
              />
              <span className="absolute -right-2 -bottom-2 grid size-12 place-items-center rounded-full border-2 border-ink bg-yellow text-ink">
                <Icon name="spark" className="size-5" />
              </span>
            </div>

            <div className="grid gap-4 justify-items-start max-[760px]:justify-items-center">
              <div className="grid gap-1 text-center max-[760px]:justify-items-center">
                <span className="text-[0.8125rem] font-semibold tracking-[0.06em] text-maroon uppercase">
                  Owner
                </span>
                <h3 className="text-section">{OWNER.name}</h3>
                <p className="text-[1rem] font-medium text-body">{OWNER.role}</p>
              </div>

              <p className="text-body">{OWNER.bio}</p>

              <blockquote className="w-full rounded-card border-2 border-ink bg-yellow px-5 py-4 text-[0.9375rem] text-ink">
                &ldquo;{OWNER.quote}&rdquo;
              </blockquote>

              <ul className="flex flex-wrap justify-center gap-2">
                {OWNER.credentials.map((credential) => (
                  <li key={credential.label}>
                    <Tag icon={credential.icon}>{credential.label}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* --- Team ---------------------------------------------------- */}
        <ul className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
          {TEAM.map((member) => (
            <Reveal
              as="li"
              key={member.name}
              className="grid content-start gap-3 rounded-card border-2 border-ink bg-white p-6 shadow-pop-sm transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <Avatar
                src={member.photo}
                initials={member.initials}
                alt={member.name}
                className="size-16 text-lg"
              />

              <div>
                <h3 className="text-[1rem] font-semibold">{member.name}</h3>
                <p className="text-[0.8125rem] font-medium text-maroon">{member.role}</p>
              </div>

              <p className="text-[0.9375rem] text-body">{member.bio}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
