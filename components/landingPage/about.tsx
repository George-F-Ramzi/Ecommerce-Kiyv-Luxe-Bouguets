import React from "react";

function About() {
	return (
		<section className="min-[932px]:grid grid-cols-2  border-b border-default">
			<div className="border-b min-[932px]:border-b-0 min-[932px]:border-t min-[932px]:border-r border-default text-[40px] font-semibold px-6 py-8 sm:px-16 sm:pt-[51px] sm:pb-16">
				About us
			</div>
			<div className=" px-6 py-8 sm:px-16 sm:pt-[51px] sm:pb-16">
				<h2 className="text-base text-para font-medium">Our Story</h2>
				<h2 className="mt-4 text-4xl text-black font-semibold">LuxeBouguets</h2>
				<p className="text-base mt-4 leading-[150%] text-para font-normal">
					We are a modern local floral studio, which specializes in the design
					and delivery of unique bouquets. We have the best florists who
					carefully select each look, our studio cooperates directly with farms
					for growing different flowers, so we always have fresh flowers, which
					are collected by our florists in exquisite bouquets. We have a
					collection of fresh bouquets, collections of dried bouquets, house
					plants, as well as fragrant candles from luxury brands to create the
					perfect atmosphere. Make someone's day amazing by sending flowers,
					plants and gifts the same or next day. Ordering flowers online has
					never been easier.
				</p>
			</div>
		</section>
	);
}

export default About;
