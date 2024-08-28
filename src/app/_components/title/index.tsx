import Button from "@/components/button"
import Image from 'next/image'

export default function Title(){
    return <section className={`h-screen flex flex-row px-64 justify-between items-center`}>
        <LogoTitle/>
        <LogoIcon/>
    </section>
}

function LogoTitle(){
    return <div className="flex flex-col items-start gap-10">
        <div className={`flex flex-col justify-center gap-3`}>
            <h1 className={`self-start text-2xl text-gray-500`}>Hello,</h1>
            <h1 className={`self-center text-6xl`}><b>I'm Fabio Kita</b></h1>
            <h1 className={`self-end text-2xl text-gray-500`}>I'm a <b>Software Engineer</b></h1>
        </div>
        <div className={`flex flex-row gap-3`}>
            <Button className={`px-12`}>Download CV</Button>
            <Button className={`px-12`} type="Secondary">Read About Me</Button>
        </div>
    </div>
}

function LogoIcon(){
    return <Image
        src={"/logo-icon.png"}
        width={320}
        height={370}
        alt="LogoIcon.png"
    />
}