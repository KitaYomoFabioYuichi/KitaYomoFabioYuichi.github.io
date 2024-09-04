import SectionSubTitle from "@/components/section_subtitle";
import SectionTitle from "@/components/section_title";
import { cn } from "@/utility";
import WorkEntry from "./work-entry";
import EnterDiv from "@/components/animation/enter-div";

export default function Works(){
    return <section id="works" className="flex flex-col gap-8 pt-36 lg:pt-24">
        <SectionTitle>Works</SectionTitle>
        <div className="flex flex-col gap-4">
            <SectionSubTitle>Some of my personal and professional projects:</SectionSubTitle>
            <div className="flex justify-center items-start">
                <div className="relative w-screen flex-shrink-0 flex">
                    <EnterDiv 
                        from={{x:100, y:0}}
                        className={cn(
                            "flex-1",
                            "px-[5vw] md:px-[7.5vw] lg:px-[10vw] xl:px-[15vw]",
                            "flex gap-4 sm:gap-12 overflow-x-auto overflow-y-hidden",
                            "pb-4 lg:pb-0 lg:no-scrollbar"
                        )}
                    >
                        <WorkEntry/>
                        <WorkEntry/>
                        <WorkEntry/>
                        <WorkEntry/>
                        <WorkEntry/>
                        <WorkEntry/>
                        <WorkEntry/>
                        <WorkEntry/>
                    </EnterDiv>
                    <div className={cn(
                        "invisible sm:visible absolute left-0 top-0 bottom-4",
                        "w-[5vw] md:w-[7.5vw] lg:w-[10vw] xl:w-[15vw]",
                        "bg-gradient-to-r from-white from-80%"
                    )}/>
                    <div className={cn(
                        "invisible sm:visible absolute right-0 top-0 bottom-4",
                        "w-[5vw] md:w-[7.5vw] lg:w-[10vw] xl:w-[15vw]",
                        "bg-gradient-to-l from-white from-80%"
                    )}/>
                </div>
            </div>
        </div>
    </section>
}