import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLeftArrow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill="#ADB1BA"
      fillRule="evenodd"
      d="M15.249 6.351a1.2 1.2 0 0 1 0 1.698L11.297 12l3.951 3.951a1.2 1.2 0 0 1-1.696 1.697l-4.8-4.8a1.2 1.2 0 0 1 0-1.697l4.8-4.8a1.2 1.2 0 0 1 1.697 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLeftArrow);
const Memo = memo(ForwardRef);
export default Memo;
