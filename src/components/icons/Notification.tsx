import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotification = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 20"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill="#ADB1BA"
      d="M8.4 0a7.2 7.2 0 0 0-7.2 7.2v4.303l-.848.848A1.2 1.2 0 0 0 1.2 14.4h14.4a1.2 1.2 0 0 0 .848-2.049l-.848-.848V7.2A7.2 7.2 0 0 0 8.4 0"
    />
    <path
      fill="#868B94"
      d="M8.4 19.2a3.6 3.6 0 0 1-3.6-3.6H12a3.6 3.6 0 0 1-3.6 3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNotification);
const Memo = memo(ForwardRef);
export default Memo;
