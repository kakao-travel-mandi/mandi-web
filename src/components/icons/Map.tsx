import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8.861 2.58a1.88 1.88 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.868-1.935A1.875 1.875 0 0 1 22.45 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.88 1.88 0 0 1-1.677 0l-4.993-2.497a.38.38 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.95 19.18V6.695c0-.71.401-1.36 1.036-1.677zM9.7 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9.7 6m6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMap);
const Memo = memo(ForwardRef);
export default Memo;
