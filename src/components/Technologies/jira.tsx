import { SVGProps } from "react";
const Jira = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#2684FF"
      d="M29.665 15.216 17.208 3.168 16 2l-9.377 9.07-4.288 4.146a1.083 1.083 0 0 0 0 1.568l8.567 8.286L16 30l9.377-9.07.146-.14 4.142-4.006a1.083 1.083 0 0 0 0-1.567ZM16 20.14 11.72 16 16 11.86 20.28 16 16 20.14Z"
    />
    <path
      fill="url(#jira_svg__a)"
      fillRule="evenodd"
      d="M16 11.86a6.81 6.81 0 0 1-.03-9.827l-9.366 9.055 5.097 4.93L16 11.861Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#jira_svg__b)"
      fillRule="evenodd"
      d="M20.291 15.989 16 20.139a6.857 6.857 0 0 1 2.112 4.93c0 1.85-.76 3.623-2.112 4.93l9.389-9.08-5.098-4.93Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="jira_svg__a"
        x1={15.236}
        x2={8.096}
        y1={7.673}
        y2={10.79}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="jira_svg__b"
        x1={16.818}
        x2={23.944}
        y1={24.279}
        y2={21.184}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default Jira;
