import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmark = (
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
      d="M6.82 2.577a49.3 49.3 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12.5 18.089l-7.165 3.583A.75.75 0 0 1 4.25 21V5.507c0-1.47 1.073-2.756 2.57-2.93"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmark);
const Memo = memo(ForwardRef);
export default Memo;
