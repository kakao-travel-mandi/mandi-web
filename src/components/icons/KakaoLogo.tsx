import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKakaoLogo = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#kakao-logo_svg__a)">
      <path
        fill={props.color || `#000000`}
        fillRule="evenodd"
        d="M10 .667C4.477.667 0 4.126 0 8.392c0 2.653 1.732 4.992 4.368 6.383l-1.11 4.053c-.097.358.312.643.627.436l4.863-3.21q.615.061 1.252.063c5.523 0 10-3.46 10-7.725C20 4.126 15.523.667 10 .667"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="kakao-logo_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgKakaoLogo);
const Memo = memo(ForwardRef);
export default Memo;
