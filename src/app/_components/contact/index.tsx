import EnterDiv from "@/components/animation/enter-div";
import SectionTitle from "@/components/section_title";
import { cn } from "@/utility";
import GithubIcon from "./github-icon";
import LinkedinIcon from "./linkeding-icon";
import WhatsappIcon from "./whatsapp-icon";
import ContactHover from "./contact-hover";

export default function Contact(){
    return <footer className={cn(
        "flex flex-col gap-10",
        "mt-60 w-full bg-gray-800",
        "px-[5vw] md:px-[7.5vw] lg:px-[10vw] xl:px-[15vw]",
        "pt-8 pb-16"
    )}>
        <SectionTitle className="text-white">Contact Me</SectionTitle>
        <EnterDiv from={{x:-100, y:0}} className="flex justify-start items-center gap-8">
            <h2 className="text-gray-300 text-lg">Gmail: </h2>
            <ContactHover>
                <p className="text-white text-xl">kitayomofabioyuichi@gmail.com</p>
            </ContactHover>
        </EnterDiv>
        <EnterDiv from={{x:-100, y:0}} className="flex justify-start items-center gap-8">
            <h2 className="text-gray-300 text-lg">Socials: </h2>
            <div className="flex gap-8">
                <ContactHover>
                    <GithubIcon/>
                </ContactHover>
                <ContactHover>
                    <LinkedinIcon/>
                </ContactHover>
                <ContactHover>
                    <WhatsappIcon/>
                </ContactHover>
            </div>
        </EnterDiv>
    </footer>
}