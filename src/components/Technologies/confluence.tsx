import { SVGProps } from "react";
const Confluence = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    {...props}
  >
    <defs>
      <linearGradient
        id="confluence_svg__a"
        x1={28.607}
        x2={11.085}
        y1={-60.825}
        y2={-50.756}
        gradientTransform="matrix(1 0 0 -1 0 -29.66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052cc" />
        <stop offset={1} stopColor="#2684ff" />
      </linearGradient>
      <linearGradient
        xlinkHref="#confluence_svg__a"
        id="confluence_svg__b"
        x1={621.442}
        x2={603.915}
        y1={1817.567}
        y2={1827.64}
        gradientTransform="matrix(-1 0 0 1 624.83 -1816.71)"
      />
    </defs>
    <path
      d="M3.015 23.087c-.289.472-.614 1.02-.891 1.456a.892.892 0 0 0 .3 1.212l5.792 3.564a.89.89 0 0 0 1.226-.29l.008-.013c.231-.387.53-.891.855-1.43 2.294-3.787 4.6-3.323 8.763-1.336l5.743 2.731A.892.892 0 0 0 26 28.559l.011-.024 2.755-6.235a.891.891 0 0 0-.445-1.167 695.491 695.491 0 0 1-5.792-2.754c-7.805-3.793-14.439-3.548-19.514 4.708Z"
      style={{
        fill: "url(#confluence_svg__a)",
      }}
    />
    <path
      d="M28.985 8.932c.289-.472.614-1.02.891-1.456a.892.892 0 0 0-.3-1.212L23.785 2.7a.89.89 0 0 0-1.236.241.584.584 0 0 0-.033.053c-.232.387-.53.891-.856 1.43-2.294 3.787-4.6 3.323-8.763 1.336L7.172 3.043a.89.89 0 0 0-1.187.421l-.011.024-2.758 6.238a.891.891 0 0 0 .445 1.167c1.212.57 3.622 1.706 5.792 2.753 7.823 3.787 14.457 3.533 19.532-4.714Z"
      style={{
        fill: "url(#confluence_svg__b)",
      }}
    />
  </svg>
);
export default Confluence;
