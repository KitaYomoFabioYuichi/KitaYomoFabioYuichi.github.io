"use client"

import { cn } from "@/utility";
import ContactHover from "./contact-hover";
import { useRef, useState } from "react";
import { m } from "framer-motion";

const GMAIL = "kitayomofabioyuichi@gmail.com";

export default function EmailContact(){
    const timeout = useRef<NodeJS.Timeout>();
    
    const [showPopup, setShowPopup] = useState(false);

    const handleOnClick = ()=>{
        navigator.clipboard.writeText(GMAIL);

        setShowPopup(true);
        if(timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(()=>setShowPopup(false), 2000);
    }

    return <div className="relative">
        <ContactHover scale={1.1} onClick={handleOnClick}>
            <p className="text-white text-base sm:text-lg lg:text-xl cursor-pointer">{GMAIL}</p>
        </ContactHover>
        <m.div
            initial={{opacity:0}}
            animate={{
                opacity:showPopup?0.75:0,
            }}
            transition={{
                duration:showPopup?0.1:0.5
            }}
            className={cn(
                "absolute select-none",
                "translate-x-[-50%] translate-y-[-50%]",
                "bottom-[-45px] left-1/2 top-auto right-auto",
                "sm:top-1/2 sm:right-[-150px] sm:bottom-auto sm:left-auto",
                "bg-gray-200  opacity-75",
                "p-1 px-2 rounded-xl",
                "font-bold"
            )}
        >
            Copied!
        </m.div>
    </div>
}