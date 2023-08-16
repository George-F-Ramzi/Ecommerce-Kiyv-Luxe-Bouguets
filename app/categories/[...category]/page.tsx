import Product from "@/components/product";
import Image from "next/image";
import React from "react";

function Category({ params }: { params: { category: string } }) {
	return (
		<section className="md:grid grid-cols-2">
			<Image
				className="max-h-[560px] border-b  border-default w-full"
				height={560}
				width={560}
				alt="category image"
				src={`/${params.category}.webp`}
			/>
			<div className="grid grid-cols-2">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</section>
	);
}

export default Category;
