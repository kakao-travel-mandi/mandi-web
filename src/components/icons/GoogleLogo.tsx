import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGoogleLogo = (
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
    <g clipPath="url(#google-logo_svg__a)">
      <path
        fill="#4285F4"
        d="M10 8.182v3.872h5.382a4.6 4.6 0 0 1-2.01 3.01l3.246 2.518c1.89-1.746 2.982-4.31 2.982-7.355 0-.709-.064-1.39-.182-2.045z"
      />
      <path
        fill="#34A853"
        d="m4.396 11.903-.732.56-2.591 2.019C2.718 17.745 6.09 20 10 20c2.7 0 4.963-.89 6.618-2.418l-3.246-2.518c-.89.6-2.027.963-3.372.963-2.6 0-4.81-1.754-5.6-4.118z"
      />
      <path
        fill="#FBBC05"
        d="M1.073 5.519A9.9 9.9 0 0 0 0 10c0 1.618.39 3.137 1.073 4.482 0 .01 3.327-2.582 3.327-2.582-.2-.6-.318-1.236-.318-1.9S4.2 8.7 4.4 8.1z"
      />
      <path
        fill="#EA4335"
        d="M10 3.982c1.473 0 2.782.509 3.827 1.49l2.864-2.863C14.954.991 12.7 0 10 0 6.09 0 2.718 2.245 1.073 5.518L4.4 8.1c.79-2.364 3-4.118 5.6-4.118"
      />
    </g>
    <defs>
      <clipPath id="google-logo_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgGoogleLogo);
const Memo = memo(ForwardRef);
export default Memo;
