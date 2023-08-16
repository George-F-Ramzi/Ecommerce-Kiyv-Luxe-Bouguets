import Image from "next/image";
import React from "react";

export default function Reviews() {
	return (
		<section className="pt-[62px] px-6 md:px-[63px] flex flex-col items-center pb-[55px]">
			<div className="text-center font-medium text-[#424245] text-sm">
				<Image
					className="w-[77px] mb-[14px] h-7"
					alt="google logo"
					width={77}
					height={28}
					src={"/icons/google.svg"}
				/>
				REVIEWS
			</div>
			<h2 className="mb-[43px] text-black text-[32px] md:text-5xl mt-[51px] font-semibold">
				Our Clients Say
			</h2>
			<p className="text-center text-para font-medium text-lg md:text-[28px]">
				“Ordered flowers online and they were the best bouquet! Impressed
				everyone around. Highly recommend this flower shop!”
			</p>
			<h2 className="text-para mt-[27px] text-2xl text-medium">
				- George F.Ramzi
			</h2>
		</section>
	);
}
