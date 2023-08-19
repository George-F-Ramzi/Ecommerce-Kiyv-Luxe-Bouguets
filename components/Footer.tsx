import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<footer className="border-t border-default min-[900px]:grid grid-cols-2">
			<div className="px-6 sm:px-16 max-[900px]:border-b min-[900px]:border-r border-default py-6 sm:py-14 ">
				<h2 className="font-semibold text-[40px]">LuxeBouquets</h2>
				<p className="mt-[11px] text-para font-normal text-[18px]">
					Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
					Joy with Our Online Flower Delivery Service
				</p>
			</div>
			<div className="p-6 sm:p-16 flex  justify-between">
				<div>
					<h2 className="text-[#808080] font-normal mb-3 text-2xl">About Us</h2>
					<Link
						className="font-normal text-lg block text-black mb-2"
						href={"/"}
					>
						Shipping & returns
					</Link>
					<Link
						className="font-normal text-lg block text-black mb-2"
						href={"/"}
					>
						Terms & services
					</Link>
					<Link
						className="font-normal text-lg block text-black"
						href={"/"}
					>
						Privacy policy
					</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
