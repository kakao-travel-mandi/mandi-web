import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDownArrow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill="#4D5159"
      fillRule="evenodd"
      d="M2.275 5.031c0-.201.079-.402.228-.56a.79.79 0 0 1 1.11 0L7 7.857l3.377-3.386a.79.79 0 0 1 1.112 0 .79.79 0 0 1 0 1.111L7.55 9.52a.79.79 0 0 1-1.111 0L2.503 5.582a.78.78 0 0 1-.228-.55"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDownArrow);
const Memo = memo(ForwardRef);
export default Memo;
