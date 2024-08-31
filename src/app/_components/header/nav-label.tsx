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
			"transition-transform duration-100 ",
			!selected&&"hover:translate-y-[-3px] active:translate-y-[-3px]",
			selected?"font-semibold translate-y-[-3px]":"text-gray-500",
			
			//Underline
			"after:absolute after:bottom-0 after:left-0 after:right-0",
			"after:h-[1px] after:bg-gray-300",
			"after:transition-transform after:scale-x-0 hover:after:scale-x-100 active:after:scale-x-100",
			selected?"after:scale-x-100":""
		)}
		onClick={onClick}
	>
		{children}
	</li>
}