"use client"

import { ReactNode, useState } from "react";

type NavLabelProps = {
    children:ReactNode,
    selected?:boolean
};

export default function NavLabel({children, selected = false}:NavLabelProps){
    const [hover, setHover] = useState(false);

    return <nav
        className="relative cursor-pointer" 
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
    >
        <div className={`text-base ${!selected?"text-gray-500":"font-semibold"}`}>{children}</div>
        <div className={`absolute inset-0 border-b-2 border-gray-400 transition-transform ${hover?"scale-x-100":"scale-x-0"}`}/>
    </nav>
}