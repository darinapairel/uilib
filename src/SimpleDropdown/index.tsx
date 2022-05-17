import React, { useState, useRef, useEffect } from "react"
import * as S from "./styles"

const SimpleDropdown = ({
	onChange,
	options = [],
	className
}: {
	onChange: (value) => void
	options: Array<any>
	className?
}) => {
	const [drop, setDrop] = useState(false)
	const [placeholder, setPlaceholder] = useState(options[0].label)
	const dropdown = useRef(null)

	const handlerOption = (label, value) => {
		setDrop(false)
		setPlaceholder(label)
		onChange(value)
	}

	const list = options.map((item, index) => {
		return (
			<S.Option
				key={`dropdown-${index}`}
				onClick={() => handlerOption(item.label, item.value)}
			>
				{item.label}
				{/* {item.file && <S.File extention={item.file} />} */}
			</S.Option>
		)
	})

	const handleClickOutside = (e) => {
		!dropdown.current.contains(e.target) && setDrop(false)
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [drop])

	return (
		<S.Block className={className} ref={dropdown}>
			<S.Select onClick={() => setDrop(!drop)}>
				<S.Placeholder>{placeholder}</S.Placeholder>
				<S.Arrow isopened={drop}>
					<S.ArrowIcn />
				</S.Arrow>
			</S.Select>

			<S.Drop isopened={drop}>
				<S.Wrapper>
					<S.List>{list}</S.List>
				</S.Wrapper>
			</S.Drop>
		</S.Block>
	)
}

export default SimpleDropdown
