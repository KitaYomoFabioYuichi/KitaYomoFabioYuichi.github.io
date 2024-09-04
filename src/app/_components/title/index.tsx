import Image from 'next/image'

import EnterDiv from '@/components/animation/enter-div'
import Button from '@/components/button'

import titleImage from "./title-image.png"
import Link from 'next/link';

const START = 0;
const IMAGE_TIMING = 0;
const BUTTON_TIMING = 1;

export default function Title(){
    return <section id="home" className={`min-h-screen flex flex-col justify-center items-center lg:items-stretch`}>
        <div className='flex justify-around items-center'>
            <div className='flex flex-col gap-10 justify-center'>
                <TitleText/>
                <ButtonPanel/>
            </div>
            <TitleImage/>
        </div>
    </section>
}

function TitleText() {
	return <div className='flex justify-center items-center select-none'>
		<div className='flex flex-col justify-center'>
			<EnterDiv from={{x:-100, y:0}} delay={START}>
				<h1 className='text-2xl text-gray-500'>Hello, </h1>
			</EnterDiv>
			<EnterDiv from={{x:-100, y:0}} delay={START + 0.25}>
				<h1 className='text-5xl sm:text-6xl font-bold'>I&apos;m Fabio Kita</h1>
			</EnterDiv>
			<EnterDiv from={{x:-100, y:0}} delay={START + 0.5}>
				<h1 className='text-2xl text-right text-gray-500'>I&apos;m a <b>Software Engineer</b></h1>
			</EnterDiv>
		</div>
	</div>
}

function ButtonPanel(){
    return <EnterDiv  delay={BUTTON_TIMING} className="flex gap-2 md:gap-4 justify-center lg:justify-start">
        <EnterDiv delay={BUTTON_TIMING}>
            <Button>Download CV</Button>
        </EnterDiv>
        <EnterDiv delay={BUTTON_TIMING+0.25}>
            <Link href={"#about"}>
                <Button styleType="Secondary">Read About Me</Button>
            </Link>
        </EnterDiv>
    </EnterDiv>
}

function TitleImage(){
    return <EnterDiv  delay={IMAGE_TIMING} from={{x:100, y:0}} className="hidden lg:block">
        <Image alt="Image" src={titleImage} width={320}/>
    </EnterDiv>
}