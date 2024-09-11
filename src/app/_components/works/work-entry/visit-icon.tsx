import * as React from "react"
import { SVGProps } from "react"

const VisitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16 1V15H9V13H14V3H9V1L16 1Z" fill="#000000" />
    <path d="M6 4V7L8.74229e-08 7L0 9H6V12H7L11 8L7 4H6Z" fill="#000000" />
  </svg>
)

export default VisitIcon
