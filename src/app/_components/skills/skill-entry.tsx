"use client"

import Image, { StaticImageData } from "next/image";
import EnterDiv from "@/components/animation/enter-div";
import { cn } from "@/utility";
import { m } from "framer-motion"
import { useState } from "react";

interface SkillEntryProps{
    src:StaticImageData,
    name:string,
    index?:number
}

export default function SkillEntry({
    src,
    name,
    index = 0
}:SkillEntryProps){
    const [hover, setHover] = useState(false);
    

    return <EnterDiv
        className="relative flex flex-col justify-center items-center"
        from={{x:0, y: 50}} 
        delay={index*0.1}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
    >
        <m.div 
            className="relative w-20 h-20"
            animate={{
                y:hover?-10:0,
            }}
        >
            <Image
                src={src}
                alt={name}
                fill
                sizes="5rem"
            />
        </m.div>
        <m.div 
            className={cn(
                "absolute bottom-[-10px] select-none",
                "text-center text-sm text-white bg-gray-800 rounded-lg px-2"
            )}
            initial={{
                opacity:0
            }}
            animate={{
                opacity:hover?1:0
            }}
        >
            {name}
        </m.div>
    </EnterDiv>
}