"use client"

import { cn } from "@/utility"
import { ReactNode } from "react"

interface NavLavelProps {
	children?:ReactNode,
	selected?:boolean,
	onClick?:(e: React.MouseEvent<HTMLLIElement>)=>void
}

export default function NavLavel({
	children,
	selected = false,
	onClick
}:NavLavelProps){
	return <li 
		className={cn(
			"relative cursor-pointer select-none",
			"flex flex-row justify-center items-center",
			selected?"font-bold":"text-gray-500",

			//Underline
			"after:absolute after:bg-black after:bottom-0 after:left-0 after:right-0",
			"after:border-b-2 after:border-gray-300",
			"after:transition-transform after:scale-0 hover:after:scale-100 active:after:scale-100"
		)}
		onClick={onClick}
	>
		{children}
	</li>
}