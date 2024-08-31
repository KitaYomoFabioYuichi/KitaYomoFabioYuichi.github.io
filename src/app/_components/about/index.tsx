import EnterDiv from "@/components/animation/enter-div";
import SectionTitle from "@/components/section_title";
import { cn } from "@/utility";
import Image from "next/image";
import { HTMLAttributes } from "react";

export default function About(){
    return <section className="flex flex-col gap-8 md:gap-0">
        <EnterDiv from={{x:-100, y:0}}>
            <SectionTitle>About Me</SectionTitle>
        </EnterDiv>
        <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-16">
            <AboutContent className="md:pt-10 flex-[1.5] lg:flex-[2]"/>
            <AboutImage className="flex-1"/>
        </div>
    </section>
}

function AboutContent({
    className
}:HTMLAttributes<HTMLDivElement>){
    return <EnterDiv 
        from={{x:-100, y:0}}
        delay={0.25}
        className={cn(
            "text-justify flex flex-col gap-4",
            className
        )}
    >
        <p>
            I&apos;m Fabio Kita (b. 2000), curretly a software engineer student and soon to be graduate at the Faculty of Engineering of the Nacional University of Itapua, Paraguay. 
        </p>
        <p>
            My coding career started when I was just 13 years old, when I took interest in game development with the free version GameMaker Engine. Since then, I learned a plethora of programming languages (such as Java, C#, Java Script, Python), frameworks (such as Next.js,  Express.js, Spring Boot, ASP.NET), among other things.
        </p>
        <p>
            Although I primarily consider myself a Web Developer, I also developed computer programs, mobile aplications, video games, etc. My passion for technology and coding knows no bounds.
        </p>
    </EnterDiv>
}

function AboutImage({
    className
}:HTMLAttributes<HTMLDivElement>){
    return <EnterDiv 
        from={{x:100, y:0}}
        delay={0.5}
        className={cn(
            "flex justify-center items-center",
            className
        )}
    >
        <div className={cn(
            "bg-black relative w-[200px] h-[200px] rounded-full overflow-hidden",
            "md:w-full md:h-full md:rounded-lg"
        )}>
            <Image src="/portrait.png" alt="portrait" fill style={{objectFit:"cover"}}/>
        </div>
    </EnterDiv>
}