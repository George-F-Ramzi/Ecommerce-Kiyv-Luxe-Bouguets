import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className="min-[920px]:grid grid-cols-[1fr,1fr] ">
				<div className="px-6 py-8 sm:px-16 sm:pt-[51px]  border-b border-default sm:pb-16">
					<h1 className="text-4xl sm:text-5xl sm:-ml-[2px] font-semibold text-black">
						LuxeBouguets
					</h1>
					<p className="mt-[11px] text-para font-normal text-[18px]">
						Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
						Spread Joy with Our Online Flower Delivery Service
					</p>
					<hr className="mt-[45px] sm:block hidden border-t border-default" />
					<div className="mt-[42px] sm:flex sm:mt-6">
						<Image
							height={156}
							width={156}
							className="w-[156px] h-[156px] "
							alt="Hero Image Girl With Flowers"
							src={"/hero.webp"}
						/>
						<p className=" flex flex-col-reverse mt-3 sm:mt-0 sm:ml-6 sm:pl-6 sm:border-l border-default text-para font-normal">
							Experience the joy of giving with our modern floral studio. Order
							online and send fresh flowers, plants and gifts today.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
