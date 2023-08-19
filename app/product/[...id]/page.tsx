import Product from "@/components/product";
import Image from "next/image";
import React from "react";

function ProductPage({ params }: { params: { id: string } }) {
	return (
		<div>
			<section className="max-[900px]:flex flex-col-reverse min-[900px]:grid grid-cols-2">
				<Image
					className="h-full border-b  border-default w-full"
					height={560}
					width={560}
					alt="category image"
					src={`/hero.webp`}
				/>
				<div className="max-[600px]:px-6 max-[600px]:py-8  p-16 pr-12 pb-10 flex flex-col justify-between min-[900px]:border-l border-b border-default">
					<div className="mb-14">
						<h2 className="mb-[10px] -ml-[2px] max-[600px]:text-3xl text-5xl font-semibold text-black">
							Rosy Delight
						</h2>
						<p className="font-normal text-para text-[18px]">
							Large exceptional bouquet composed of a selection of David Austin
							roses, known for their beauty and subtle fragrance. The bouquet is
							accompanied by seasonal foliage which will enhance these sublime
							flowers even
						</p>
					</div>
					<div>
						<div className="flex justify-between items-center">
							<h2 className=" font-semibold max-[600px]:text-3xl text-5xl text-black">
								99.99$
							</h2>
							<div className="flex border-t border-b border-default items-center">
								<Image
									className="h-11 cursor-pointer w-11"
									height={44}
									width={44}
									alt="plus button"
									src={"/icons/plus.svg"}
								/>
								<h2 className="text-base h-[44px] flex justify-center items-center px-6 border-r border-l border-default text-black font-medium">
									1
								</h2>
								<Image
									className="h-11 cursor-pointer w-11"
									height={44}
									width={44}
									alt="plus button"
									src={"/icons/minus.svg"}
								/>
							</div>
						</div>
						<button className="h-14 w-full mt-2 text-white bg-black font-medium">
							Add To Basket
						</button>
					</div>
				</div>
			</section>
			<h2 className="text-center py-12 min-[600px]:py-20 font-semibold text-2xl min-[600px]:text-4xl">
				You May Also Like
			</h2>
			<div className="grid grid-cols-1 min-[540px]:grid-cols-2 min-[900px]:grid-cols-4 ">
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
}

export default ProductPage;
