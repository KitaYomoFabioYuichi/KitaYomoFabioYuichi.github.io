"use client"

import { cn } from "@/utility"
import { HTMLMotionProps, m, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface EnterDivProps extends HTMLMotionProps<"div">{
    from?:{
        x:number,
        y:number
    },
    delay?: number,
    duration?:number
}

export default function EnterDiv({
    className,
    children,
    from = {x:0, y:0},
    delay = 0,
    duration = 0.5
}:EnterDivProps){
    const [entered, setEntered] = useState(false);

    const component = useRef(null);
    const inView = useInView(component, {
        margin: '-15% 0px'
    });

    useEffect(()=>{
        if(inView) setEntered(true);
    },[inView])

    return <m.div
        initial={{
            x:from.x,
            y:from.y,
            opacity:0
        }}

        animate={{
            x:entered?0:from.x,
            y:entered?0:from.y,
            opacity:entered?1:0
        }}

        transition={{
            ease:"easeOut",
            duration,
            delay
        }}

        className={cn(
            "",
            className
        )}

        ref={component}
    >
        {children}
    </m.div>
}