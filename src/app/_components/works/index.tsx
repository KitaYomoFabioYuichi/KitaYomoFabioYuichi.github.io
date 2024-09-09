import SectionSubTitle from "@/components/section_subtitle";
import SectionTitle from "@/components/section_title";
import WorkData from "./work-data";
import WorkEntry from "./work-entry";

const works:WorkData[] = [
    {
        title:"Portfolio",
        description:"My portfolio page, that happens to be this very page.",
        imageSrc:"/works/portfolio.png",
        tags:["Next.js", "React.js"]
    },
    {
        title:"Carlos el Robot",
        description:[
            "My final year project. An educative program ispired by Richard E. Pattis's \"Karel the Robot\", currently being used at the National University of Itapua to teach programming.",
            "To implement it, I had to develop a graphics system from scratch using pure Java."
        ],
        imageSrc:"/works/portfolio.png",
        tags:["Java"]
    },
    {
        title:"LoremIpsum",
        description:"My portfolio page, that happens to be this very page.",
        imageSrc:"/works/temp-work.png",
        tags:["Next.js", "React.js"]
    },
    {
        title:"LoremIpsum1",
        description:"My portfolio page, that happens to be this very page.",
        imageSrc:"/works/temp-work.png",
        tags:["Next.js", "React.js"]
    },{
        title:"LoremIpsum2",
        description:"My portfolio page, that happens to be this very page.",
        imageSrc:"/works/temp-work.png",
        tags:["Next.js", "React.js"]
    }
];

export default function Works(){
    return <section id="works" className="flex flex-col gap-8 pt-36 lg:pt-24">
        <SectionTitle>Works</SectionTitle>
        <div className="flex flex-col gap-8">
            <SectionSubTitle>Some of my personal and professional projects:</SectionSubTitle>
            <div className="flex flex-col gap-12">
                {works.map(w=><WorkEntry key={w.title} data={w}/>)}
            </div>
        </div>
    </section>
}