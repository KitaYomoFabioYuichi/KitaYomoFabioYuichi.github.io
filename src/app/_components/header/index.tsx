"use client"

import { cn } from "@/utility";
import { ReactNode, useState } from "react";
import Bars from "./bars";

export default function Header(){
    const [active, setActive] = useState(false);

    return <header className={cn(
        //Outer layout
        "bg-white",
        "border-b border-gray-200",
        "h-20",

        //Inner Layout
        "px-4 md:px-12",
        "flex flex-row justify-between items-center",
    )}>
        <h1 className="text-2xl font-black">
            Fabio Kita
        </h1>

        <div className="md:hidden">
            <div className="h-8">
                <Bars onClick={()=>setActive(a=>!a)} active={active}/>
            </div>
        </div>

        <nav className="hidden md:block">
            <ul className="flex flex-row gap-12">
                <NavLavel selected={true}>Home</NavLavel>
                <NavLavel>About</NavLavel>
                <NavLavel>Skills</NavLavel>
                <NavLavel>Works</NavLavel>
                <NavLavel>Contact</NavLavel>
            </ul>
        </nav>
    </header>
}

function NavMenu(){
	
}

interface NavLavelProps {
	children?:ReactNode,
	selected?:boolean
}

function NavLavel({
	children,
	selected = false
}:NavLavelProps){
	return <li className={cn(
		"relative cursor-pointer select-none",
		!selected&&"text-gray-500",

		//Underline
		"after:absolute after:bg-black after:bottom-0 after:left-0 after:right-0",
		"after:border-b-2 after:border-gray-300",
		"after:transition-transform after:scale-0 hover:after:scale-100"
	)}>
		{children}
	</li>
}