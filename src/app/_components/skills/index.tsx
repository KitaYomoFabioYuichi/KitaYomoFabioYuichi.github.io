import SectionSubTitle from "@/components/section_subtitle";
import SectionTitle from "@/components/section_title";
import Image from "next/image";

export default function Skills(){
    return <section className="flex flex-col gap-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-col gap-16">
            <SkillSection 
                title="Programming Languages / Other Languages"
                srcPrefix="/skills_icon/languages/"
                srcList={["C", "C++", "CS", "Java", "Python", "Js", "Ts", "html", "css"]}
                nameList={["C", "C++", "C#", "Java", "Python", "JavaScript", "TypeSpript", "HTML", "CSS"]}
            />
            <SkillSection 
                title="Frameworks / Libraries"
                srcPrefix="/skills_icon/libraries/"
                srcList={["Expressjs", "Nextjs", "Net", "SpringBoot", "React", "React Native"]}
                nameList={["Express.js", "Next.js", ".Net", "SpringBoot", "React", "React Native"]}
            />
            <SkillSection 
                title="Other Tools"
                srcPrefix="/skills_icon/other/"
                srcList={["Figma", "Git", "Github", "Godot", "MySql", "PostgreSql", "Unity"]}
                nameList={["Figma", "Git", "Github", "Godot", "MySQL", "PostgreSQL", "Unity"]}
            />
        </div>
    </section>
}

interface SkillSectionProps{
    title:string,
    srcPrefix?:string,
    srcSuffix?:string,
    srcList:string[],
    nameList:string[]
}

function SkillSection({
    title,
    srcPrefix = "",
    srcSuffix = ".png",
    srcList = [],
    nameList = []
}:SkillSectionProps){
    function renderSkillEntries(){
        return srcList.map((v, i)=>{
            let src = srcPrefix + v + srcSuffix;
            let name = nameList[i];

            return <SkillEntry
                key={src}
                name={name}
                src={src}
            />
        })
    }


    return <div className="flex flex-col gap-4">
        <SectionSubTitle>{title}</SectionSubTitle>
        <div className="flex flex-row flex-wrap gap-4">
            {renderSkillEntries()}
        </div>
    </div>
}

interface SkillEntryProps{
    src:string,
    name:string,
    size?:number
}

function SkillEntry({
    src,
    name
}:SkillEntryProps){
    return <div className="relative w-20 h-20 inline-block">
        <Image
            src={src}
            alt={name}
            fill
        />
    </div>
}