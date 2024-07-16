import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserMono = (
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
      d="M16.987 6.644a4.897 4.897 0 0 1-4.894 4.896 4.895 4.895 0 1 1 4.894-4.896m-4.895 6.393c-7.049 0-9.79 4.486-9.79 6.573 0 2.086 5.836 2.642 9.79 2.642s9.791-.556 9.791-2.642c0-2.087-2.742-6.573-9.79-6.573"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserMono);
const Memo = memo(ForwardRef);
export default Memo;
