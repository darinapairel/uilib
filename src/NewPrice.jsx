import styled, { css } from "styled-components"
import * as vars from "./helpers/vars"

const StyledPrice = styled.span`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  color: ${vars.color.text};
  white-space: nowrap;
  font-weight: 700;
  cursor: default;
`
const StyledNum = styled.span`
  display: inline-block;
  vertical-align: middle;
`
const StyledPost = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 0.5em;
  line-height: 1;
  margin-left: 0.5em;
  margin-top: -1em;

  ${(props) =>
    props.mod == "set" &&
    css`
      font-weight: 700;
    `}

  ${(props) =>
    props.mod == "cart" &&
    css`
      font-weight: 700;
      display: none;
    `}

  ${vars.media.notebook} {
    ${(props) =>
      props.mod == "cart" &&
      css`
        display: inline-block;
      `}
  }
`
const StyledCurr = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.2em;

  ${(props) =>
    props.currency == "$" &&
    css`
      margin-left: 0;
    `}
`

const NewPrice = ({ mod, exacly = false, className = "", children }) => {
  let output, postfix, currency

  if (exacly) return <StyledPrice className={className}>{children}</StyledPrice>

  if (typeof children === "string" && children?.includes("Call")) {
    output = children
  } else if (typeof children === "string") {
    const price = children.replace(/[^0-9/.]/g, "").split(".")
    if (price[1] && price[1].length !== 2) {
      postfix = price[1] * 10
    } else {
      postfix = price[1]
    }
    currency = children.replace(/[0-9/.]/g, "")
    output = price[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  return (
    <StyledPrice className={className}>
      {/* {currency && currency.includes('$') && (
        <StyledCurr mod={mod} currency={currency}>{currency}</StyledCurr>
      )} */}

      <StyledNum>{output || children}</StyledNum>

      {postfix && <StyledPost mod={mod}>{postfix}</StyledPost>}

      {currency && (
        <StyledCurr mod={mod} currency={currency}>
          {currency}
        </StyledCurr>
      )}
    </StyledPrice>
  )
}

export default NewPrice
