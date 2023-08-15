import Image from "next/image";
import React from "react";

function Category() {
	return (
		<section className="min-[932px]:grid grid-cols-[1fr,1fr] ">
			<div>
				<div className="px-6 py-8 sm:px-16 sm:pt-[51px] max-h-fit  border-b border-default sm:pb-16">
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
			</div>
			<div>
				<div className="max-h-[268px] grid grid-cols-2">
					<div className=" border-b min-[932px]:border-l flex flex-col h-full items-center justify-center border-default ">
						<div className="font-medium text-[32px]">Flowers</div>
						<div className="mt-12 cursor-pointer font-semibold flex items-center">
							Shop Now
							<Image
								className="w-6 h-6 ml-1 mt-1"
								height={24}
								width={24}
								alt="arrow"
								src={"/icons/arrow.svg"}
							/>
						</div>
					</div>
					<Image
						className="max-h-[268px] border-l border-b border-default w-full"
						alt="Flowers"
						height={268}
						width={268}
						src={"/flowers.webp"}
					/>
				</div>
				<div className="max-h-[268px] grid grid-cols-2">
					<Image
						className="max-h-[268px] min-[932px]:border-l border-b border-default w-full"
						alt="Flowers"
						height={268}
						width={268}
						src={"/candles.webp"}
					/>
					<div className=" border-b border-l flex flex-col h-full items-center justify-center border-default ">
						<div className="font-medium text-[32px]">Candles</div>
						<div className="mt-12 cursor-pointer font-semibold flex items-center">
							Shop Now
							<Image
								className="w-6 h-6 ml-1 mt-1"
								height={24}
								width={24}
								alt="arrow"
								src={"/icons/arrow.svg"}
							/>
						</div>
					</div>
				</div>
				<div className="max-h-[268px] grid grid-cols-2">
					<div className=" border-b min-[932px]:border-l flex flex-col h-full items-center justify-center border-default ">
						<div className="font-medium text-[32px]">Vasa</div>
						<div className="mt-12 cursor-pointer font-semibold flex items-center">
							Shop Now
							<Image
								className="w-6 h-6 ml-1 mt-1"
								height={24}
								width={24}
								alt="arrow"
								src={"/icons/arrow.svg"}
							/>
						</div>
					</div>
					<Image
						className="max-h-[268px] border-l border-b border-default w-full"
						alt="Flowers"
						height={268}
						width={268}
						src={"/vasa.webp"}
					/>
				</div>
			</div>
		</section>
	);
}

export default Category;
