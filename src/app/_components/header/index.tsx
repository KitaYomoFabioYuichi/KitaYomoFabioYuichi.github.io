"use client"

import { cn } from "@/utility";
import { useState } from "react";
import Bars from "./bars";
import NavLavel from "./nav-label";

export default function Header(){
    const [active, setActive] = useState(false);

    return <header className={"fixed top-0 w-full z-30"}>
        <div className={cn(
            "bg-white border-b border-gray-200",
            "h-20",
            "px-4 md:px-12",
            "flex flex-row justify-between items-center",
        )}>
            <h1 className="text-2xl font-black">
                Fabio Kita
            </h1>
            
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
                        <NavLavel selected={true}>Home</NavLavel>
                        <NavLavel>About</NavLavel>
                        <NavLavel>Skills</NavLavel>
                        <NavLavel>Works</NavLavel>
                        <NavLavel>Contact</NavLavel>
                    </ul>
                </div>
            </nav>

            <nav className="hidden lg:block">
                <ul className="flex flex-row gap-12">
                    <NavLavel selected={true}>Home</NavLavel>
                    <NavLavel>About</NavLavel>
                    <NavLavel>Skills</NavLavel>
                    <NavLavel>Works</NavLavel>
                    <NavLavel>Contact</NavLavel>
                </ul>
            </nav>
        </div>
    </header>
}
