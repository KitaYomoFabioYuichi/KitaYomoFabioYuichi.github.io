import Image from "next/image"
import WorkData from "../work-data"
import { cn } from "@/utility"
import { ReactNode } from "react"
import Button from "@/components/button"
import GithubIcon from "./github-icon"
import EnterDiv from "@/components/animation/enter-div"
import VisitIcon from "./visit-icon"

interface WorkEntryProps{
    data:WorkData
}

export default function WorkEntry({
    data
}:WorkEntryProps){
    const renderDescription = (description:string | any[])=>{
        if(typeof description === "string") return description;

        return description.map((d, i)=><p key={i}>{d}</p>)
    }

    return <EnterDiv
        from={{
            x:-100,
            y:0
        }}
        delay={0.1}
        className={cn(
            "border rounded-xl border-gray-200 overflow-hidden",
            "md:flex md:flex-row"
        )}
    >
        <div className="relative h-[200px] md:h-auto md:min-h-[250px] flex-[1] border-b md:border-r md:border-b-0 border-gray-200">
            <Image src={data.imageSrc} alt={data.title} fill sizes="50vw" style={{objectFit:"cover", objectPosition:"top"}}/>
        </div>
        <div className="md:flex-[2] flex flex-col">
            <div className="flex-1 p-4 flex flex-col gap-4">
                <h3 className="text-xl font-bold">{data.title}</h3>
                <div className="flex flex-row justify-start items-center gap-4">
                    {data.tags?.map(v=><WorkEntryTab key={v}>{v}</WorkEntryTab>)}
                </div>
                <div>
                    {renderDescription(data.description)}
                </div>
            </div>
            <div className="flex items-center justify-end p-4 gap-4">
                {data.demoLink&&<a href={data.demoLink} target="_blank">
                    <Button styleType="Secondary" className="px-4 py-2 flex gap-2 justify-center items-center text-sm">
                        <VisitIcon width={"1.1rem"} height={"1.1rem"}/> Demo
                    </Button>
                </a>}
                {data.githubLink&&<a href={data.githubLink} target="_blank">
                    <Button className="px-4 py-2 flex gap-2 justify-center items-center text-sm">
                        <GithubIcon width={"1.1rem"} height={"1.1rem"}/> Github
                    </Button>
                </a>}
            </div>
        </div>
    </EnterDiv>
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