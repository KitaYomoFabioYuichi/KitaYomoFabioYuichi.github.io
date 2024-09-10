import EnterDiv from "@/components/animation/enter-div";
import SectionTitle from "@/components/section_title";
import { cn } from "@/utility";
import GithubIcon from "./icons/github-icon";
import LinkedinIcon from "./icons/linkeding-icon";
import WhatsappIcon from "./icons/whatsapp-icon";
import ContactHover from "./contact-hover";
import EmailContact from "./email-contact";

export default function Contact(){
    return <footer id="contact" className={cn(
        "flex flex-col gap-8",
        "mt-60 w-full bg-gray-800",
        "px-[5vw] md:px-[7.5vw] lg:px-[10vw] xl:px-[15vw]",
        "pt-8 pb-16"
    )}>
        <SectionTitle className="text-white">Contact Me</SectionTitle>
        <div className="flex flex-col gap-y-2 sm:gap-y-8">
            <EnterDiv from={{x:-100, y:0}} className="flex justify-start items-start sm:items-center gap-8">
                <h2 className="text-gray-300 text-base">Gmail: </h2>
                <EmailContact/>
            </EnterDiv>
            <EnterDiv from={{x:-100, y:0}} className="flex justify-start items-center gap-8">
                <h2 className="text-gray-300 text-base">Socials: </h2>
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
        </div>
    </footer>
}