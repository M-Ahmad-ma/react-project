import { Seo } from "@/components/layout/Seo";
import { PageHead } from "@/components/layout/PageHead";
import { Button } from "@/components/ui/Button";
import { CareersWhy } from "@/components/sections/CareersWhy";
import { JobsList } from "@/components/sections/JobsList";
import { CareersBenefits } from "@/components/sections/CareersBenefits";
import { CtaBand } from "@/components/sections/CtaBand";

export function JobsPage() {
  return (
    <>
      <Seo
        title="Careers — Crispo"
        description="Join the crew at the Crispo factory. Open roles in production, flavour development, quality, sales, logistics and marketing."
      />

      <PageHead
        title="Work At Crispo"
        text="We make a very simple product and we are very serious about it. Join the people who fry, season, pack and get every bag out the door."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Careers" },
        ]}
        actions={
          <>
            <Button as="a" href="#openings">
              See open roles
            </Button>
            <Button as="a" href="#benefits" variant="ghost">
              What we offer
            </Button>
          </>
        }
      />

      <CareersWhy />

      <JobsList />

      <CareersBenefits />

      <CtaBand
        title="Ready To Crunch?"
        text="Pick a role, send us a note and we will come back to you within one business day."
        to="/jobs#openings"
        cta="See open roles"
      />
    </>
  );
}
