import type { SVGProps } from "react";

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 17 17 7M8.5 7H17v8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 12h16m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 5 8 12l7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m5 9 7 7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="m8 12.4 2.6 2.6L16 9.6"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Quote(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 44 34" fill="none" aria-hidden="true" {...props}>
      <path
        d="M0 34V19.7C0 8.8 5.9 1.2 17 0l1.6 5.7C12 7.4 8.6 11 8.6 16.2h8.8V34H0Zm25.4 0V19.7C25.4 8.8 31.3 1.2 42.4 0L44 5.7c-6.6 1.7-10 5.3-10 10.5h8.8V34H25.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 5.2c0-.7.6-1.3 1.3-1.3h2.3c.6 0 1.1.4 1.2 1l.7 3a1.3 1.3 0 0 1-.6 1.4l-1.4.8a12 12 0 0 0 5.9 5.9l.8-1.4c.3-.5.9-.8 1.4-.6l3 .7c.6.1 1 .6 1 1.2v2.3c0 .7-.6 1.3-1.3 1.3A15.8 15.8 0 0 1 4.5 5.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="2.75"
        y="4.75"
        width="18.5"
        height="14.5"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m3.5 7.5 7.3 5a2 2 0 0 0 2.4 0l7.3-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.2" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Arrow into a tray (Figma download-04). */
export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g
        transform="translate(1.25 1.875)"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.75 13.25L10.75 0.75M10.75 13.25C9.87472 13.25 8.23941 10.7571 7.625 10.125M10.75 13.25C11.6253 13.25 13.2606 10.7571 13.875 10.125" />
        <path d="M20.75 15.75C20.75 18.8525 20.1025 19.5 17 19.5H4.5C1.3975 19.5 0.75 18.8525 0.75 15.75" />
      </g>
    </svg>
  );
}

/** Figma plus-sign, on a 14px grid. */
export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7 2.333v9.334M11.667 7H2.333"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Figma minus-sign, on a 14px grid. */
export function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path d="M11.667 7H2.333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Outline document with two teal rules (Figma file-01). */
export function FileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 101 101" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(14 7.7)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M0.75 34.4167C0.75 18.546 0.75 10.6107 5.98852 5.68037C11.227 0.75 19.6583 0.75 36.5208 0.75H39.7727C53.497 0.75 60.3591 0.75 65.1246 4.10756C66.49 5.06955 67.7021 6.21042 68.7243 7.49549C72.2917 11.9807 72.2917 18.4391 72.2917 31.3561V42.0682C72.2917 54.5382 72.2917 60.7732 70.3182 65.753C67.1457 73.7586 60.4362 80.0734 51.9302 83.0593C46.6392 84.9167 40.0145 84.9167 26.7652 84.9167C19.1941 84.9167 15.4085 84.9167 12.3851 83.8553C7.52454 82.1491 3.69058 78.5406 1.87768 73.966C0.75 71.1204 0.75 67.5575 0.75 60.4318V34.4167Z"
          stroke="currentColor"
        />
        <path
          d="M72.2917 42.8333C72.2917 50.5807 66.0112 56.8611 58.2639 56.8611C55.462 56.8611 52.1588 56.3702 49.4347 57.1001C47.0142 57.7487 45.1237 59.6392 44.4751 62.0597C43.7452 64.7838 44.2361 68.087 44.2361 70.8889C44.2361 78.6362 37.9557 84.9167 30.2083 84.9167"
          stroke="currentColor"
        />
        <path d="M19.6875 21.7917H49.1458" stroke="var(--color-teal)" />
        <path d="M19.6875 38.625H32.3125" stroke="var(--color-teal)" />
      </g>
    </svg>
  );
}

/** Shield with a teal tick (Figma security-check). */
export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 62 62" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(6 4.7)" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M25.0363 0.5C17.2662 0.5 12.2281 5.71573 6.26969 7.61683C3.84697 8.38983 2.6356 8.77634 2.14536 9.32118C1.65512 9.86602 1.51157 10.6622 1.22446 12.2545C-1.84787 29.2938 4.86741 45.0469 20.8825 51.1785C22.6033 51.8373 23.4636 52.1667 25.0448 52.1667C26.6259 52.1666 27.4862 51.8372 29.2068 51.1784C45.2209 45.0469 51.9298 29.2938 48.8566 12.2545C48.5694 10.6619 48.4257 9.86561 47.9354 9.32076C47.4451 8.77591 46.2338 8.38962 43.8112 7.61705C37.8505 5.71613 32.8067 0.5 25.0363 0.5Z"
          stroke="currentColor"
        />
        <path
          d="M17.2909 28.9167C17.2909 28.9167 19.8743 28.9167 22.4576 34.0833C22.4576 34.0833 30.6635 21.1667 37.9576 18.5833"
          stroke="var(--color-teal)"
          strokeWidth={1.5}
        />
      </g>
    </svg>
  );
}

/** Cog with a teal clock hand (Figma time-setting-01). */
export function TimeSettingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 62 62" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(4.4 5.7)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26.5833 14.9585V25.2918L33.8263 29.1668" stroke="var(--color-teal)" />
        <path
          d="M52.4167 30.3728V20.211C45.0369 20.211 40.2382 12.1953 43.9745 5.8313L35.0255 0.750367C31.2431 7.19308 21.9277 7.19283 18.1452 0.75012L9.19629 5.83105C12.9326 12.1952 8.12988 20.211 0.75 20.211V30.3728C8.12975 30.3728 12.9285 38.3885 9.1922 44.7525L18.1411 49.8335C21.9254 43.3876 31.2453 43.3874 35.0296 49.8332L43.9786 44.7523C40.2423 38.3883 45.037 30.3728 52.4167 30.3728Z"
          stroke="currentColor"
          strokeWidth={1.5}
        />
      </g>
    </svg>
  );
}

/** Raised hand with a teal wave (Figma waving-hand-01). */
export function WavingHandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 62 62" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(4.7 4.7)" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M27.1254 23.0446L31.8216 10.1856C32.529 8.24875 34.678 7.25009 36.6214 7.95505C38.5649 8.66001 39.567 10.8016 38.8596 12.7385L37.1519 17.4145M20.9417 18.1539L25.2111 6.4639L26.4914 2.95673C27.1988 1.01988 29.3477 0.0212231 31.2912 0.726182C33.2347 1.43114 34.2368 3.57276 33.5294 5.50962L31.8216 10.1856M25.2111 6.4639C25.9174 4.52744 24.9153 2.38675 22.9724 1.68197C21.0289 0.977009 18.8799 1.97566 18.1726 3.91252L10.9468 23.696L8.53345 18.517C7.47457 16.2447 4.67174 15.4003 2.52582 16.7071C0.883839 17.707 0.124825 19.6887 0.680527 21.5249L5.1991 35.3387C6.06363 37.9817 5.78367 41.4704 4.82966 44.0826M33.3095 27.9355L37.1519 17.4145C37.8593 15.4776 40.0082 14.479 41.9517 15.1839C43.8952 15.8889 44.8972 18.0305 44.1899 19.9674L38.9242 34.3854C37.0684 39.4666 36.1405 42.0073 34.6252 43.7483C33.7461 44.7582 32.011 45.8234 30.6657 46.5601C29.5022 47.1972 28.5651 48.2007 28.111 49.444L27.1166 52.1668"
          stroke="currentColor"
        />
        <path
          d="M49.1461 28.9168C50.5574 33.1416 48.44 37.768 44.4167 39.2501"
          stroke="var(--color-teal)"
          strokeWidth={1.5}
        />
      </g>
    </svg>
  );
}

/** Small chevron pointing back (Figma arrow-left-01-sharp). */
export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.8 3.5 6 6.3c-.33.33-.5.5-.5.7s.17.37.5.7l2.8 2.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Map pin on its shadow (Figma location-04). */
export function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(3.25 1.25)" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 16.75C1.92 17.16.75 17.79.75 18.5c0 1.24 3.58 2.25 8 2.25s8-1.01 8-2.25c0-.71-1.17-1.34-3-1.75" strokeLinecap="round" />
        <path d="M11.25 7.75a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
        <path d="M10.01 16.24a1.83 1.83 0 0 1-2.52 0C4.4 13.25.27 9.9 2.28 5.05A7 7 0 0 1 8.75.75a7 7 0 0 1 6.47 4.3c2.01 4.85-2.12 8.2-5.21 11.19Z" />
      </g>
    </svg>
  );
}

/** Briefcase with a teal lid (Figma briefcase-02). */
export function BriefcaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 68 68" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(6.4 6.4)" strokeWidth={1.5}>
        <path
          d="M0.974667 18.1043C0.774339 16.4333 0.674175 15.5978 0.815044 14.9138C1.21703 12.9621 2.93404 11.3795 5.22225 10.8516C6.02411 10.6667 7.03074 10.6667 9.04401 10.6667H46.2878C48.3011 10.6667 49.3077 10.6667 50.1095 10.8516C52.3978 11.3795 54.1148 12.9621 54.5168 14.9138C54.6576 15.5978 54.5575 16.4333 54.3571 18.1043C53.898 21.934 51.7466 24.0288 47.6442 25.2365L35.826 28.7159C31.7859 29.9053 29.7658 30.5 27.6659 30.5C25.566 30.5 23.5459 29.9053 19.5058 28.7159L7.68755 25.2365C3.58523 24.0288 1.43378 21.934 0.974667 18.1043Z"
          stroke="var(--color-teal)"
        />
        <path
          d="M3.47725 23.4167L2.92123 29.8645C1.92452 41.4226 1.42617 47.2017 4.62337 50.8925C7.82056 54.5833 13.325 54.5833 24.3339 54.5833H30.9979C42.0068 54.5833 47.5112 54.5833 50.7084 50.8925C53.9056 47.2017 53.4073 41.4226 52.4106 29.8645L51.8546 23.4167"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.5826 9.25L37.3637 8.49942C36.2728 4.75931 35.7274 2.88926 34.4288 1.81963C33.1303 0.750001 31.4055 0.750001 27.9559 0.750001H27.3759C23.9263 0.750001 22.2015 0.750001 20.903 1.81963C19.6045 2.88926 19.059 4.75931 17.9682 8.49942L17.7492 9.25"
          stroke="currentColor"
        />
      </g>
    </svg>
  );
}

/** Two office blocks with teal windows (Figma building-05). */
export function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 101 101" fill="none" aria-hidden="true" {...props}>
      {/* Figma draws the glyph flipped; mirrored back so the blocks stand up */}
      <g transform="translate(7.7 93.3) scale(1 -1)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M0.75 0.75L84.9167 0.75" stroke="currentColor" />
        <path d="M68.0833 55.4583L51.25 55.4583C40.8049 55.4583 38.625 53.2784 38.625 42.8333L38.625 0.750007L80.7083 0.750007V42.8333C80.7083 53.2784 78.5284 55.4583 68.0833 55.4583Z" stroke="currentColor" />
        <path d="M55.4583 0.750011H4.95833L4.95833 72.2917C4.95833 82.7368 7.13825 84.9167 17.5833 84.9167H42.8333C53.2784 84.9167 55.4583 82.7368 55.4583 72.2917L55.4583 55.4583" stroke="currentColor" />
        <path d="M4.95833 68.0833H17.5833M4.95833 51.25H17.5833M4.95833 34.4167H17.5833" stroke="var(--color-teal)" />
        <path d="M55.4583 38.625H63.875M55.4583 26H63.875" stroke="var(--color-teal)" />
        <path d="M59.6667 0.750004L59.6667 13.375" stroke="currentColor" />
      </g>
    </svg>
  );
}

/** Clock face with teal hands and ticks (Figma clock-05). */
export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 101 101" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(7.7 7.7)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M42.8332 84.9167C19.5912 84.9167 0.75 66.0753 0.75 42.8333C0.75 19.5913 19.5913 0.75 42.8333 0.75C61.6767 0.75 77.4498 13.1347 82.8123 30.2083H72.2915" stroke="currentColor" />
        <path d="M42.8332 26V42.8333L51.2498 51.25" stroke="var(--color-teal)" />
        <path d="M84.7274 47.0417C84.8525 45.6565 84.9165 44.2528 84.9165 42.8333M55.4582 84.9167C56.8957 84.4435 58.3 83.8917 59.6665 83.266M79.827 63.875C80.6385 62.3113 81.3625 60.6904 81.9918 59.0195M68.8931 77.4647C70.3428 76.265 71.7154 74.9674 73.0018 73.5815" stroke="var(--color-teal)" />
      </g>
    </svg>
  );
}

/** Ringing handset (Figma call-ringing-02). */
export function PhoneRingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 101 101" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(7.7 7.7)" strokeWidth={1.5}>
        <path
          d="M8.23136 42.591C4.24176 35.6344 2.31539 29.9539 1.15384 24.1957C-0.564058 15.6796 3.36731 7.3607 9.88001 2.05259C12.6325 -0.190836 15.7879 0.57565 17.4155 3.49573L21.0902 10.0881C24.0028 15.3134 25.4591 17.9261 25.1702 20.696C24.8814 23.4659 22.9174 25.7219 18.9893 30.2338L8.23136 42.591ZM8.23136 42.591C16.3067 56.6717 28.9793 69.3514 43.0764 77.4361M43.0764 77.4361C50.033 81.4257 55.7136 83.352 61.4717 84.5136C69.9878 86.2315 78.3067 82.3001 83.6148 75.7874C85.8583 73.0349 85.0918 69.8795 82.1717 68.2519L75.5793 64.5772C70.354 61.6646 67.7413 60.2083 64.9714 60.4972C62.2015 60.786 59.9455 62.7501 55.4336 66.6781L43.0764 77.4361Z"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path d="M51.2505 4.95855V16.7419M72.0826 13.5889L63.7505 21.921M80.7089 34.4169H68.9255" stroke="var(--color-teal)" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Open envelope with a teal letter (Figma mail-open). */
export function MailOpenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 101 101" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(7.7 7.7)" strokeWidth={1.5} strokeLinejoin="round">
        <path d="M13.3683 21.7917L8.23916 25.2111C4.56226 27.6623 2.72381 28.888 1.7275 30.7571C0.731189 32.6263 0.738568 34.8231 0.753328 39.2165C0.771098 44.5063 0.820283 49.896 0.956406 55.3495C1.27937 68.2884 1.44085 74.7578 6.19795 79.5151C10.9551 84.2723 17.5119 84.4361 30.6256 84.7638C38.7838 84.9676 46.8696 84.9676 55.0278 84.7638C68.1415 84.4361 74.6983 84.2723 79.4554 79.515C84.2126 74.7578 84.374 68.2883 84.6969 55.3494C84.833 49.896 84.8822 44.5063 84.8999 39.2165C84.9147 34.823 84.922 32.6263 83.9257 30.7571C82.9294 28.888 81.091 27.6623 77.4141 25.2111L72.2849 21.7917" stroke="currentColor" />
        <path d="M0.741824 34.4167L29.8341 51.8721C36.1635 55.6697 39.3282 57.5685 42.8252 57.5685C46.3221 57.5685 49.4868 55.6697 55.8162 51.8721L84.9085 34.4167" stroke="currentColor" />
        <path d="M13.3668 42.8333V17.5833C13.3668 9.64802 13.3668 5.68037 15.8319 3.21518C18.2971 0.75 22.2648 0.75 30.2001 0.75H55.4501C63.3854 0.75 67.3531 0.75 69.8182 3.21518C72.2834 5.68037 72.2834 9.64802 72.2834 17.5833V42.8333" stroke="var(--color-teal)" />
        <path d="M34.4085 34.4167H51.2418M34.4085 17.5833H51.2418" stroke="var(--color-teal)" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------ share glyphs */

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 17.1495C5.57233 17.1495 4.35717 16.6482 3.3545 15.6455C2.35183 14.643 1.8505 13.428 1.8505 12.0005C1.8505 10.573 2.35183 9.35683 3.3545 8.352C4.35717 7.347 5.57233 6.8445 7 6.8445H10.3325C10.573 6.8445 10.7751 6.92775 10.9387 7.09425C11.1024 7.26075 11.1843 7.46483 11.1843 7.7065C11.1843 7.94817 11.1024 8.14983 10.9387 8.3115C10.7751 8.473 10.573 8.55375 10.3325 8.55375H7C6.03967 8.55375 5.22525 8.8875 4.55675 9.555C3.88808 10.2225 3.55375 11.0355 3.55375 11.994C3.55375 12.9527 3.88808 13.7678 4.55675 14.4393C5.22525 15.1106 6.03967 15.4463 7 15.4463H10.3325C10.573 15.4463 10.7751 15.5285 10.9387 15.693C11.1024 15.8575 11.1843 16.0606 11.1843 16.3022C11.1843 16.5439 11.1024 16.7455 10.9387 16.907C10.7751 17.0687 10.573 17.1495 10.3325 17.1495H7ZM8.80925 12.7857C8.58725 12.7857 8.40075 12.7109 8.24975 12.5613C8.09875 12.4114 8.02325 12.2228 8.02325 11.9955C8.02325 11.7683 8.09775 11.5813 8.24675 11.4345C8.39575 11.2877 8.58325 11.2143 8.80925 11.2143H15.1907C15.4127 11.2143 15.5992 11.2891 15.7502 11.4387C15.9012 11.5886 15.9767 11.7772 15.9767 12.0045C15.9767 12.2317 15.9022 12.4187 15.7532 12.5655C15.6042 12.7123 15.4167 12.7857 15.1907 12.7857H8.80925ZM13.6733 17.1495C13.4289 17.1495 13.2249 17.0672 13.0613 16.9027C12.8976 16.7382 12.8158 16.5352 12.8158 16.2935C12.8158 16.0518 12.8976 15.8502 13.0613 15.6885C13.2249 15.527 13.4289 15.4463 13.6733 15.4463H17C17.9603 15.4463 18.7747 15.1125 19.4432 14.445C20.1119 13.7775 20.4462 12.9645 20.4462 12.006C20.4462 11.0473 20.1119 10.2322 19.4432 9.56075C18.7747 8.88942 17.9603 8.55375 17 8.55375H13.6733C13.4289 8.55375 13.2249 8.4715 13.0613 8.307C12.8976 8.1425 12.8158 7.93942 12.8158 7.69775C12.8158 7.45608 12.8976 7.2535 13.0613 7.09C13.2249 6.92633 13.4289 6.8445 13.6733 6.8445H17C18.4277 6.8445 19.6438 7.34683 20.6485 8.3515C21.6532 9.356 22.1555 10.572 22.1555 11.9995C22.1555 13.427 21.6532 14.6422 20.6485 15.645C19.6438 16.648 18.4277 17.1495 17 17.1495H13.6733Z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.1761 4.24268H19.9362L13.9061 11.0201L21 20.2427H15.4456L11.0951 14.6493L6.11723 20.2427H3.35544L9.80517 12.9935L3 4.24268H8.69545L12.6279 9.3553L17.1761 4.24268ZM16.2073 18.6181H17.7368L7.86441 5.78196H6.2232L16.2073 18.6181Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.3038C22 6.74719 17.5229 2.24268 12 2.24268C6.47715 2.24268 2 6.74719 2 12.3038C2 17.3255 5.65684 21.4879 10.4375 22.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375 7.56564 11.9305 6.1728 14.2146 6.1728C15.3088 6.1728 16.4531 6.36931 16.4531 6.36931V8.84529H15.1922C13.95 8.84529 13.5625 9.6209 13.5625 10.4166V12.3038H16.3359L15.8926 15.2121H13.5625V22.2427C18.3432 21.4879 22 17.3257 22 12.3038Z" />
    </svg>
  );
}
