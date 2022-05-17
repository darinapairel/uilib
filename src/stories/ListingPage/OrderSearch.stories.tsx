import React from "react"
import styled from "styled-components"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import BaseInput from "../../BaseInput"

export default {
	title: "Listing Page/Base Input",
	component: BaseInput
} as ComponentMeta<typeof BaseInput>

const StyledWidthWrapper = styled.div`
	width: 250px;
`
const Template: ComponentStory<typeof BaseInput> = (args) => (
	<StyledWidthWrapper>
		<BaseInput {...args} />
	</StyledWidthWrapper>
)

export const Primary = Template.bind({})
