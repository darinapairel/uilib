import React from "react"
import styled, { css } from "styled-components"
import * as vars from "../helpers/vars"
import Checkbox from "../Checkbox"
import { pluralize } from "numeralize-ru"
import useWindowDimensions from "../helpers/useWindowDimensions"

const StyledBlock = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	vertical-align: middle;
	user-select: none;
`
const StyledCheckbox = styled(Checkbox)``
const StyledNums = styled.span<{ isselected?: boolean; mod?: string }>`
	display: flex;
	align-items: center;
	font-weight: 500;
	padding-left: 12px;
	transition: opacity ${vars.trans.base};
	will-change: opacity;

	/* ${(props) => props.isselected && css``} */

	${vars.media.phabletSmall} {
		${(props) =>
			props.mod == "cart" &&
			css`
				font-weight: 700;
			`}
	}
`
const StyledReset = styled.span<{ mod?: string }>`
	display: inline-block;
	vertical-align: middle;
	margin-left: 32px;
	font-weight: 500;
	color: ${vars.color.links};
	transition: color ${vars.trans.base}, opacity ${vars.trans.base};
	cursor: pointer;

	${StyledBlock}:hover & {
		opacity: 0.8;
	}

	${vars.media.ultraWide} {
		margin-left: 16px;
	}

	${vars.media.phabletSmall} {
		margin-left: 12px;

		${(props) =>
			props.mod == "cart" &&
			css`
				display: none;
			`}
	}
`

const PageCheckbox = ({
	num = 0,
	checked,
	onChange,
	onReset,
	className,
	mod,
	variant = "small"
}: {
	num?: number
	checked?: boolean
	onChange
	onReset
	className?
	mod?
	variant?: string
}) => {
	const { width } = useWindowDimensions()
	return (
		<StyledBlock className={className}>
			<StyledCheckbox
				variant={variant}
				onChange={() => onChange(!checked)}
				checked={checked}
			>
				<StyledNums isselected={checked} mod={mod}>
					{num
						? `${num} ${pluralize(num, "выбран", "выбрано", "выбрано")}`
						: width > 340 && `Выбрать все`}
				</StyledNums>
			</StyledCheckbox>

			{num !== 0 && (
				<StyledReset onClick={onReset} mod={mod}>
					Снять выделение
				</StyledReset>
			)}
		</StyledBlock>
	)
}

export default PageCheckbox
