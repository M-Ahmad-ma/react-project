import { Link } from "react-router-dom";
import { Seo } from "@/components/layout/Seo";
import { PageHead } from "@/components/layout/PageHead";
import { Button } from "@/components/ui/Button";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { StoreGrid } from "@/components/sections/StoreGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export function StoresPage() {
  return (
    <>
      <Seo
        title="Stores — Crispo"
        description="Shop the top-rated Crispo flavors or find a stockist near you — fresh crunch, delivered or waiting on the shelf."
      />

      <PageHead
        title="Find Crispo Near You"
        text="Order the top-rated flavors for delivery, or visit one of the shops stocking Crispo today. Everything ships the same day it is packed."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Stores" },
        ]}
        actions={
          <>
            <Button as="a" href="#stockists">
              See stockists
            </Button>
            <Button as="a" href="#lineup" variant="ghost">
              Shop the flavors
            </Button>
          </>
        }
      />

      <ProductGrid id="lineup" filterable />

      <StoreGrid id="stockists" />

      <CtaBand text="Handpicked favorites with irresistible taste and perfect crisp." to="/contact" cta="Stock Crispo" />
    </>
  );
}
