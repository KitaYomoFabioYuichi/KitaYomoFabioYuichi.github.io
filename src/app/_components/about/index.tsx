import Image from "next/image"
import { ReactNode } from "react"

export default function About(){
    return <section className="px-64 h-screen flex flex-col justify-center">
        <SectionTitle>About Me</SectionTitle>
        <div className={`flex flex-row gap-10 items-end`}>
            <AboutContentText/>
            <Portrait/>
        </div>
    </section>
}

interface SectionTitleProps {
    children?:ReactNode,
    className?:string
}

function SectionTitle({children, className = ""}:SectionTitleProps){
    return <div className={`font-bold text-2xl flex justify-start ${className}`}>
        <h2 className="border-b border-gray-300">
            {children}
        </h2>
    </div>
}

function AboutContentText(){
    return <div className="flex flex-col gap-4">
        <p>
            I'm Fabio Kita (b. 2000), curretly a software engineer student and soon to be graduate at the Faculty of Engineering of the Nacional University of Itapua, Paraguay. 
        </p>

        <p>
            My coding career started when I was just 13 years old, when I took interest in game development with the free version GameMaker Engine. Since then, I learned a plethora of programming languages (such as Java, C#, Java Script, Python), frameworks (such as Next.js,  Express.js, Spring Boot, ASP.NET), among other things.
        </p>

        <p>
            Although I primarily consider myself a Web Developer, I also developed computer programs, mobile aplications, video games, etc. My passion for technology and coding knows no bounds.
        </p>
    </div>
}

function Portrait(){
    return <Image
        src={"/portrait.png"}
        width={283}
        height={283}
        alt="Portrait.png"
    />
}