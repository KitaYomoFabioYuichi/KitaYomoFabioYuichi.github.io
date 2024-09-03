import { domAnimation, LazyMotion } from "framer-motion";
import About from "./_components/about";
import Header from "./_components/header";
import Title from "./_components/title";
import { cn } from "@/utility";
import Skills from "./_components/skills";

export default function Home() {
	return <>
		<Header/>
		<main className={cn(
			"px-[5%] md:px-[7.5%] lg:px-[10%] xl:px-[15%]",
			"flex flex-col gap-40",
			"overflow-x-hidden"
		)}>
			<Title/>
			<div className="flex flex-col gap-60">
				<About/>
				<Skills/>
				<div/>
			</div>
		</main>
	</>
}