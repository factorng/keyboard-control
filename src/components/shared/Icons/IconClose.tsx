import { SVGProps } from "react";

export const IconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    fill={props.fill}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.5 5.5L5.5 14.5"
      stroke="#B8C1CC"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5 14.5L5.5 5.5"
      stroke="#B8C1CC"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
