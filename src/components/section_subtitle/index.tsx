import { cn } from "@/utility";
import { HTMLAttributes } from "react";

export default function SectionSubTitle({
    children,
    className
}:HTMLAttributes<HTMLHeadingElement>){
    return <h2 className={cn(
        "text-gray-500 text-base",
        className
    )}>
        {children}
    </h2>
}