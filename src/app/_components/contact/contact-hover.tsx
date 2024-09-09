"use client"

import { cn } from "@/utility"
import { HTMLMotionProps, m } from "framer-motion"
import { ReactNode } from "react"

interface ContactHoverProps extends HTMLMotionProps<"div">{
    children?:ReactNode,
    scale?:number
}

export default function ContactHover({
    children,
    scale = 1.25,
    ...props
}:ContactHoverProps){
    return <m.div
        {...props}
        className={cn(
            "select-none",
            props.className
        )}
        whileHover={{
            scale
        }}
    >
        {children}
    </m.div>
}