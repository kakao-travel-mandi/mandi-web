import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClockIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.width || 16}
    height={props.height || 16}
    ref={ref}
    {...props}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.0001 14.4C11.5347 14.4 14.4001 11.5346 14.4001 7.99998C14.4001 4.46535 11.5347 1.59998 8.0001 1.59998C4.46547 1.59998 1.6001 4.46535 1.6001 7.99998C1.6001 11.5346 4.46547 14.4 8.0001 14.4ZM8.8001 4.79998C8.8001 4.35815 8.44194 3.99998 8.0001 3.99998C7.55827 3.99998 7.2001 4.35815 7.2001 4.79998V7.99998C7.2001 8.21214 7.28439 8.41566 7.43441 8.56566L9.69714 10.8284C10.0095 11.1409 10.5161 11.1409 10.8285 10.8284C11.141 10.516 11.141 10.0094 10.8285 9.69702L8.8001 7.66861V4.79998Z"
      fill="#ADB1BA"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgClockIcon);
const Memo = memo(ForwardRef);
export default Memo;
