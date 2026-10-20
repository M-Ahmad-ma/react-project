import { CheckList } from "@/components/ui/CheckList";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { ApplicationForm } from "@/components/form/ApplicationForm";

/**
 * The detail + apply panel for a single role. Two columns: everything you
 * need to know, and the application form.
 */
export function JobDetail({ job }) {
  return (
    <section className="section-y">
      <div className="container-x grid grid-cols-[1.1fr_1fr] items-start gap-[clamp(1.5rem,4vw,3.5rem)] max-[960px]:grid-cols-1">
        <div className="grid gap-8">
          <Reveal className="grid gap-4 justify-items-start">
            <ul className="flex flex-wrap gap-2">
              <li>
                <Tag icon="briefcase">{job.type}</Tag>
              </li>
              <li>
                <Tag icon="pin">{job.location}</Tag>
              </li>
              <li>
                <Tag icon="clock">{job.shift}</Tag>
              </li>
              <li>
                <Tag className="bg-yellow font-semibold text-ink">{job.salary}</Tag>
              </li>
            </ul>

            <p className="text-body">{job.summary}</p>
          </Reveal>

          <Reveal className="grid gap-3">
            <h2 className="text-[1.125rem]">What you&apos;ll do</h2>
            <CheckList items={job.responsibilities} />
          </Reveal>

          <Reveal className="grid gap-3">
            <h2 className="text-[1.125rem]">What you&apos;ll bring</h2>
            <CheckList items={job.requirements} />
          </Reveal>

          <Reveal className="grid gap-3">
            <h2 className="text-[1.125rem]">What we offer</h2>
            <ul className="flex flex-wrap gap-2">
              {job.benefits.map((benefit) => (
                <li key={benefit}>
                  <Tag icon="spark">{benefit}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className="grid gap-4 rounded-card border-2 border-ink bg-cream p-[clamp(1.5rem,1rem+2.5vw,2.5rem)] shadow-pop"
        >
          <div className="grid gap-1">
            <h2 className="text-section">Apply for this role</h2>
            <p className="text-[0.9375rem] text-body">
              Send us your details and we will come back to you within one business day.
            </p>
          </div>

          <ApplicationForm role={job} className="grid gap-4" />
        </Reveal>
      </div>
    </section>
  );
}
