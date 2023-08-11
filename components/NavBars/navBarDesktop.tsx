import Link from "next/link";
import React from "react";

function NavBarDesktop() {
	return (
		<div className="flex items-center tablet:hidden justify-between h-[83px]">
			<div className="w-[360px] grid grid-cols-2 h-full">
				<div className="flex items-center justify-center border-r border-default  h-full w-full">
					<Link
						className="text-base text-black block font-medium"
						href={"/"}
					>
						Shop
					</Link>
				</div>
				<div className="flex items-center justify-center border-r border-default  h-full w-full">
					<Link
						className="text-base block text-black font-medium"
						href={"/contact"}
					>
						Contact
					</Link>
				</div>
			</div>
			<div className="w-[360px] grid grid-cols-2 h-full">
				<div className="flex items-center justify-center border-l border-default  h-full w-full">
					<Link
						className="text-base block text-black font-medium"
						href={"/join"}
					>
						Sign in
					</Link>
				</div>
				<div className="flex items-center  justify-center border-l border-default  h-full w-full">
					<Link
						className="text-base block text-black font-medium"
						href={"/cart"}
					>
						Cart
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavBarDesktop;
