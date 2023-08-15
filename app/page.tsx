import About from "@/components/landing/about";
import CategoryAndHero from "@/components/landing/categoryAndHero";
import Why from "@/components/landing/why";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<CategoryAndHero />
			<About />
			<Why />
		</main>
	);
}
