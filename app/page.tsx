import About from "@/components/landingPage/about";
import ProductsAndHero from "@/components/landingPage/productsAndHero";
import Reviews from "@/components/landingPage/reviews";
import Why from "@/components/landingPage/why";

export default function Home() {
	return (
		<main>
			<ProductsAndHero />
			<About />
			<Why />
			<Reviews />
		</main>
	);
}
