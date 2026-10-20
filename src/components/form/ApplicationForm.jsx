import { useId, useState } from "react";
import { Icon } from "@/lib/icons";
import { Button } from "@/components/ui/Button";
import { Field, inputClass, selectClass } from "./Field";
import { JOBS } from "@/data/jobs";

const EXPERIENCE = [
  "No experience needed",
  "1 – 2 years",
  "3 – 5 years",
  "6 – 10 years",
  "10+ years",
];

/**
 * Job application form. Used on the careers page and on each role detail
 * page, where the role is pre-selected.
 */
export function ApplicationForm({ role, className }) {
  const [note, setNote] = useState("");
  const [fileName, setFileName] = useState("");
  const fileId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    form.reset();
    setFileName("");
    setNote(
      `Application received${role ? ` for ${role.title}` : ""}. The team will be in touch within one business day.`,
    );
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 max-[960px]:grid-cols-1">
        <Field label="Full name" htmlFor="af-name">
          <input
            className={inputClass}
            id="af-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </Field>

        <Field label="Email" htmlFor="af-email">
          <input
            className={inputClass}
            id="af-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-4 max-[960px]:grid-cols-1">
        <Field label="Phone" htmlFor="af-phone">
          <input
            className={inputClass}
            id="af-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </Field>

        <Field label="Experience" htmlFor="af-experience">
          <select
            className={selectClass}
            id="af-experience"
            name="experience"
            defaultValue={EXPERIENCE[0]}
          >
            {EXPERIENCE.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Role" htmlFor="af-role">
        <select
          className={selectClass}
          id="af-role"
          name="role"
          defaultValue={role?.title ?? JOBS[0].title}
        >
          {JOBS.map((job) => (
            <option key={job.slug}>{job.title}</option>
          ))}
        </select>
      </Field>

      <Field
        label="LinkedIn or portfolio"
        htmlFor="af-link"
        hint="Optional — a link to your work, if you have one."
      >
        <input
          className={inputClass}
          id="af-link"
          name="link"
          type="url"
          placeholder="https://"
          autoComplete="url"
        />
      </Field>

      <Field
        label="Tell us why"
        htmlFor="af-cover"
        hint="A short note is plenty — we read every one of them."
      >
        <textarea
          className={`${inputClass} min-h-40 resize-y`}
          id="af-cover"
          name="cover"
          required
        />
      </Field>

      <Field label="CV" htmlFor={fileId}>
        <label
          htmlFor={fileId}
          className="flex cursor-pointer items-center gap-3 rounded-[0.75rem] border-2 border-dashed border-ink/40 bg-cream px-[1.1rem] py-[0.85rem] text-[0.9375rem] transition-colors hover:border-ink"
        >
          <Icon name="upload" className="size-5 flex-none text-maroon" />
          <span className="truncate">
            {fileName || "Attach your CV (PDF, max 5MB)"}
          </span>
        </label>
        <input
          id={fileId}
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          className="sr-only"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
        />
      </Field>

      <label className="flex items-start gap-3 text-[0.9375rem] text-body">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-5 flex-none accent-[#7f1a3c]"
        />
        <span>
          I agree that Crispo may store this application and contact me about this role.
        </span>
      </label>

      <Button type="submit">Send application</Button>

      {note && (
        <p className="rounded-[0.75rem] border-2 border-ink bg-yellow px-5 py-4 text-[0.9375rem] text-ink">
          {note}
        </p>
      )}
    </form>
  );
}
