import * as React from 'react'
import type { SVGProps } from 'react'
const SvgTwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#twitter-icon_svg__a)">
      <path
        fill="currentColor"
        d="M32 6.076a13.108 13.108 0 0 1-3.77 1.033 6.576 6.576 0 0 0 2.886-3.632 13.151 13.151 0 0 1-4.17 1.594 6.554 6.554 0 0 0-4.791-2.074c-4.239 0-7.354 3.955-6.396 8.06C10.304 10.784 5.467 8.171 2.228 4.2a6.574 6.574 0 0 0 2.03 8.765 6.538 6.538 0 0 1-2.971-.821c-.072 3.041 2.108 5.886 5.265 6.52a6.593 6.593 0 0 1-2.965.112 6.57 6.57 0 0 0 6.133 4.558A13.2 13.2 0 0 1 0 26.053a18.585 18.585 0 0 0 10.064 2.95c12.19 0 19.076-10.295 18.66-19.528A13.366 13.366 0 0 0 32 6.076z"
      />
    </g>
    <defs>
      <clipPath id="twitter-icon_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgTwitterIcon
