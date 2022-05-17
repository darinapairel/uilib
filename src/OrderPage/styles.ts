import styled from "styled-components"
import * as vars from "../helpers/vars"
import OrderContent from "./Order/OrderContent"
import OrderItems from "./Order/OrderItems"
import OrderSide from "./Order/OrderSide"

export const Page = styled.div``

export const Core = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: flex-start;

	${vars.media.notebook} {
		flex-direction: column;
	}
`
export const Main = styled.main`
	width: 100%;
	max-width: calc(100% - 292px);
	flex: 0 1 auto;
	min-width: 1px;

	${vars.media.fullhd} {
		max-width: calc(100% - 260px);
	}

	${vars.media.notebook} {
		max-width: 100%;
	}
`
export const Content = styled(OrderContent)`
	margin-bottom: 21px;
`
export const Items = styled(OrderItems)``
export const Side = styled(OrderSide)`
	width: 292px;
	padding-left: 32px;
	flex: 0 0 auto;

	${vars.media.fullhd} {
		width: 260px;
		padding-left: 24px;
	}

	${vars.media.notebook} {
		padding-left: 0;
		width: 100%;
		margin-top: 28px;
	}
`
