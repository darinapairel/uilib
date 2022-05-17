import React from "react"
import LoaderImg from "../assets/img/loader_logo.svg"
import Loader from "../Loader"
import { StyledLogo } from "./styles"

const Logo = ({
	type = "marvel",
	colorType = "blue-logo"
}: {
	type?: "marvel" | "V-loader" | "loading"
	colorType?: "white-logo" | "blue-logo"
}) => {
	return (
		<>
			{type === "marvel" && colorType === "white-logo" && (
				<StyledLogo type={colorType} />
			)}
			{type === "marvel" && colorType === "blue-logo" && (
				<StyledLogo type={colorType} />
			)}
			{type === "V-loader" && <LoaderImg />}
			{type === "loading" && <Loader />}
		</>
	)
}

export default Logo
