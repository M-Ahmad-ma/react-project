import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, inputClass, selectClass } from "./Field";

const TOPICS = [
  "General question",
  "Bulk order",
  "Wholesale / stockist",
  "Order status",
  "Press & collaborations",
];

export function ContactForm({ className }) {
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    form.reset();
    setNote("Thanks! Your message is on its way — we reply within one business day.");
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate={false}>
      <div className="grid grid-cols-2 gap-4 max-[960px]:grid-cols-1">
        <Field label="Name" htmlFor="cf-name">
          <input
            className={inputClass}
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </Field>

        <Field label="Email" htmlFor="cf-email">
          <input
            className={inputClass}
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
      </div>

      <Field label="Topic" htmlFor="cf-topic">
        <select className={selectClass} id="cf-topic" name="topic" defaultValue={TOPICS[0]}>
          {TOPICS.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="cf-message">
        <textarea className={`${inputClass} min-h-40 resize-y`} id="cf-message" name="message" required />
      </Field>

      <Button type="submit">Send message</Button>

      {note && (
        <p className="rounded-[0.75rem] border-2 border-ink bg-yellow px-5 py-4 text-[0.9375rem] text-ink">
          {note}
        </p>
      )}

      <p className="text-[0.8125rem] text-muted">
        We only use your details to reply. No newsletters, no reselling, no spam.
      </p>
    </form>
  );
}
