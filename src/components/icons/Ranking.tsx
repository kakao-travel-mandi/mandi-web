import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRanking = (
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
      d="M6.97 14H4.3c-1.1 0-2 .9-2 2v5c0 .55.45 1 1 1h3.67c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M13.63 10h-2.67c-1.1 0-2 .9-2 2v9c0 .55.45 1 1 1h4.67c.55 0 1-.45 1-1v-9a2 2 0 0 0-2-2M20.3 17h-2.67c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3.67c.55 0 1-.45 1-1v-2c0-1.1-.9-2-2-2M15.31 4.85c.31-.31.43-.68.33-1s-.41-.55-.85-.62l-.96-.16c-.04 0-.13-.07-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.01.04-.1.11-.14.11l-.96.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.04.03.07.15.06.19l-.21.92c-.16.69.1 1 .27 1.12s.54.28 1.15-.08l.9-.53c.04-.03.17-.03.21 0l.89.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgRanking);
const Memo = memo(ForwardRef);
export default Memo;
