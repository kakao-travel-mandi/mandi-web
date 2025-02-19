import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClockIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.width || 14}
    height={props.height || 15}
    ref={ref}
    {...props}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.625 7.5C2.625 7.01675 3.01675 6.625 3.5 6.625C3.98325 6.625 4.375 7.01675 4.375 7.5C4.375 7.98325 3.98325 8.375 3.5 8.375C3.01675 8.375 2.625 7.98325 2.625 7.5ZM6.125 7.5C6.125 7.01675 6.51675 6.625 7 6.625C7.48325 6.625 7.875 7.01675 7.875 7.5C7.875 7.98325 7.48325 8.375 7 8.375C6.51675 8.375 6.125 7.98325 6.125 7.5ZM9.625 7.5C9.625 7.01675 10.0168 6.625 10.5 6.625C10.9832 6.625 11.375 7.01675 11.375 7.5C11.375 7.98325 10.9832 8.375 10.5 8.375C10.0168 8.375 9.625 7.98325 9.625 7.5Z"
      fill="#ADB1BA"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClockIcon);
const Memo = memo(ForwardRef);
export default Memo;
