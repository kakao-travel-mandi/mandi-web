import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDownArrow = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    width={props.width || 14}
    height={props.height || 14}
    ref={ref}
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.27502 5.03113C2.27502 4.82988 2.35377 4.62863 2.50251 4.47113C2.6501 4.32419 2.84988 4.2417 3.05814 4.2417C3.2664 4.2417 3.46618 4.32419 3.61377 4.47113L7.00002 7.85738L10.3775 4.47113C10.5251 4.32419 10.7249 4.2417 10.9331 4.2417C11.1414 4.2417 11.3412 4.32419 11.4888 4.47113C11.6357 4.61872 11.7182 4.8185 11.7182 5.02676C11.7182 5.23502 11.6357 5.4348 11.4888 5.58238L7.55127 9.51988C7.40368 9.66682 7.2039 9.74932 6.99564 9.74932C6.78738 9.74932 6.5876 9.66682 6.44002 9.51988L2.50251 5.58238C2.35377 5.43363 2.27502 5.23238 2.27502 5.03113Z"
      fill="#4D5159"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgDownArrow);
const Memo = memo(ForwardRef);
export default Memo;
