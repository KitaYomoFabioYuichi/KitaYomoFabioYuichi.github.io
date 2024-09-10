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

    return <div className="flex flex-row flex-wrap justify-start items-start gap-y-2 gap-x-4">
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
                "select-none",
                "bg-gray-200  opacity-75",
                "p-1 px-2 rounded-xl",
                "font-bold"
            )}
        >
            Copied!
        </m.div>
    </div>
}