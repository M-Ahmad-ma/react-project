import { Link } from "react-router-dom";
import { Seo } from "@/components/layout/Seo";
import { PageHead } from "@/components/layout/PageHead";
import { Button } from "@/components/ui/Button";
import { FlavorsBand } from "@/components/sections/FlavorsBand";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export function FlavorsPage() {
  return (
    <>
      <Seo
        title="Flavors — Crispo"
        description="From classic salt to bold heat, discover a Crispo flavor for every craving — creamy, cheesy, sweet and wholesome."
      />

      <PageHead
        title="From Classic to Bold"
        text="Six signature flavors, one obsession: a golden crunch that never lets you down. Filter the line-up and find the bag that matches your craving."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Flavors" },
        ]}
        actions={
          <>
            <Button as="a" href="#lineup">
              See the line-up
            </Button>
            <Button as={Link} to="/stores" variant="ghost">
              Shop Now
            </Button>
          </>
        }
      />

      <FlavorsBand />

      <ProductGrid
        id="lineup"
        filterable
        title="Choose Your Crunch"
        text="Handpicked favorites with irresistible taste and perfect crisp."
      />

      <CtaBand
        text="Pick your favorite flavor and we will get a fresh bag on its way."
        to="/stores"
      />
    </>
  );
}
