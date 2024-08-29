"use client"

import Button from "@/components/button";

export default function ButtonPanel(){
    return <div className="flex gap-2 md:gap-4 justify-center lg:justify-start">
        <Button>Download CV</Button>
        <Button styleType="Secondary">Read About Me</Button>
    </div>
}