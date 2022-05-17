import styled from "styled-components"
import SearchIcn from "../../assets/img/search.svg"
import BaseInput from "../../BaseInput"

export const Link = styled.button`
	position: relative;
	top: 5px;
	right: 30px;
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;
	background: transparent;
`

export const SearchWrapper = styled.div`
	position: relative;

	@media (max-width: 1170px) {
		margin-right: 15px;
	}

	@media (max-width: 900px) {
		margin-right: 0;
		margin-bottom: 18px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`

export const Search = styled(BaseInput)<{ onChange?; placeholder? }>`
	font-weight: 400;
	width: 420px;
	padding-right: 32px;
	touch-action: none !important;

	@media (max-width: 1170px) {
		width: 300px;
	}

	@media (max-width: 900px) {
		width: 100%;
	}
`

export const StyledIcn = styled(SearchIcn)`
	right: 30px;
	width: 16px;
	height: 16px;

	transform: translateY(-50%);
	opacity: 0.3;
`
