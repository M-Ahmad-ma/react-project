import { Link } from "react-router-dom";
import { Seo } from "@/components/layout/Seo";
import { PageHead } from "@/components/layout/PageHead";
import { Button } from "@/components/ui/Button";
import { RecipeGrid } from "@/components/sections/RecipeGrid";
import { CtaBand } from "@/components/sections/CtaBand";

export function RecipesPage() {
  return (
    <>
      <Seo
        title="Recipes — Crispo"
        description="Crunchy Crispo recipes, shareables and party ideas you can make in minutes — loaded nachos, smoky bites, fritters and more."
      />

      <PageHead
        title="Crunch Meets the Kitchen"
        text="The bag is only the beginning. Loaded nachos, crispy bites and dips worth showing off — all of them start with one handful of Crispo."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Recipes" },
        ]}
        actions={
          <>
            <Button as="a" href="#recipes">
              Browse recipes
            </Button>
            <Button as={Link} to="/stores" variant="ghost">
              Get a bag
            </Button>
          </>
        }
      />

      <RecipeGrid id="recipes" />

      <CtaBand
        text="Every recipe here starts with a fresh bag — order yours and get cooking."
        to="/stores"
      />
    </>
  );
}
