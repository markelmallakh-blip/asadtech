"use client";

import { careersPage } from "@/content/pages/careers";
import { contact } from "@/content/pages/contact";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const field =
  "h-[52px] w-full rounded-sm bg-white px-4 text-body-sm text-ink placeholder:text-grey-5 outline-none transition-shadow duration-300 focus:ring-2 focus:ring-blue/40";

/** Application form on a role page. No endpoint wired yet — see handover. */
export default function ApplyForm({ role }: { role: string }) {
  const f = contact.form;

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="mt-7 flex flex-col gap-3"
    >
      <input type="hidden" name="role" value={role} />

      <div className="grid gap-3 sm:grid-cols-2">
        <input className={field} placeholder={f.firstName} aria-label={f.firstName} />
        <input className={field} placeholder={f.lastName} aria-label={f.lastName} />
      </div>
      <input className={field} type="email" placeholder={f.email} aria-label={f.email} />
      <input className={field} type="tel" placeholder={f.phone} aria-label={f.phone} />
      <textarea
        rows={4}
        className={cn(field, "h-auto resize-none py-3")}
        placeholder="Tell us about your experience"
        aria-label="Tell us about your experience"
      />

      <Button type="submit" variant="primary" size="md" className="mt-3 self-start">
        {careersPage.apply.submit}
      </Button>
    </form>
  );
}
