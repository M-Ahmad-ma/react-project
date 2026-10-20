import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@/lib/icons";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Tag } from "@/components/ui/Tag";
import { JOB_DEPARTMENTS, JOBS } from "@/data/jobs";

export function JobsList({ id = "openings" }) {
  const [department, setDepartment] = useState("all");

  const visible =
    department === "all" ? JOBS : JOBS.filter((job) => job.department === department);

  return (
    <section id={id} className="section-y">
      <div className="container-x">
        <Reveal>
          <SectionHead
            title="Open Roles"
            text="Seven ways to join the crew. Read the listing, then send us a note — we answer every application."
          />
        </Reveal>

        <Reveal className="mb-12 flex justify-center">
          <ul className="flex flex-wrap justify-center gap-3">
            {JOB_DEPARTMENTS.map((item) => (
              <li key={item.id}>
                <Chip active={department === item.id} onClick={() => setDepartment(item.id)}>
                  {item.label}
                </Chip>
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="grid gap-5">
          {visible.map((job) => (
            <Reveal as="li" key={job.slug}>
              <Link
                to={`/jobs/${job.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-card border-2 border-ink bg-white p-6 shadow-pop-sm transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
              >
                <span className="grid size-14 flex-none place-items-center rounded-full border-2 border-ink bg-yellow text-ink">
                  <Icon name={job.icon} className="size-6" />
                </span>

                <div className="grid gap-2">
                  <h3 className="text-[1.125rem] font-semibold group-hover:text-maroon">
                    {job.title}
                  </h3>
                  <p className="text-[0.9375rem] text-body">{job.summary}</p>

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
                  </ul>
                </div>

                <div className="hidden items-end gap-4 sm:flex sm:flex-col sm:items-end">
                  <Tag className="bg-yellow font-semibold text-ink">{job.salary}</Tag>
                  <span className="flex items-center gap-1 text-[0.9375rem] font-semibold text-ink">
                    View role
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="text-center text-muted">No open roles in this department right now.</p>
        )}
      </div>
    </section>
  );
}
