"use client"

import EnterDiv from "@/components/animation/enter-div";
import ArrowLeft from "./arrow-left";
import ArrowRight from "./arrow-right";
import { cn } from "@/utility";
import { ReactNode, UIEvent, useRef, useState } from "react";
import { m } from "framer-motion"

interface CarouselProps {
    children?: ReactNode
}

export default function Carousel({
    children
}: CarouselProps) {
    const carouselRef = useRef(null);
    const [hover, setHover] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scroll = (delta:number)=>{
        const carousel:HTMLDivElement = carouselRef.current as unknown as HTMLDivElement;
        if(!carousel) return;

        carousel.scrollLeft += delta;
    }

    const handleOnScroll = (e:UIEvent<HTMLDivElement>)=>{
        const target = e.target as HTMLElement;
        const minPos = 0;
        const maxPos = target.scrollWidth - target.offsetWidth;
        
        const currentPos = Math.round(target.scrollLeft);

        let value = (currentPos-minPos)/(maxPos-minPos);
        setScrollPosition(value);
    }

    const isOnLeftBorder = scrollPosition <= 0;
    const isOnRightBorder = scrollPosition >= 1;

    return <EnterDiv className="flex justify-center items-start" from={{x:100, y:0}}>
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative w-screen flex-shrink-0 flex"
        >
            <div
                className={cn(
                    "flex-1 relative",
                    "px-[5vw] md:px-[7.5vw] lg:px-[10vw] xl:px-[15vw]",
                    "flex gap-4 sm:gap-12 overflow-x-auto overflow-y-hidden",
                    "pb-4 lg:no-scrollbar scroll-smooth"
                )}
                onScroll={handleOnScroll}
                ref={carouselRef}
            >
                {children}
            </div>  
            <div className={cn(
                "invisible sm:visible absolute left-[-5px] top-0 bottom-2",
                "w-[5vw] md:w-[7.5vw] lg:w-[10vw] xl:w-[15vw]",
                "bg-gradient-to-r from-white from-80%"
            )}>
                <m.button
                    initial={{ y:"-50%", opacity:0 }}
                    animate={{ 
                        display:"flex",
                        opacity: hover && !isOnLeftBorder ? 0.5 : 0,
                        transitionEnd:{
                            display:hover && !isOnLeftBorder?"flex":"none"
                        }
                    }}
                    whileHover={{ scale:1.25 }}
                    className={cn(
                        "rounded-full",
                        "w-[50px] h-[50px] bg-gray-800",
                        "hidden lg:flex",
                        "absolute top-[50%] right-[25%]",
                        "justify-center items-center"
                    )}
                    onClick={()=>scroll(-448)}
                >
                    <ArrowLeft />
                </m.button>
            </div>
            <div className={cn(
                "invisible sm:visible absolute right-[-5px] top-0 bottom-2",
                "w-[5vw] md:w-[7.5vw] lg:w-[10vw] xl:w-[15vw]",
                "bg-gradient-to-l from-white from-80%"
            )}>
                <m.button
                    initial={{ y:"-50%", opacity:0 }}
                    animate={{ 
                        display:"flex",
                        opacity: hover && !isOnRightBorder ? 0.5 : 0,
                        transitionEnd:{
                            display:hover && !isOnRightBorder?"flex":"none"
                        }
                    }}
                    whileHover={{ scale:1.25 }}
                    className={cn(
                        "rounded-full",
                        "w-[50px] h-[50px] bg-gray-800",
                        "hidden lg:flex",
                        "absolute top-[50%] left-[25%]",
                        "justify-center items-center",

                    )}
                    onClick={()=>scroll(448)}
                >
                    <ArrowRight />
                </m.button>
            </div>
        </div>
    </EnterDiv>
}