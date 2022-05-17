import React from "react"
import * as S from "./styles"

type Mods =
	| "accent"
	| "accentLight"
	| "important"
	| "lighten"
	| "base"
	| "transparent"

const Button = ({
	href,
	size,
	onClick,
	download,
	className,
	ariaLabel,
	disabled,
	type = "button",
	mod,
	children
}: {
	href?: string
	size?: string
	onClick?: any
	download?: string
	className?: string
	ariaLabel?: string
	disabled?: boolean
	type?: string
	mod?: Mods
	children: any
}) => {
	return (
		<S.Btn
			className={className}
			href={href}
			size={size || "base"}
			download={download && "download"}
			onClick={onClick}
			aria-label={ariaLabel}
			disabled={disabled ? 1 : null}
			type={!href ? type : null}
			//as={!href && 'button'}
			mod={mod}
		>
			{children}
		</S.Btn>
	)
}

export default Button
