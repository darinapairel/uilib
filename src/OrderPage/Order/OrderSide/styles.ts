import styled from "styled-components"
import OrderStats from "../OrderStats"
import OrderDocsList from "../OrderDocsList"
import OrderDescription from "../OrderDescription"

export const Block = styled.aside``
export const Stats = styled(OrderStats)`
	margin-bottom: 30px;
`
export const Docs = styled(OrderDocsList)`
	margin-bottom: 40px;
`
export const Desc = styled(OrderDescription)``
