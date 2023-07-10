import { SVGProps } from "react";
const Bitbucket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#2684FF"
      d="M2.909 3a.885.885 0 0 0-.691.322.948.948 0 0 0-.206.753L5.82 27.948A1.233 1.233 0 0 0 7.013 29h18.27a.906.906 0 0 0 .897-.778l3.808-24.143a.948.948 0 0 0-.206-.753.885.885 0 0 0-.69-.321L2.908 3Zm16.036 17.255h-5.832l-1.578-8.519h8.823l-1.413 8.519Z"
    />
    <path
      fill="url(#bitbucket_svg__a)"
      fillRule="evenodd"
      d="M28.778 11.736h-8.42l-1.413 8.519h-5.831l-6.885 8.44c.218.194.496.303.784.305h18.275a.906.906 0 0 0 .897-.778l2.593-16.486Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="bitbucket_svg__a"
        x1={30.724}
        x2={20.576}
        y1={14.122}
        y2={28.075}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default Bitbucket;
