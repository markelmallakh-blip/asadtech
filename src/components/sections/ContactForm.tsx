"use client";

import { contact } from "@/content/pages/contact";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const field =
  "h-[52px] w-full rounded-sm bg-grey-05 px-4 text-body-sm text-ink placeholder:text-grey-5 outline-none transition-colors duration-300 focus:bg-white focus:ring-2 focus:ring-blue/40";

/** The enquiry form card (Figma 127:7540). */
export default function ContactForm() {
  const f = contact.form;

  return (
    <form
      /* No endpoint wired yet — see the note in the handover. */
      onSubmit={(event) => event.preventDefault()}
      className="w-full bg-white p-8 lg:w-[625px] lg:p-10"
    >
      <h1 className="text-h3 text-ink lg:text-h2">{contact.heading}</h1>
      <p className="mt-4 max-w-[420px] text-body-sm leading-[1.6] text-ink-soft">
        {contact.body}
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <input className={field} placeholder={f.firstName} aria-label={f.firstName} />
          <input className={field} placeholder={f.lastName} aria-label={f.lastName} />
        </div>

        <input className={field} type="tel" placeholder={f.phone} aria-label={f.phone} />
        <input className={field} type="email" placeholder={f.email} aria-label={f.email} />

        <select className={cn(field, "appearance-none")} aria-label={f.service} defaultValue="">
          <option value="" disabled>
            {f.service}
          </option>
          {f.services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        <textarea
          rows={4}
          className={cn(field, "h-auto py-3 resize-none")}
          placeholder={f.message}
          aria-label={f.message}
        />
      </div>

      <Button type="submit" variant="primary" size="md" className="mt-7">
        {f.submit}
      </Button>
    </form>
  );
}
