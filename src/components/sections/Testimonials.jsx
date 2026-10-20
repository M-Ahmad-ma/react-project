import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Stars } from "@/components/ui/Stars";
import { TESTIMONIALS } from "@/data/flavors";

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden py-16 pb-20"
      style={{
        background:
          "radial-gradient(30rem 22rem at 6% 12%, rgb(238 153 194 / 30%), transparent 70%), radial-gradient(28rem 20rem at 94% 88%, rgb(255 203 48 / 22%), transparent 70%), var(--color-pink-soft)",
      }}
    >
      <div className="container-x">
        <Reveal>
          <SectionHead title="What Our Customers Say" />
        </Reveal>

        <ul className="grid grid-cols-3 gap-6 max-[1080px]:grid-cols-2 max-[560px]:grid-cols-1">
          {TESTIMONIALS.map((testimonial) => (
            <Reveal
              as="li"
              key={testimonial.name}
              className="grid content-start gap-3 rounded-card bg-white px-6 py-8 shadow-card"
            >
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt=""
                  loading="lazy"
                  width="44"
                  height="44"
                  className="size-11 flex-none rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[1rem] font-semibold leading-[1.3]">{testimonial.name}</h3>
                  <p className="text-[0.8125rem] text-muted">{testimonial.role}</p>
                </div>
              </div>

              <Stars />

              <p className="text-[0.9375rem] text-body">&ldquo;{testimonial.quote}&rdquo;</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
