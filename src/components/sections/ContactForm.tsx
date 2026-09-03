"use client";

import { useState } from "react";
import { contact } from "@/content/pages/contact";
import FormSuccess from "@/components/ui/FormSuccess";
import Button from "@/components/ui/Button";
import { ChevronDown } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const field =
  "h-14 w-full rounded bg-grey-05 px-[14px] text-body-sm text-ink placeholder:text-text-muted outline-none transition-[background-color,box-shadow] duration-300 focus:bg-white focus:ring-1 focus:ring-blue";

/** The enquiry form card (Figma 127:7771). */
export default function ContactForm() {
  const f = contact.form;
  const [sent, setSent] = useState(false);

  return (
    <form
      /* No endpoint wired yet — see the note in the handover. */
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="flex w-full flex-col gap-8 rounded-3xl bg-white p-8 lg:w-[652px] lg:px-8 lg:py-[50px]"
    >
      <h1 className="text-h3 text-text-dark lg:text-h2">{contact.heading}</h1>
      <p className="max-w-[584px] text-body-lg text-text-dark">{contact.body}</p>

      {sent ? (
        <FormSuccess />
      ) : (
      <div className="flex flex-col gap-4">
        <div className="grid gap-2 sm:grid-cols-2">
          <input className={field} placeholder={f.firstName} aria-label={f.firstName} />
          <input className={field} placeholder={f.lastName} aria-label={f.lastName} />
        </div>

        <input className={field} type="tel" placeholder={f.phone} aria-label={f.phone} />
        <input className={field} type="email" placeholder={f.email} aria-label={f.email} />

        <div className="relative">
          <select
            className={cn(field, "appearance-none pe-10 text-text-muted")}
            aria-label={f.service}
            defaultValue=""
          >
            <option value="" disabled>
              {f.service}
            </option>
            {f.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute end-[14px] top-1/2 size-5 -translate-y-1/2 text-text-dark" />
        </div>

        <textarea
          rows={4}
          className={cn(field, "h-[140px] resize-none py-[14px]")}
          placeholder={f.message}
          aria-label={f.message}
        />

        <Button type="submit" variant="primary" size="lg" className="self-start">
          {f.submit}
        </Button>
      </div>
      )}
    </form>
  );
}
