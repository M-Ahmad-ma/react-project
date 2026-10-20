import { Link } from "react-router-dom";
import { Seo } from "@/components/layout/Seo";
import { PageHead } from "@/components/layout/PageHead";
import { Button } from "@/components/ui/Button";
import { FeaturesBand } from "@/components/sections/FeaturesBand";
import { StorySection } from "@/components/sections/StorySection";
import { ValuesBand } from "@/components/sections/ValuesBand";
import { TeamSection } from "@/components/sections/TeamSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBand } from "@/components/sections/CtaBand";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About — Crispo"
        description="Why choose Crispo: premium potatoes, natural seasonings, small-batch frying and a crunch you can trust. Meet the owner and the team behind the bags."
      />

      <PageHead
        title="Why Choose Crispo?"
        text="We started with a simple frustration: crisps that tasted like nothing. Crispo began with whole potatoes, real spices and a fryer we never rush."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "About" },
        ]}
        actions={
          <>
            <Button as="a" href="#story">
              Our story
            </Button>
            <Button as={Link} to="/flavors" variant="ghost">
              See the flavors
            </Button>
          </>
        }
      />

      <FeaturesBand title="Three Reasons People Stay Crunchy" />

      <StorySection />

      <ValuesBand />

      <TeamSection />

      <StatsBand />

      <CtaBand to="/stores" />
    </>
  );
}
