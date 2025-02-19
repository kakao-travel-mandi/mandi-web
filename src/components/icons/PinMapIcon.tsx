import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPinMapIcon = (
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
      d="M7.69316 14.9007C7.7133 14.9124 7.72913 14.9214 7.74034 14.9277L7.75895 14.9381C7.90753 15.0196 8.09184 15.019 8.24056 14.9383L8.25966 14.9277C8.27087 14.9214 8.2867 14.9124 8.30684 14.9007C8.34711 14.8774 8.40465 14.8433 8.477 14.7988C8.62164 14.7097 8.82583 14.5784 9.06974 14.4061C9.55673 14.0621 10.2065 13.5516 10.8577 12.8849C12.1538 11.5579 13.5 9.56411 13.5 7C13.5 3.96243 11.0376 1.5 8 1.5C4.96243 1.5 2.5 3.96243 2.5 7C2.5 9.56411 3.84622 11.5579 5.1423 12.8849C5.7935 13.5516 6.44327 14.0621 6.93026 14.4061C7.17417 14.5784 7.37836 14.7097 7.523 14.7988C7.59535 14.8433 7.65289 14.8774 7.69316 14.9007ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
      fill="#ADB1BA"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPinMapIcon);
const Memo = memo(ForwardRef);
export default Memo;
