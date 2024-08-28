"use client"

import { SVGProps } from "react"
import { motion } from "framer-motion"

interface BarsProps extends SVGProps<SVGSVGElement>{
    active?:boolean
}

const Bars = ({
    active = false, 
    ...props
}: BarsProps) => {
    return <svg
        width={"100%"}
        height={"100%"}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g id="Bars">
            <motion.rect
                initial={{
                    y:0
                }}
                animate={{
                    rotate:active?45:0,
                    y:active?25:0
                }}
                id="Bar1"
                x={15}
                y={20}
                width={70}
                height={10}
                rx={5}
                fill="#030712"
            />
            <motion.rect
                animate={{
                    scale:active?0:1
                }}
                id="Bar2"
                x={15}
                y={45}
                width={70}
                height={10}
                rx={5}
                fill="#030712"
            />
            <motion.rect
                initial={{
                    y:0
                }}
                animate={{
                    rotate:active?-45:0,
                    y:active?-25:0
                }}
                id="Bar3"
                x={15}
                y={70}
                width={70}
                height={10}
                rx={5}
                fill="#030712"
            />
        </g>
    </svg>
}
export default Bars
