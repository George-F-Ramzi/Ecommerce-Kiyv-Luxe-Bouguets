import NavBar from "@/components/navBar";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Luxe Bouquets",
	description:
		"Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service",
};

const Gilroy = localFont({
	src: [
		{
			path: "../public/fonts/regular.woff2",
			weight: "400",
		},
		{
			path: "../public/fonts/medium.woff2",
			weight: "500",
		},
		{
			path: "../public/fonts/semibold.woff2",
			weight: "600",
		},
	],
	variable: "--font-gilroy",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${Gilroy.variable} relative border border-default lg:mx-20 mt-[1px] mb-20 mx-4 sm:mx-12 font-sans m-auto max-w-[1280px]`}
			>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
