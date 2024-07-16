import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPinMap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill="#ADB1BA"
      fillRule="evenodd"
      d="m7.693 14.9.047.028.019.01c.149.082.333.081.482 0l.019-.01q.016-.01.047-.027l.17-.102a13.057 13.057 0 0 0 2.38-1.914C12.155 11.558 13.5 9.565 13.5 7a5.5 5.5 0 1 0-11 0c0 2.564 1.346 4.558 2.642 5.885a13 13 0 0 0 2.381 1.914zM8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPinMap);
const Memo = memo(ForwardRef);
export default Memo;
