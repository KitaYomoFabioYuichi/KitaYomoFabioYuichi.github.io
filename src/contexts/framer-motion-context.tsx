"use client"

import { domAnimation, LazyMotion } from "framer-motion"
import { ReactNode } from "react"

interface FramerMotionContextProps{
    children:ReactNode
}

export default function FramerMotionContext({ children }:FramerMotionContextProps) {
    return <LazyMotion features={domAnimation}>
        {children}
    </LazyMotion>
}