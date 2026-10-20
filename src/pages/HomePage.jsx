import { Seo } from "@/components/layout/Seo";
import { Hero } from "@/components/sections/Hero";
import { FeaturesBand } from "@/components/sections/FeaturesBand";
import { FlavorsBand } from "@/components/sections/FlavorsBand";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export function HomePage() {
  return (
    <>
      <Seo
        title="Crispo — Feel the Ultimate Taste of Every Crisp"
        description="Crispo crafts bold chips from carefully selected potatoes and natural seasonings. Explore classic to bold flavours, delivered fresh to your door."
      />

      <Hero />
      <FeaturesBand id="why" />
      <FlavorsBand id="flavors" />
      <ProductGrid id="products" />
      <Testimonials />
      <CtaBand id="contact" to="/stores" cta="Shop Now" />
    </>
  );
}
