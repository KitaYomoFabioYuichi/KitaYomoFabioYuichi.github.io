import Temp from "./works/temp-work.png"
import Button from "@/components/button";
import GithubIcon from "../work-entry/github-icon";
import Image from "next/image";
import { cn } from "@/utility";
import { ReactNode } from "react";
import WorkData from "../work-data";

interface WorkEntryProps{
    data:WorkData,
}

export default function WorkEntry({
    data
}:WorkEntryProps){
    return <div
        className={cn(
            "flex flex-col flex-shrink-[0]",
            "w-[calc(100vw-20%)] h-[450px] sm:w-[400px]",
            "border border-gray-200 rounded-lg",
            "overflow-hidden"
        )}
    >
        <div className="relative flex-[1.5] border-b border-gray-200">
            <Image src={data.imageSrc} alt="Work" fill sizes="400px" style={{objectFit:"cover", objectPosition:"top left"}}/>
        </div>
        <div className="flex-[1] flex flex-col gap-2 p-4">
            <h1 className="text-xl font-bold">{data.title}</h1>
            <div className="flex flex-row justify-start items-center gap-4">
                {data.tags?.map(v=><WorkEntryTab key={v}>{v}</WorkEntryTab>)}
            </div>
            <p>
                {data.description}
            </p>
        </div>
        <div className="flex justify-end p-4">
            <Button className="px-4 py-2 flex gap-2 justify-center items-center text-sm">
                <GithubIcon width={"1.1rem"} height={"1.1rem"}/> 
                Github
            </Button>
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