import Header from "./_components/header";
import Title from "./_components/title";

export default function Home() {
	return <>
		<Header/>
		<main className="sm:mx-[5%] md:mx-[7.5%] lg:mx-[10%] xl:mx-[15%]">
			<Title/>
		</main>
	</>
}