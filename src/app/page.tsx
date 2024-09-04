import { cn } from "@/utility";

import Header from "./_components/header";
import Title from "./_components/title";
import About from "./_components/about";
import Skills from "./_components/skills";
import Works from "./_components/works";
import Contact from "./_components/contact";

export default function Home() {
	return <>
		<Header/>
		<main className={cn(
			"px-[5vw] md:px-[7.5vw] lg:px-[10vw] xl:px-[15vw]",
			"flex flex-col gap-20",
			"overflow-x-hidden"
		)}>
			<Title/>
			<div className="flex flex-col gap-20">
				<About/>
				<Skills/>
				<Works/>
			</div>
		</main>
		<Contact/>
	</>
}