import Temp from "./works/temp-work.png"
import Button from "@/components/button";
import GithubIcon from "./github-icon";
import Image from "next/image";
import { cn } from "@/utility";
import { ReactNode } from "react";

export default function WorkEntry(){
    return <div
        className={cn(
            "flex flex-col flex-shrink-[0]",
            "w-[calc(100vw-20%)] h-[400px] sm:w-[400px]",
            "border border-gray-200 rounded-lg",
            "overflow-hidden"
        )}
    >
        <div className="relative flex-[1.5] border-b border-gray-200">
            <Image src={Temp} alt="Work" fill sizes="400px" style={{objectFit:"cover", objectPosition:"top left"}}/>
        </div>
        <div className="flex-[1] flex flex-col gap-2 p-4">
            <h1 className="text-xl font-bold">Lorem Ipsum</h1>
            <div className="flex flex-row justify-start items-center gap-4">
                <WorkEntryTab>Java</WorkEntryTab>
                <WorkEntryTab>Github</WorkEntryTab>
                <WorkEntryTab>C#</WorkEntryTab>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt leo sed purus iaculis, at eleifend est elementum.
            </p>
            <div className="flex justify-end">
                <Button className="px-4 py-2 flex gap-2 justify-center items-center text-sm">
                    <GithubIcon width={"1.1rem"} height={"1.1rem"}/> 
                    Github
                </Button>
            </div>
        </div>
    </div>
}

interface WorkEntryTabProps{
    children?:ReactNode
}

function WorkEntryTab({
    children
}:WorkEntryTabProps){
    return <div className="bg-gray-800 text-xs text-white font-bold px-3 py-1 rounded-full">
        {children}
    </div>
}