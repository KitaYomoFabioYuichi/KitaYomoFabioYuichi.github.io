"use client"

import { ReactNode, SVGProps, useState } from "react"
import { m } from "framer-motion"
import NavLavel from "./nav-label";
import { cn } from "@/utility";

interface HeaderNavMenuProps{
    children?:ReactNode
}

export default function HeaderNavMenu({
    children
}:HeaderNavMenuProps){
    const [active, setActive] = useState(false);

    return <>
        <nav className="lg:hidden">
            <button className="h-10" onClick={()=>setActive(a=>!a)}>
                <Bars active={active}/>
            </button>
            <div className={cn(
                "absolute left-0 right-0 border-b border-gray-200 bg-white -z-10",
                "transition-all",
                "p-4",
                "flex flex-row",
                active?"top-20":"-top-10"
            )}>
                <ul className="flex-1 flex flex-row flex-wrap gap-6 justify-around items-center">
                    {children}
                </ul>
            </div>
        </nav>
        <nav className="hidden lg:block">
            <ul className="flex flex-row gap-12">
                {children}
            </ul>
        </nav>
    </>
}

interface BarsProps extends SVGProps<SVGSVGElement>{
    active?:boolean
}

const Bars = ({
    active = false, 
    ...props
}: BarsProps) => {
    return <svg width={"100%"} height={"100%"} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" 
    {...props}>
        <g id="Bars">
        <m.rect
                initial={{ y:0, originX:"50px", originY:"25px" }}
                animate={{ rotate:active?45*3:0, y:active?25:0, }}
                id="Bar1" 
                x={15} y={20} width={70} height={10} rx={5}
                fill="#030712"
            />
            <m.rect
                initial={{ originX:"50px", originY:"50px" }}
                animate={{ scaleX:active?0:1 }}
                id="Bar2"
                x={15} y={45} width={70} height={10} rx={5}
                fill="#030712"
            />
            <m.rect
                initial={{ y:0, originX:"50px", originY:"75px" }}
                animate={{ rotate:active?45*5:0, y:active?-25:0 }}
                id="Bar3"
                x={15} y={70} width={70} height={10} rx={5}
                fill="#030712"
            />
        </g>
    </svg>
}