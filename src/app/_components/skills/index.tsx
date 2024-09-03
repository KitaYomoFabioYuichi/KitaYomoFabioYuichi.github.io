import SectionSubTitle from "@/components/section_subtitle";
import SectionTitle from "@/components/section_title";

//Icons
import CIcon from "./skills_icon/languages/C.png"
import CppIcon from "./skills_icon/languages/Cpp.png"
import CSIcon from "./skills_icon/languages/CS.png"
import JavaIcon from "./skills_icon/languages/Java.png"
import PythonIcon from "./skills_icon/languages/Python.png"
import JsIcon from "./skills_icon/languages/Js.png"
import TsIcon from "./skills_icon/languages/Ts.png"
import htmlIcon from "./skills_icon/languages/html.png"
import cssIcon from "./skills_icon/languages/css.png"

import ExpressjsIcon from "./skills_icon/libraries/Expressjs.png"
import NextjsIcon from "./skills_icon/libraries/Nextjs.png"
import NetIcon from "./skills_icon/libraries/Net.png"
import SpringBootIcon from "./skills_icon/libraries/SpringBoot.png"
import ReactIcon from "./skills_icon/libraries/React.png"
import ReactNativeIcon from "./skills_icon/libraries/ReactNative.png"

import FigmaIcon from "./skills_icon/other/Figma.png"
import GitIcon from "./skills_icon/other/Git.png"
import GithubIcon from "./skills_icon/other/Github.png"
import GodotIcon from "./skills_icon/other/Godot.png"
import MySqlIcon from "./skills_icon/other/MySql.png"
import PostgreSqlIcon from "./skills_icon/other/PostgreSql.png"
import UnityIcon from "./skills_icon/other/Unity.png"
import { StaticImageData } from "next/image";
import SkillEntry from "./skill-entry";

export default function Skills(){
    return <section className="flex flex-col gap-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="flex flex-col gap-16">
            <SkillSection 
                title="Programming Languages / Other Languages"
                srcList={[CIcon, CppIcon, CSIcon, JavaIcon, PythonIcon, JsIcon, TsIcon, htmlIcon, cssIcon,]}
                nameList={["C", "C++", "C#", "Java", "Python", "JavaScript", "TypeSpript", "HTML", "CSS"]}
            />
            <SkillSection 
                title="Frameworks / Libraries"
                srcList={[ExpressjsIcon, NextjsIcon, NetIcon, SpringBootIcon, ReactIcon, ReactNativeIcon]}
                nameList={["Express.js", "Next.js", ".Net", "SpringBoot", "React", "React Native"]}
            />
            <SkillSection 
                title="Other Tools"
                srcList={[FigmaIcon, GitIcon, GithubIcon, MySqlIcon, PostgreSqlIcon, GodotIcon, UnityIcon]}
                nameList={["Figma", "Git", "Github", "MySQL", "PostgreSQL", "Godot", "Unity"]}
            />
        </div>
    </section>
}

interface SkillSectionProps{
    title:string,
    srcList:StaticImageData[],
    nameList:string[]
}

function SkillSection({
    title,
    srcList = [],
    nameList = []
}:SkillSectionProps){
    function renderSkillEntries(){
        return srcList.map((v, i)=>{
            let imageData = v;
            let name = nameList[i];

            return <SkillEntry
                key={imageData.src}
                name={name}
                src={imageData}
                index={i}
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