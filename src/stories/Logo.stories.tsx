import React from "react"
import styled, { css } from "styled-components"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Logo from "../Logo"

const Wrapper = styled.div<{
	color: "dark" | any
	type: "marvel" | "V-loader" | "loading"
}>`
	display: inline-block;
	padding: 10px;
	${({ color, type }) =>
		type === "marvel" &&
		color === "dark" &&
		css`
			background: #181f47;
		`}
`

export default {
	title: "Listing Page/Logo",
	component: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => (
	<Wrapper
		type={"marvel" || args.type}
		color={args.type === "marvel" && args.colorType === "white-logo" && "dark"}
	>
		<Logo type={"marvel"} colorType={args.colorType} {...args} />
	</Wrapper>
)

export const Primary = Template.bind({})
Primary.args = { type: "marvel", colorType: "blue-logo" }

export const Loader = Template.bind({})
Loader.args = { type: "loading" }

export const VLoaderLetter = Template.bind({})
VLoaderLetter.args = { type: "V-loader" }
