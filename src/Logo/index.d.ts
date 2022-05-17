declare const Logo: ({
  type,
  colorType,
  className
}: {
  type?: "marvel" | "V-loader" | "loading"
  colorType?: "white-logo" | "blue-logo"
  className?: string
}) => JSX.Element
export default Logo
