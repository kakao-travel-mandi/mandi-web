import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMandiLogo = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 148 114"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path fill="#00B288" d="M44.29 40.054 88.582 114H0z" />
    <path
      fill="#00B288"
      fillRule="evenodd"
      d="M61.622 10.013 99.59 74.086l11.713-19.397L147.122 114H97.288L48.384 32.352zM43.977 39.788 88.581 114H0z"
      clipRule="evenodd"
    />
    <path
      fill="#00B288"
      d="m103.749 13.294 32.368 3.924-.701 5.78-32.368-3.924z"
    />
    <path
      fill="#00B288"
      d="m124.435 2.313-3.925 32.368-5.78-.701 3.925-32.368z"
    />
    <path
      fill="#00B288"
      d="m134.21 10.381-25.663 20.112-3.591-4.582 25.662-20.112z"
    />
    <path
      fill="#00B288"
      d="M127.347 32.773 107.235 7.111l4.583-3.592 20.112 25.663z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMandiLogo);
const Memo = memo(ForwardRef);
export default Memo;
