import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCheckIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="icon-check-mono">
      <path
        id="Vector"
        d="M10.6 17.2C10.3 17.2 9.99995 17.1 9.79995 16.8L5.19995 12.2C4.69995 11.7 4.69995 11 5.19995 10.5C5.69995 9.99998 6.39995 9.99998 6.89995 10.5L10.6 14.2L17.2 7.59998C17.7 7.09998 18.4 7.09998 18.9 7.59998C19.4 8.09998 19.4 8.79998 18.9 9.29998L11.5 16.7C11.2 17.1 10.9 17.2 10.6 17.2V17.2Z"
        fill="#393A40"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgCheckIcon);
const Memo = memo(ForwardRef);
export default Memo;
