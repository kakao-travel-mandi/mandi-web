import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMandiTitle = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 129 36"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}
  >
    <path
      fill="#212124"
      d="M124.648 0C127.164 0 129 1.836 129 4.352s-1.836 4.351-4.352 4.351-4.351-1.836-4.351-4.351c0-2.516 1.836-4.352 4.351-4.352m3.554 11.298v23.475h-7.107V11.298zM103.116 35.253c-6.707 0-11.378-5.15-11.378-12.257s4.67-12.256 11.378-12.256c3.074 0 5.31 1.078 6.707 2.954V1.158h7.106v33.536h-7.106v-2.396c-1.397 1.877-3.633 2.955-6.707 2.955m1.118-6.069c3.473 0 5.709-2.595 5.709-6.188s-2.236-6.188-5.709-6.188c-3.394 0-5.55 2.595-5.55 6.188s2.156 6.188 5.55 6.188M66.53 34.693V11.298h7.106v2.396c1.398-1.877 3.553-2.955 6.548-2.955 5.43 0 9.142 3.953 9.142 10.42v13.534H82.22V22.357c0-3.553-1.438-5.51-4.112-5.51-2.795 0-4.472 2.196-4.472 5.83v12.016zM48.55 35.252c-6.707 0-11.378-5.15-11.378-12.256 0-7.107 4.671-12.257 11.378-12.257 3.074 0 5.31 1.078 6.708 2.955v-2.396h7.106v23.395h-7.106v-2.395c-1.398 1.876-3.634 2.954-6.708 2.954m1.118-6.068c3.474 0 5.71-2.595 5.71-6.188s-2.236-6.188-5.71-6.188c-3.393 0-5.55 2.595-5.55 6.188s2.157 6.188 5.55 6.188M0 34.694V2.156h5.789l11.218 18.205L28.226 2.156h5.789v32.538h-7.267V16.848l-7.545 12.496h-4.391L7.266 16.848v17.846z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMandiTitle);
const Memo = memo(ForwardRef);
export default Memo;
