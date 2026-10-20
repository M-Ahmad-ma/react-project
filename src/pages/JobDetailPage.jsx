import { Link, useParams } from "react-router-dom";
import { Seo } from "@/components/layout/Seo";
import { PageHead } from "@/components/layout/PageHead";
import { Button } from "@/components/ui/Button";
import { JobDetail } from "@/components/sections/JobDetail";
import { CtaBand } from "@/components/sections/CtaBand";
import { JOBS } from "@/data/jobs";

export function JobDetailPage() {
  const { slug } = useParams();
  const job = JOBS.find((entry) => entry.slug === slug);

  if (!job) {
    return (
      <>
        <Seo title="Role not found — Crispo" />
        <section className="section-y">
          <div className="container-x grid justify-items-center gap-6 text-center">
            <h1 className="text-hero">That role has gone</h1>
            <p className="max-w-[46ch] text-body">
              The position you were looking for is no longer open. Have a look at what else we are
              hiring for.
            </p>
            <Button as={Link} to="/jobs">
              See all open roles
            </Button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title={`${job.title} — Careers at Crispo`}
        description={`${job.summary} ${job.type} · ${job.location}.`}
      />

      <PageHead
        title={job.title}
        text={job.summary}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Careers", to: "/jobs" },
          { label: job.title },
        ]}
        actions={
          <>
            <Button as="a" href="#apply">
              Apply now
            </Button>
            <Button as="a" href="/jobs" variant="ghost">
              All roles
            </Button>
          </>
        }
      />

      <div id="apply">
        <JobDetail job={job} />
      </div>

      <CtaBand
        title="Not The Right Role?"
        text="Send us an open application anyway. The right person rarely fits the label perfectly."
        to="/jobs#openings"
        cta="See open roles"
      />
    </>
  );
}
