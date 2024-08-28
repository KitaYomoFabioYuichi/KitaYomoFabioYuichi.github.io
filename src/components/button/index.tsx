"use client"

import { ReactNode, useState } from "react"

type ButtonType = 'Primary'|'Secondary'

type ButtonProps = {
    children?:ReactNode,
    className?:string,
    type?:ButtonType
}

export default function Button({
    children,
    className,
    type = 'Primary'
}:ButtonProps){

    const [hover, setHover] = useState(false);

    let buttonTypeStyle = "py-3 font-bold rounded-xl transition-colors ";
    let buttonTypeStyleHover = "";

    if (type == 'Primary'){
        buttonTypeStyle += "bg-gray-800 text-white";
        buttonTypeStyleHover += "bg-gray-600 text-white";
    }else if(type == "Secondary"){
        buttonTypeStyle += "bg-white border-gray-300 border";
        buttonTypeStyleHover += "bg-gray-200 border-gray-300 border";
    }

    return <button 
        className={`${buttonTypeStyle} ${hover&&buttonTypeStyleHover} ${className}`}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
    >
        {children}
    </button>
}