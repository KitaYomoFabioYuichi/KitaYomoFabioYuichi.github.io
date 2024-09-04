"use client"

import { cn } from "@/utility";
import NavLavel from "./nav-label";
import Link from "next/link";
import HeaderNavMenu from "./header-nav-menu";
import { useCallback, useEffect, useMemo, useState } from "react";

const sectionIds = ["home", "about", "skills", "works", "contact"];

export default function Header(){
    const [currentSectionId, setCurrentSectionId] = useState(sectionIds[0]);

    const handleScroll = useCallback(()=>{
        const getCurrentSectionId = ()=>{
            const PADDING = 75;

            const getSectionPosition = (section:HTMLElement)=>{
                var rect = section.getBoundingClientRect();
                return { x: rect.left + scrollLeft, y: rect.top + scrollTop};
            }
    
            const isOnBottom = ()=>{
                const documentHeight = Math.round(document.documentElement.getBoundingClientRect().height);
                const currentScrollBottom = Math.round(documentElement.scrollTop + window.innerHeight);
                return currentScrollBottom >= documentHeight-PADDING;
            }
    
            const documentElement = document.documentElement;
            const scrollLeft = documentElement.scrollLeft;
            const scrollTop = documentElement.scrollTop;
    
            let currentSectionId = sectionIds[sectionIds.length-1];
    
            if(isOnBottom()){
                return "contact";
            }
    
            let sections = sectionIds.map(sectionId=>document?.getElementById(sectionId));
            for(let section of sections){
                section = section as HTMLElement;
    
                let sectionPosition = getSectionPosition(section);
                let currentScroll = Math.round(scrollTop);
                let sectionY = Math.round(sectionPosition.y-PADDING);
                
                if(currentScroll >= sectionY) currentSectionId = section.id;
            }
    
            return currentSectionId;
        }

        setCurrentSectionId(getCurrentSectionId());
    },[]);

    useEffect(()=>{
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    },[]);

    return <header className={"fixed top-0 w-full z-30"}>
        <div className={cn(
            "bg-white border-b border-gray-200",
            "h-20",
            "px-4 md:px-12",
            "flex flex-row justify-between items-center",
        )}>
            <Link href={`#${sectionIds[0]}`}>
                <h1 className="text-2xl font-black">
                    Fabio Kita
                </h1>
            </Link>

            <HeaderNavMenu>
                {sectionIds.map( 
                    sectionId=><NavLavel 
                        key={sectionId} 
                        href={"#" + sectionId}
                        selected={sectionId == currentSectionId}
                    >
                        {sectionId}
                    </NavLavel> 
                )}
            </HeaderNavMenu>
        </div>
    </header>
}
