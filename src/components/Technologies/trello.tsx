import { SVGProps } from "react";
const Trello = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      fill="#007AC2"
      fillRule="evenodd"
      d="M6 9v27a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3Zm21 0v15a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3ZM6 0C2.686 0 0 2.688 0 6v36c0 3.313 2.688 6 6 6h36c3.314 0 6-2.688 6-6V6c0-3.313-2.688-6-6-6H6Z"
    />
  </svg>
);
export default Trello;
