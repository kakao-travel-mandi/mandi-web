import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDots = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 15"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill="#ADB1BA"
      fillRule="evenodd"
      d="M2.625 7.5a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0m3.5 0a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0m3.5 0a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDots);
const Memo = memo(ForwardRef);
export default Memo;
