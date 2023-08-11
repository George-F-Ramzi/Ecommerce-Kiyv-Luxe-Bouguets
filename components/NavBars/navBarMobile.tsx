"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function NavBarMobile() {
	const [show, setShow] = useState(false);
	return (
		<div className="items-center aboveDesktop:hidden desktop:hidden tablet:flex justify-between h-[56px]">
			<button
				onClick={() => {
					setShow(true);
				}}
				className="h-full w-[56px] flex items-center justify-center border-r border-default "
			>
				<Image
					className="h-6 w-6"
					width={24}
					height={24}
					alt="Menu Icon"
					src={"./icons/Menu.svg"}
				/>
			</button>
			<button className="h-full w-[56px] flex items-center justify-center border-l border-default ">
				<Image
					className="h-6 w-6"
					width={24}
					height={24}
					alt="Cart Icon"
					src={"./icons/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg"}
				/>
			</button>
			{show ? <SlideOut setShow={setShow} /> : ""}
		</div>
	);
}

function SlideOut({ setShow }: { setShow: (value: boolean) => void }) {
	return (
		<div className="absolute  top-0 left-0 h-full z-50 w-full grid grid-cols-2">
			<div className="max-w-[375px] bg-white">
				<div className=" h-full w-full border flex flex-col justify-between border-default">
					<div>
						<div
							onClick={() => {
								setShow(false);
							}}
							className="h-[56px] cursor-pointer pl-[15px] border-b  border-default flex items-center"
						>
							<Image
								className="h-6 w-6"
								width={24}
								height={24}
								alt="Close Icon"
								src={"./icons/close.svg"}
							/>
						</div>
						<div className="h-[73px] pl-[24px] border-b font-medium text-[21px] text-black  border-default flex items-center">
							Sign in
						</div>
						<div className="h-[73px] pl-[24px] border-b font-medium text-[21px] text-black  border-default flex items-center">
							Shop
						</div>
						<div className="h-[73px] pl-[24px] border-b font-medium text-[21px] text-black  border-default flex items-center">
							Service
						</div>
						<div className="h-[73px] pl-[24px] border-b font-medium text-[21px] text-black  border-default flex items-center">
							Contact
						</div>
						<div className="h-[73px] pl-[24px] border-b font-medium text-[21px] text-black  border-default flex items-center">
							About Us
						</div>
						<div className=" pl-[24px]  font-medium text-base text-black py-6">
							<p className="mb-4">Shipping & returns</p>
							<p className="mb-4">Terms & conditions</p>
							<p>Privacy policy</p>
						</div>
					</div>
					<div className="flex border-t justify-between border-default items-center p-6 ">
						<Image
							className="h-6 w-6"
							width={24}
							height={24}
							alt="Close Icon"
							src={"./icons/Brands/Apple.svg"}
						/>
						<Image
							className="h-6 w-6"
							width={24}
							height={24}
							alt="Close Icon"
							src={"./icons/Brands/Facebook.svg"}
						/>
						<Image
							className="h-6 w-6"
							width={24}
							height={24}
							alt="Close Icon"
							src={"./icons/Brands/Instagram.svg"}
						/>
						<Image
							className="h-6 w-6"
							width={24}
							height={24}
							alt="Close Icon"
							src={"./icons/Brands/Pinterest.svg"}
						/>
						<Image
							className="h-6 w-6"
							width={24}
							height={24}
							alt="Close Icon"
							src={"./icons/Brands/Twitter.svg"}
						/>
					</div>
				</div>
			</div>
			<div className="w-full h-full bg-[#D2D2D7]/30  backdrop-blur-[2px]"></div>
		</div>
	);
}
