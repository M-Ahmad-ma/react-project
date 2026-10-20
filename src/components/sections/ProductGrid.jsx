import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { SectionHead } from "@/components/ui/SectionHead";
import { useCart } from "@/context/CartContext";
import { CATEGORIES, PRODUCTS } from "@/data/products";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card flex flex-col gap-2 text-left">
      <div className="mb-3 grid place-items-center">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="240"
          height="240"
          className="aspect-square w-full max-w-[21rem] object-contain transition-transform duration-[400ms] ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <h3 className="text-[1.125rem] font-semibold">{product.name}</h3>
        <Stars />
      </div>

      <p className="text-[0.9375rem] text-muted">{product.description}</p>

      <div className="mt-auto pt-3">
        <Button onClick={handleAdd} size="sm" block>
          {added ? "Added ✓" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
}

/**
 * The product shelf. `filterable` adds the category chips used on the
 * flavours and stores pages.
 */
export function ProductGrid({
  id,
  title = "Top-Rated Flavors Loved by Crunch Seekers",
  text = "Handpicked favorites with irresistible taste and perfect crisp.",
  products = PRODUCTS,
  filterable = false,
  className,
}) {
  const [category, setCategory] = useState("all");

  const visible =
    category === "all" ? products : products.filter((product) => product.category === category);

  return (
    <section id={id} className={cn("section-y", className)}>
      <div className="container-x">
        <Reveal>
          <SectionHead title={title} text={text} />
        </Reveal>

        {filterable && (
          <Reveal className="mb-12 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((item) => (
                <li key={item.id}>
                  <Chip
                    active={category === item.id}
                    onClick={() => setCategory(item.id)}
                    aria-label={`Show ${item.label}`}
                  >
                    {item.label}
                  </Chip>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        <ul className="grid grid-cols-3 gap-x-8 gap-y-12 max-[1080px]:grid-cols-2 max-[560px]:grid-cols-1">
          {visible.map((product) => (
            <Reveal as="li" key={product.name} className="group">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
