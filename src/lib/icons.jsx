/* ==========================================================================
   Crispō — icon library.
   A direct port of the original <symbol> sprite (js/icons.js). Keeping the
   hand-drawn 24×24 / stroke-width-2 / round-cap geometry means the icons
   sit perfectly alongside Poppins' rounded letterforms — no icon dependency.
   ========================================================================== */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const solid = {
  fill: "currentColor",
};

const ICONS = {
  /* --- Interface ------------------------------------------------------- */
  plus: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    children: <path d="M12 5v14M5 12h14" />,
  },
  minus: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    children: <path d="M5 12h14" />,
  },
  trash: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      <path key="a" d="M4 7h16" />,
      <path key="b" d="M9 7V4.8A.8.8 0 0 1 9.8 4h4.4a.8.8 0 0 1 .8.8V7" />,
      <path key="c" d="M6 7l.9 12.1a1.5 1.5 0 0 0 1.5 1.4h7.2a1.5 1.5 0 0 0 1.5-1.4L18 7" />,
    ],
  },
  arrowRight: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: <path d="M4 12h15M13 6l6 6-6 6" />,
  },
  search: {
    ...stroke,
    children: [
      <circle key="a" cx="11" cy="11" r="7" />,
      <path key="b" d="m20 20-3.5-3.5" />,
    ],
  },
  cart: {
    ...stroke,
    children: [
      <path key="a" d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6" />,
      <circle key="b" cx="10" cy="20" r="1.4" fill="currentColor" stroke="none" />,
      <circle key="c" cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />,
    ],
  },
  menu: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    children: <path d="M4 7h16M4 12h16M4 17h16" />,
  },
  close: {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    children: <path d="m6 6 12 12M18 6 6 18" />,
  },
  check: {
    ...solid,
    children: <path d="M20 6.5 9.5 17 4 11.5 5.6 10l3.9 3.9L18.4 5z" />,
  },
  star: {
    ...solid,
    children: <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4L12 17.4l-5.8 3 1.1-6.4L2.6 9.4l6.5-.9z" />,
  },

  /* --- Feature icons ---------------------------------------------------- */
  medal: {
    ...stroke,
    children: [
      <path key="a" d="M8.4 9.2 6.1 2.6h11.8L15.6 9.2" />,
      <circle key="b" cx="12" cy="14.9" r="6.4" />,
      <path
        key="c"
        d="m12 11.7 1.2 2.5 2.7.4-2 1.9.5 2.7L12 17.9l-2.4 1.3.5-2.7-2-1.9 2.7-.4z"
        fill="currentColor"
        stroke="none"
      />,
    ],
  },
  truck: {
    ...stroke,
    children: [
      <path key="a" d="M2 6h11v10H2zM13 9h4l4 4v3h-8z" />,
      <circle key="b" cx="6.5" cy="18.5" r="1.8" fill="currentColor" stroke="none" />,
      <circle key="c" cx="17.5" cy="18.5" r="1.8" fill="currentColor" stroke="none" />,
    ],
  },
  heart: {
    ...solid,
    children: <path d="M12 20.5 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 0 1 19.4 13z" />,
  },
  leaf: {
    ...solid,
    children: [
      <path key="a" d="M20.6 3.4C11 3.4 4 8.4 4 15.5c0 1 .1 2 .4 2.9.6-4 3.6-7.2 8.3-9 4-1.4 6.9-3.5 8-6z" />,
      <path key="b" d="M4 21c1.2-4.6 4.2-8 8.6-9.6-3 2.3-5 5.4-5.8 9.6z" opacity=".55" />,
    ],
  },
  spice: {
    ...solid,
    children: <path d="M12 2.4s5.6 4.5 5.6 9.4a5.6 5.6 0 0 1-11.2 0c0-2.1 1-3.8 1-3.8s.6 2.3 2.1 2.3c0-3.4 2.5-5.4 2.5-7.9z" />,
  },
  bowl: {
    ...stroke,
    children: [
      <path key="a" d="M3.5 10.5h17a8.5 8.5 0 0 1-17 0z" />,
      <path key="b" d="M8.5 7.2c0-1.4 1-1.8 1-3.2M12 7.2c0-1.4 1-1.8 1-3.2M15.5 7.2c0-1.4 1-1.8 1-3.2" />,
    ],
  },

  /* --- Contact channels ------------------------------------------------- */
  phone: {
    ...solid,
    children: <path d="M6.7 3h3l1.5 3.7-2 1.4a12.4 12.4 0 0 0 5.8 5.8l1.4-2 3.7 1.5v3A1.9 1.9 0 0 1 18.2 18 17.2 17.2 0 0 1 5.1 5 1.9 1.9 0 0 1 6.7 3" />,
  },
  mail: {
    ...stroke,
    children: [
      <rect key="a" x="3" y="5" width="18" height="14" rx="2" />,
      <path key="b" d="m3.8 6.5 8.2 5.6 8.2-5.6" />,
    ],
  },
  pin: {
    ...stroke,
    children: [
      <path key="a" d="M12 21.2s7-6.3 7-11.2a7 7 0 1 0-14 0c0 4.9 7 11.2 7 11.2z" />,
      <circle key="b" cx="12" cy="10" r="2.6" fill="currentColor" stroke="none" />,
    ],
  },
  clock: {
    ...stroke,
    children: [
      <circle key="a" cx="12" cy="12" r="9" />,
      <path key="b" d="M12 6.8v5.4l3.3 2" />,
    ],
  },

  /* --- Careers ---------------------------------------------------------- */
  briefcase: {
    ...stroke,
    children: [
      <rect key="a" x="3" y="7.5" width="18" height="13" rx="2" />,
      <path key="b" d="M8.5 7.5V5.8A1.8 1.8 0 0 1 10.3 4h3.4a1.8 1.8 0 0 1 1.8 1.8v1.7M3 12.5h18" />,
    ],
  },
  users: {
    ...stroke,
    children: [
      <circle key="a" cx="9" cy="8" r="3.4" />,
      <path key="b" d="M3 20.2a6 6 0 0 1 12 0M16.5 5.2a3.4 3.4 0 0 1 0 6.6M18 14.6a6 6 0 0 1 3 5.6" />,
    ],
  },
  spark: {
    ...solid,
    children: <path d="M12 2.2 13.9 8 20 9.9 13.9 11.8 12 17.6 10.1 11.8 4 9.9 10.1 8z" />,
  },
  handshake: {
    ...stroke,
    children: [
      <path key="a" d="m3 11.5 3.5-3.5h5l3 3 3-3h5L19 11.5" />,
      <path key="b" d="m7.5 8 3.6 3.6a1.5 1.5 0 0 0 2.1 0L16.5 8" />,
      <path key="c" d="M3 11.5 7 15.5M21 11.5 17 15.5M10 18.5l1.5 1.5a1.5 1.5 0 0 0 2.1 0L15 18.5" />,
    ],
  },
  upload: {
    ...stroke,
    children: [
      <path key="a" d="M12 16V4M12 4 8 8M12 4l4 4" />,
      <path key="b" d="M4 15v3.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5V15" />,
    ],
  },
  building: {
    ...stroke,
    children: [
      <path key="a" d="M4 20V6.5A1.5 1.5 0 0 1 5.5 5h7A1.5 1.5 0 0 1 14 6.5V20" />,
      <path key="b" d="M14 10h4.5A1.5 1.5 0 0 1 20 11.5V20M2 20h20M7 8.5h4M7 12h4M7 15.5h4" />,
    ],
  },
  calendar: {
    ...stroke,
    children: [
      <rect key="a" x="3" y="5" width="18" height="16" rx="2" />,
      <path key="b" d="M3 10h18M8 3v4M16 3v4" />,
    ],
  },

  /* --- Social ----------------------------------------------------------- */
  facebook: {
    ...solid,
    children: <path d="M14 8.5V7a1.5 1.5 0 0 1 1.5-1.5H17V2.6h-2.5A4.5 4.5 0 0 0 10 7.1v1.4H7.5V12H10v9.4h4V12h2.6l.4-3.5z" />,
  },
  instagram: {
    ...solid,
    children: (
      <path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.6.2 2 .4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.4 1 .4 2 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.6-.4 2a3.4 3.4 0 0 1-1.2 1.2c-.4.2-1 .4-2 .4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.6-.2-2-.4a3.4 3.4 0 0 1-1.2-1.2c-.2-.4-.4-1-.4-2C2.2 15 2.2 14.7 2.2 12s0-3 .1-4.1c0-1 .2-1.6.4-2 .2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2 1-.4 2-.4 1.1-.1 1.4-.1 4.1-.1m0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m0 10.7a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4m6.8-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    ),
  },
  twitter: {
    ...solid,
    children: (
      <path d="M21.5 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.4 11.4 0 0 1 3.2 4.8a4 4 0 0 0 1.2 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8.1 8.1 0 0 1 2.5 18a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.2 11.5-11.6v-.5c.8-.6 1.5-1.3 2-2.1z" />
    ),
  },
  youtube: {
    ...solid,
    children: (
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8M10 15V9l5.2 3z" />
    ),
  },
};

/**
 * Render an icon by name.
 *
 * @param {object} props
 * @param {string} props.name  key of the ICONS map
 * @param {string} [props.className]
 */
export function Icon({ name, className = "", ...rest }) {
  const def = ICONS[name];
  if (!def) return null;

  const { children, ...svgProps } = def;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...svgProps}
      {...rest}
    >
      {children}
    </svg>
  );
}

/** All available icon names — handy for docs and debugging. */
export const ICON_NAMES = Object.keys(ICONS);
