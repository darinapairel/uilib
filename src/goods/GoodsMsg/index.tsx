import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components"
import * as vars from "../../helpers/vars"
import { lineHeight } from "../../helpers/mixins"
import TextareaAutosize from "react-autosize-textarea"

const StyledBlock = styled.div<{ ishidden? }>`
	background: #f5f5f8;
	border-radius: 3px;
	position: relative;
	display: block;
	padding: 8px 12px 7px;
	font-size: ${vars.font.small};
	line-height: ${lineHeight(vars.font.small, "16px")};

	&::before {
		content: "";
		position: absolute;
		left: 15px;
		top: -8px;
		width: 0;
		height: 0;
		border: 4px solid transparent;
		border-bottom-color: #f5f5f8;
	}

	${(props) =>
		props.ishidden &&
		css`
			display: none !important;
		`}
`
const StyledText = styled.div`
	opacity: 0.8;
`

const StyledTextarea = styled(TextareaAutosize)`
	background: transparent;
	border: none;
	padding: 0;
	margin: 0;
	outline: none !important;
	width: 100%;
	min-height: 1em;
	resize: none !important;
	font-size: ${vars.font.small};
	line-height: ${lineHeight(vars.font.small, "16px")};
`
const StyledLinks = styled.div<{ isvisible? }>`
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	display: none;

	${(props) =>
		props.isvisible &&
		css`
			display: flex;
		`}
`
const StyledLink = styled.a<{ disabled? }>`
	display: inline-block;
	vertical-align: middle;
	padding-top: 8px;
	font-size: ${vars.font.small};
	line-height: 1;
	transition: opacity ${vars.trans.base}, transform ${vars.trans.base};
	margin-right: 12px;
	font-weight: 500;
	cursor: pointer;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		opacity: 0.5;
	}

	&:active {
		transform: translateY(2px);
	}

	${({ disabled }) =>
		disabled &&
		css`
			cursor: wait;
			color: ${vars.color.price};
		`}
`
const StyledSave = styled(StyledLink)`
	color: ${vars.color.links};
`
const StyledCancel = styled(StyledLink)`
	color: ${vars.color.important};
`

const GoodsMsg = ({ opened, onSave, setOpened, className, children }) => {
	const textarea = useRef(null)
	const [fetching, setFetching] = useState(false)

	useEffect(() => {
		if (opened && textarea.current) {
			const el = textarea.current
			el.focus()
			el.setSelectionRange(el.value.length, el.value.length)
		}
	}, [opened])

	const handlerCancel = () => {
		setOpened(false)
	}

	const handlerSave = async () => {
		if (!fetching) {
			setFetching(true)
			const isSuccessful = await onSave(textarea.current.value)
			isSuccessful && setOpened(false)
			setFetching(false)
		}
	}

	return (
		<StyledBlock className={className} ishidden={!children && !opened}>
			{opened ? (
				<StyledTextarea
					ref={textarea}
					defaultValue={children}
					async={true}
					placeholder="Введите комментарий"
				/>
			) : (
				<StyledText>{children}</StyledText>
			)}

			<StyledLinks isvisible={opened}>
				<StyledSave onClick={handlerSave} disabled={fetching}>
					Сохранить
				</StyledSave>
				<StyledCancel onClick={handlerCancel}>Отменить</StyledCancel>
			</StyledLinks>
		</StyledBlock>
	)
}

export default GoodsMsg
