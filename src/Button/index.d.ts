declare type Mods =
  | "accent"
  | "accentLight"
  | "important"
  | "lighten"
  | "base"
  | "transparent"
declare const Button: ({
  href,
  size,
  onClick,
  download,
  className,
  ariaLabel,
  disabled,
  type,
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
}) => JSX.Element
export default Button
