/**
 * What a form turns into once it has been sent: a ring draws itself, a tick
 * is written inside it and the thank-you rises up underneath (the timing
 * lives in globals.css). Announced to assistive tech as a status.
 */
export default function FormSuccess({
  heading = "Request received",
  body = "Thank you — we’ve received your request and will get back to you very soon.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-6 py-10 text-center"
    >
      <svg viewBox="0 0 96 96" className="size-24" aria-hidden="true">
        <circle
          cx="48"
          cy="48"
          r="44"
          fill="none"
          stroke="var(--color-teal)"
          strokeWidth="3"
          strokeLinecap="round"
          className="form-success-ring"
          /* Starts at 12 o'clock and draws clockwise */
          transform="rotate(-90 48 48)"
        />
        <path
          d="M30 49l12 12 25-25"
          fill="none"
          stroke="var(--color-blue)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="form-success-tick"
        />
      </svg>

      <div className="form-success-copy flex flex-col gap-2">
        <p className="text-h5 text-text-dark">{heading}</p>
        <p className="max-w-[420px] text-body text-text-muted">{body}</p>
      </div>
    </div>
  );
}
