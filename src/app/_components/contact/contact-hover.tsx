"use client"

import { m } from "framer-motion"
import { ReactNode } from "react"

interface ContactHoverProps{
    children?:ReactNode
}

export default function ContactHover({
    children
}:ContactHoverProps){
    return <m.div
        className="select-none"
        whileHover={{
            scale:1.1
        }}
    >
        {children}
    </m.div>
}