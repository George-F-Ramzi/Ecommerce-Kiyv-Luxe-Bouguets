import ProductInCart from "@/components/productInCart";
import Image from "next/image";
import React from "react";

function Checkout() {
	return (
		<section className="mb-40 border-b border-default grid grid-cols-2">
			<div>
				<Image
					alt="map"
					height={280}
					width={561}
					src={"/map.webp"}
				/>
				<form className="w-full mt-8 mb-8  px-6 ">
					<input
						className="border px-4 mb-4 h-14 w-full border-default"
						required
						placeholder="Enter Your Address Here"
					/>
					<button
						className=" w-full mb-8 bg-black text-white font-medium h-14"
						type="submit"
					>
						Add Address
					</button>
					<div className="flex items-center">
						<input
							className=" mr-4 border border-default h-6 w-6"
							id="1"
							value={"hello world"}
							type="checkbox"
						/>
						<label
							className="text-xl font-medium text-block"
							htmlFor="1"
						>
							I have a bike
						</label>
					</div>
				</form>
			</div>
			<div className="border-l border-default">
				<div className="h-[83px] border-b border-default pl-10 pr-8 flex justify-between items-center">
					<h2 className="font-medium text-3xl">200$ total</h2>
					<button
						className=" w-full max-w-[178px]  bg-black text-white font-medium h-14"
						type="submit"
					>
						PAY WITH STRIPE
					</button>
				</div>
				<ProductInCart />
				<ProductInCart />
				<ProductInCart />
				<ProductInCart />
				<ProductInCart />
				<ProductInCart />
			</div>
		</section>
	);
}

export default Checkout;
