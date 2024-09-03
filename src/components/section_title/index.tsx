import { cn } from "@/utility"
import { HTMLAttributes } from "react"
import EnterDiv from "../animation/enter-div"

export default function SectionTitle({
    children,
    className
}:HTMLAttributes<HTMLDivElement>){
    return <EnterDiv
        className={cn(
            "flex flex-row justify-start items-center",
            className
        )}
        from={{x:-100, y:0}}
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
    </EnterDiv>
}