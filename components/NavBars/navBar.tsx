import React from "react";
import NavBarDesktop from "./navBarDesktop";
import NavBarMobile from "./navBarMobile";

export default function NavBar() {
	return (
		<div>
			<NavBarDesktop />
			<NavBarMobile />
		</div>
	);
}
