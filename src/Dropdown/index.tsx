import React, { useState, useRef, useEffect } from "react"
import * as S from "./styles"

const Dropdown = ({
	options = [],
	mod,
	placeholder,
	className,
	position,
	onChange
}: {
	options?
	mod?
	placeholder
	className?
	position
	onChange
}) => {
	const [drop, setDrop] = useState(false)
	const [newholder, setNewholder] = useState(placeholder || options?.[0]?.label)
	const dropdown = useRef(null)

	const handlerOption = (label, value) => {
		setDrop(false)
		setNewholder(label)
		onChange && onChange(value)
	}

	const handleClickOutside = (e) => {
		!dropdown.current.contains(e.target) && setDrop(false)
	}

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [drop])

	if (options?.length < 1) return null

	return (
		<S.Block className={className} mod={mod} ref={dropdown}>
			<S.Select onClick={() => setDrop(!drop)}>
				<S.Placeholder>{newholder}</S.Placeholder>
				<S.Arrow isopened={drop}>
					<S.ArrowIcn />
				</S.Arrow>
			</S.Select>

			<S.Drop isopened={drop} position={position}>
				<S.Wrapper>
					<S.List>
						{options.map((item, index) => (
							<S.Option
								key={`dropdown-${index}`}
								onClick={() => handlerOption(item.label, item.value)}
							>
								{item.label}
							</S.Option>
						))}
					</S.List>
				</S.Wrapper>
			</S.Drop>
		</S.Block>
	)
}

export default Dropdown
