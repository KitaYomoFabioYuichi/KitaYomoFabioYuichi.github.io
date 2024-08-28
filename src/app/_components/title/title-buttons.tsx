"use client"

import Button from "@/components/button";

export default function TitleButton(){
    return <div className={`flex flex-row gap-3`}>
        <Button className={`px-12`} onClick={()=>console.log("Hello")}>Download CV</Button>
        <Button className={`px-12`} styleType="Secondary">Read About Me</Button>
    </div>
}