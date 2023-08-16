import About from "@/components/landingPage/about";
import CategoryAndHero from "@/components/landingPage/categoryAndHero";
import Reviews from "@/components/landingPage/reviews";
import Why from "@/components/landingPage/why";

export default function Home() {
	return (
		<main>
			<CategoryAndHero />
			<About />
			<Why />
			<Reviews />
		</main>
	);
}
