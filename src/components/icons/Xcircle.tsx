import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgXcircle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill={props.color || `#D1D3D8`}
      fillRule="evenodd"
      d="M10 1.875a8.125 8.125 0 1 0 0 16.25 8.125 8.125 0 0 0 0-16.25M8.567 7.683a.625.625 0 1 0-.884.884L9.116 10l-1.433 1.433a.625.625 0 1 0 .884.884L10 10.884l1.433 1.433a.625.625 0 1 0 .884-.884L10.884 10l1.433-1.433a.625.625 0 1 0-.884-.884L10 9.116z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgXcircle);
const Memo = memo(ForwardRef);
export default Memo;
