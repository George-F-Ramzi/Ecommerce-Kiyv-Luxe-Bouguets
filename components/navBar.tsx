"use client";

import Image from "next/image";
import React from "react";

export default function NavBar() {
	return (
		<nav className="h-14 text-black flex border-b border-default justify-between">
			<div className="w-[250px] flex h-full">
				<div className="h-full cursor-pointer flex items-center justify-center w-14 border-r border-default">
					<Image
						className="w-6 h-6"
						alt="menu icon"
						height={24}
						width={24}
						src={"./icons/Menu.svg"}
					/>
				</div>
				<div className="h-full cursor-pointer flex items-center justify-center grow sm:border-r border-default">
					<h1 className="font-semibold text-xl">LuxeBouguets</h1>
				</div>
			</div>
			<div className="h-full cursor-pointer flex items-center justify-center px-4 border-l border-default">
				<Image
					className="w-6 mr-1 h-6"
					alt="menu icon"
					height={24}
					width={24}
					src={"./icons/bag.svg"}
				/>
				(5)
			</div>
		</nav>
	);
}
