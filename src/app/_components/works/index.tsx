import SectionSubTitle from "@/components/section_subtitle";
import SectionTitle from "@/components/section_title";
import WorkData from "./work-data";
import WorkEntry from "./work-entry";

const works:WorkData[] = [
    {
        title:"My Portfolio Page",
        description:"My portfolio page, which is this very page. Mainly created to practice developing a Next.js website.",
        imageSrc:"/works/portfolio.png",
        tags:["Next.js", "React"],
        githubLink:"https://github.com/KitaYomoFabioYuichi/MyPortfolio",
        demoLink:"#"
    },
    {
        title:"Carlos el Robot 2.0",
        description:[
            "An educative program ispired by Richard E. Pattis's \"Karel the Robot\", currently being used at the National University of Itapua to teach programming.",
        ],
        imageSrc:"/works/carlos-el-robot.png",
        tags:["Java"],
        githubLink:"https://github.com/FabioKita/RobotCarlos2"
    },
    {
        title:"To-Do App",
        description:"A simple To-Do applicaton made with React Native. It allows users to manage tasks, reminders and activities.",
        imageSrc:"/works/todo-app.png",
        tags:["React Native"],
        githubLink:"https://github.com/KitaYomoFabioYuichi/ToDoApp"
    },
    {
        title:"MiniJava Compiler",
        description:"A small compiler, that compiles MiniJava code to Jasmin code.",
        imageSrc:"/works/compiler.png",
        tags:["Java"],
        githubLink:"https://github.com/FabioKita/Compiladores2023"
    },
    {
        title:"Simple Raytracer",
        description:"A simple raytracer, that reads scenes files and outputs tga image files. It was made with OpenGL/C++.",
        imageSrc:"/works/raytracer.png",
        tags:["C++", "OpenGL"],
        githubLink:"https://github.com/KitaYomoFabioYuichi/SimpleRaytracer"
    },
];

export default function Works(){
    return <section id="works" className="flex flex-col gap-8 pt-36 lg:pt-24">
        <SectionTitle>Works</SectionTitle>
        <div className="flex flex-col gap-8">
            <SectionSubTitle>Some of my personal projects:</SectionSubTitle>
            <div className="flex flex-col gap-12">
                {works.map(w=><WorkEntry key={w.title} data={w}/>)}
            </div>
        </div>
    </section>
}