import { cn } from "@/utility"
import Link from "next/link"
import { ReactNode } from "react"

interface NavLavelProps {
	children?:ReactNode,
	selected?:boolean,
	href?:string
}

export default function NavLavel({
	children,
	selected = false,
	href = ""
}:NavLavelProps){
	

	return <Link href={href} scroll>
		<li
			className={cn(
				"relative cursor-pointer select-none",
				"flex flex-row justify-center items-center",
				"transition-transform duration-100 ",
				"capitalize",
				!selected&&"hover:translate-y-[-3px] active:translate-y-[-3px]",
				selected?"font-semibold translate-y-[-3px]":"text-gray-500",
				
				//Underline
				"after:absolute after:bottom-0 after:left-0 after:right-0",
				"after:h-[1px] after:bg-gray-200",
				"after:transition-transform",
				selected?"after:scale-x-100":"after:scale-x-0"
			)}
		>
			{children}
		</li>
	</Link>
}