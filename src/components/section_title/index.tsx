import { cn } from "@/utility"
import { HTMLAttributes } from "react"

export default function SectionTitle({
    children,
    className
}:HTMLAttributes<HTMLDivElement>){
    return <div
        className={cn(
            "flex flex-row justify-start items-center",
            className
        )}
    >
        <h1
            className={cn(
                "text-2xl font-bold relative",
                "border-b border-b-gray-300",
                "pb-1"
            )}
        >
            {children}
        </h1>
    </div>
}