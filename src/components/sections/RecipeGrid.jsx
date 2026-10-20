import { CheckList } from "@/components/ui/CheckList";
import { Disclosure } from "@/components/ui/Disclosure";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Tag } from "@/components/ui/Tag";
import { RECIPES } from "@/data/recipes";

export function RecipeGrid({ id = "recipes" }) {
  return (
    <section id={id} className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHead
            title="Six Ideas For The Bag You Just Opened"
            text="Quick to make, impossible to share. Pick a flavor, open the steps and dig in."
          />
        </Reveal>

        <ul className="grid grid-cols-3 gap-8 max-[1080px]:grid-cols-2 max-[560px]:grid-cols-1">
          {RECIPES.map((recipe) => (
            <Reveal
              as="li"
              key={recipe.title}
              className="group grid grid-rows-[auto_1fr] overflow-hidden rounded-card border-2 border-ink bg-white transition-[transform,box-shadow] duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-pop"
            >
              <div className="grid place-items-center bg-cream p-4">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  loading="lazy"
                  width="240"
                  height="240"
                  className="aspect-square w-[min(100%,14rem)] object-contain transition-transform duration-[400ms] ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03]"
                />
              </div>

              <div className="grid content-start gap-3 p-6">
                <h3 className="text-[1.125rem]">{recipe.title}</h3>

                <ul className="flex flex-wrap gap-2">
                  <li>
                    <Tag icon="clock">{recipe.time}</Tag>
                  </li>
                  <li>
                    <Tag>{recipe.servings} servings</Tag>
                  </li>
                  <li>
                    <Tag>{recipe.level}</Tag>
                  </li>
                </ul>

                <p className="text-[0.9375rem] text-body">{recipe.description}</p>

                <h4 className="mt-1 text-[0.8125rem] font-semibold tracking-[0.06em] text-muted uppercase">
                  Ingredients
                </h4>

                <CheckList items={recipe.ingredients} tight />

                <Disclosure summary="View steps">
                  <ol className="list-decimal pl-5">
                    {recipe.steps.map((step, index) => (
                      <li key={index} className="mt-3 first:mt-0">
                        {step}
                      </li>
                    ))}
                  </ol>
                </Disclosure>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
