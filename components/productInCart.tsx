import Image from "next/image";
import React from "react";

function ProductInCart() {
	return (
		<div className="p-10 flex items-center justify-between border-b border-default">
			<div className="flex items-center grow ">
				<Image
					height={160}
					width={160}
					alt="product image"
					src={"/hero.webp"}
				/>
				<div className="ml-4">
					<h2 className="font-medium text-[18px] text-black mb-2">
						Rosy Delight
					</h2>
					<h2 className="font-normal text-para text-base mb-2">Quantity (1)</h2>
					<h2 className="font-medium text-[18px] text-black ">100$</h2>
				</div>
			</div>
			<button>Remove</button>
		</div>
	);
}

export default ProductInCart;
