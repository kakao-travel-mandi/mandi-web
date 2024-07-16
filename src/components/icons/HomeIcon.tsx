import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHomeIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill={props.color || `#D1D3D8`}
      fillRule="evenodd"
      d="m21.969 8.204-8.447-6.717a1 1 0 0 0-1.244 0L3.83 8.204a2 2 0 0 0-.755 1.565v9.418a2.4 2.4 0 0 0 2.4 2.4H10.9v-4.752a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.752h5.424a2.4 2.4 0 0 0 2.4-2.4V9.77a2 2 0 0 0-.755-1.565"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeIcon);
const Memo = memo(ForwardRef);
export default Memo;
