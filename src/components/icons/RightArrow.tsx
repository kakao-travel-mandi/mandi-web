import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRightArrow = (
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
      d="M8.625 20.1c-.345 0-.69-.135-.96-.39a1.35 1.35 0 0 1 0-1.905L13.47 12 7.665 6.21a1.35 1.35 0 0 1 0-1.905 1.35 1.35 0 0 1 1.905 0l6.75 6.75a1.35 1.35 0 0 1 0 1.905l-6.75 6.75c-.255.255-.6.39-.945.39"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRightArrow);
const Memo = memo(ForwardRef);
export default Memo;
