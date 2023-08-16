import Image from "next/image";
import React from "react";

function Product() {
	return (
		<div className="w-full border flex flex-col-reverse border-default relative max-[500px]:h-[220px] h-[268px]">
			<Image
				className="h-auto"
				alt="product image"
				src={"/hero.webp"}
				fill
			/>
			<div className="z-40 mb-4 text-center font-medium text-black">
				Product Name
				<h2>price 99.9$</h2>
			</div>
		</div>
	);
}

export default Product;
