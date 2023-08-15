import React from "react";

function Why() {
	return (
		<section className="min-[932px]:grid grid-cols-2  border-b border-default">
			<div className="border-b min-[932px]:border-r border-default text-3xl sm:text-[40px] font-semibold px-6 py-8 sm:px-16 sm:pt-[51px] sm:pb-16">
				Why Choose Us ?
			</div>
			<div>
				<div className=" border-b border-default px-6 py-8 sm:px-16 sm:pt-[51px] sm:pb-16">
					<h2 className=" text-4xl text-black font-semibold">
						Stylish bouquets
					</h2>
					<p className="text-base mt-4 leading-[150%] text-para font-normal">
						At our floral studio, our professional florists craft the most
						elegant and stylish bouquets using only the freshest and highest
						quality materials available. We stay up-to-date with the latest
						floral design trends and offer unique arrangements that are sure to
						impress. Let us brighten up your day with our stunning bouquets and
						same-day delivery service.
					</p>
				</div>
				<div className=" border-b border-default px-6 py-8 sm:px-16 sm:pt-[51px] sm:pb-16">
					<h2 className=" text-4xl text-black font-semibold">
						On-time delivery
					</h2>
					<p className="text-base mt-4 leading-[150%] text-para font-normal">
						Never miss a moment with our on-time flower delivery service. Our
						couriers will deliver your bouquet personally, without boxes, to
						ensure it arrives in perfect condition. Trust us to deliver your
						thoughtful gift reliably.
					</p>
				</div>
				<div className=" px-6 py-8 sm:px-16 sm:pt-[51px] sm:pb-16">
					<h2 className=" text-4xl text-black font-semibold">Safe Payment</h2>
					<p className="text-base mt-4 leading-[150%] text-para font-normal">
						You can feel secure when placing an order with us, as we use
						industry-standard security measures to protect your payment
						information. Your transaction will be safe and hassle-free, so you
						can shop with confidence.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Why;
