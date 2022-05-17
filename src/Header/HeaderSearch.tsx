import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import * as vars from "../helpers/vars"
import _debounce from "lodash/debounce"
import { createBrowserHistory } from "history"
import useWindowDimensions from "../helpers/useWindowDimensions"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import SearchInput from "./SearchInput"

const StyledSearchInput = styled(SearchInput)`
	width: 100%;
	max-width: 100%;
	flex: 0 1 auto;
`
const StyledBlock = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: flex-start;
	position: relative;
	background: ${vars.color.white};
	height: 44px;
	width: 85%;
	border-radius: 6px;
	z-index: ${vars.zindex.overlay + 1};
	margin-left: 25px;

	${vars.media.phabletSmall} {
		height: 34px;
		margin-left: 0;
	}
`

const HeaderSearch = (fetchFromApi) => {
	//(searchValue, handleFocus, handleSearch, handleBlur, handleButtonSearch, handleKeyPress, searchOpened)
	// searchValue = rootStore.searchPreviewStore.query

	const [searchOpened, setSearchOpened] = useState(false)
	const [searchValue, setSearchValue] = useState("")

	const history = createBrowserHistory()

	const scrollEl = useRef(null)

	const { width } = useWindowDimensions()

	useEffect(() => {
		if (width <= vars.breakpoint.tablet && scrollEl.current) {
			searchOpened
				? disableBodyScroll(scrollEl.current.contentWrapperEl)
				: enableBodyScroll(scrollEl.current.contentWrapperEl)
		} else if (scrollEl.current) {
			enableBodyScroll(scrollEl.current.contentWrapperEl)
		}
	}, [width, searchOpened])

	const handleBlur = (e) => {
		const { value } = e.currentTarget

		if (value === "") {
			setSearchOpened(false)
		}
		setSearchValue(value)
	}

	const handleKeyPress = (e) => {
		if (e.code === "Enter") {
			console.log("e from handleKeyPress", e)
			setSearchOpened(false)
			history.push(`/catalog?search=${searchValue}`)
		}
	}

	const handleSearch = (e) => {
		const { value } = e.currentTarget
		setSearchValue(value)
		_debounce(() => fetchFromApi(value), 1000)
		setSearchOpened(!!value)
	}

	const handleButtonSearch = () => {
		setSearchOpened(false)
		history.push(`/catalog?search=${searchValue}`)
	}

	const handleFocus = (e) => {
		setSearchOpened(!!e.target.value)
	}

	return (
		<StyledBlock>
			<StyledSearchInput
				className="search-inp"
				value={searchValue}
				onFocus={handleFocus}
				onInput={handleSearch}
				onBlur={handleBlur}
				onButtonClick={handleButtonSearch}
				onKeyPress={handleKeyPress}
				isOpened={searchOpened}
			/>
		</StyledBlock>
	)
}

export default HeaderSearch
