import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill="#ADB1BA"
      fillRule="evenodd"
      d="M8 14.4A6.4 6.4 0 1 0 8 1.6a6.4 6.4 0 0 0 0 12.8m.8-9.6a.8.8 0 1 0-1.6 0V8a.8.8 0 0 0 .234.566l2.263 2.262a.8.8 0 1 0 1.132-1.131L8.8 7.669z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClock);
const Memo = memo(ForwardRef);
export default Memo;
