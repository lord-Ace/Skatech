import React from "react";

// ─────────────────────────────────────────────
//  ICON COMPONENTS
// ─────────────────────────────────────────────

export function SearchIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 L21 21" />
    </svg>
  );
}

export function HamburgerIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function BookmarkIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function EnvelopeIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

export function ChipIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer chip body */}
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      {/* Inner core grid */}
      <path d="M10 10h4v4h-4z" />
      {/* Pin legs — top */}
      <path d="M10 7V4" />
      <path d="M14 7V4" />
      {/* Pin legs — bottom */}
      <path d="M10 17v3" />
      <path d="M14 17v3" />
      {/* Pin legs — left */}
      <path d="M7 10H4" />
      <path d="M7 14H4" />
      {/* Pin legs — right */}
      <path d="M17 10h3" />
      <path d="M17 14h3" />
    </svg>
  );
}

export function BarChartIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Baseline */}
      <path d="M3 20h18" />
      {/* Bars */}
      <rect x="4" y="13" width="4" height="7" rx="0.5" />
      <rect x="10" y="8" width="4" height="12" rx="0.5" />
      <rect x="16" y="4" width="4" height="16" rx="0.5" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Body */}
      <rect x="2" y="8" width="20" height="13" rx="2" />
      {/* Handle */}
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      {/* Center divider */}
      <path d="M2 14h20" />
      {/* Clasp notch */}
      <path d="M10 14v2h4v-2" />
    </svg>
  );
}

export function FootballIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Ball */}
      <circle cx="12" cy="12" r="9" />
      {/* Pentagon patch lines — minimal soccer ball suggestion */}
      <path d="M12 3 L12 6" />
      <path d="M12 18 L12 21" />
      <path d="M3 12 L6 12" />
      <path d="M18 12 L21 12" />
      {/* Central pentagon */}
      <path d="M12 9 L14.4 10.7 L13.5 13.5 L10.5 13.5 L9.6 10.7 Z" />
      {/* Stitch lines from pentagon vertices to edge */}
      <path d="M12 9 L10.2 6.6" />
      <path d="M14.4 10.7 L17.1 9.8" />
      <path d="M13.5 13.5 L15.3 15.7" />
      <path d="M10.5 13.5 L8.7 15.7" />
      <path d="M9.6 10.7 L6.9 9.8" />
    </svg>
  );
}

export function RobotIcon({ size = 24, strokeWidth = 1.75, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Head */}
      <rect x="4" y="7" width="16" height="12" rx="2" />
      {/* Antenna */}
      <path d="M12 7V4" />
      <circle cx="12" cy="3.5" r="1" />
      {/* Eyes */}
      <circle cx="9" cy="12" r="1.5" />
      <circle cx="15" cy="12" r="1.5" />
      {/* Mouth — segmented smile */}
      <path d="M9 16h2M13 16h2" />
      {/* Ear bolts */}
      <path d="M4 11H2" />
      <path d="M20 11h2" />
    </svg>
  );
}