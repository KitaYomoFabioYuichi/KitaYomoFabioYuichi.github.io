"use client"

import { cn } from "@/utility"
import { HTMLMotionProps, m } from "framer-motion";

type ButtonType = 'Primary'|'Secondary'

interface ButtonProps extends HTMLMotionProps<"button"> {
    styleType?:ButtonType
}

export default function Button({
    children,
    className,
    styleType = "Primary",
    ...props
}:ButtonProps){

    let buttonTypeStyle;

    if (styleType == 'Primary'){
        buttonTypeStyle = "bg-gray-800 text-white hover:bg-gray-600 active:bg-gray-600";
    }else if(styleType == "Secondary"){
        buttonTypeStyle = "bg-white border border-gray-300 hover:bg-gray-200 active:bg-gray-200";
    }

    return <m.button 
        {...props}

        whileHover={{
            y: -3,
            boxShadow: "0px 3px 0px #d1d5db"
        }}

        whileTap={{
            y:0,
            boxShadow: "0px 0px 0px #d1d5db"
        }}

        transition={{
            duration:0.1
        }}

        className={cn(
            "px-6 py-3 font-bold rounded-xl transition-colors",
            buttonTypeStyle,
            className
        )}
    >
        {children}
    </m.button >
}