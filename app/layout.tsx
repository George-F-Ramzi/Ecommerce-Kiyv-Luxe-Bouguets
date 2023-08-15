import NavBar from "@/components/navBar";
import "./globals.css";
import localFont from "next/font/local";

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
				className={`${Gilroy.variable} lg:mx-20 mt-[1px] mb-20 mx-4 sm:mx-12 relative m-auto border border-default font-sans max-w-[1280px]`}
			>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
