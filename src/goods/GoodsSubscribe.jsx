import styled, { css } from "styled-components"
import * as vars from "../helpers/vars"
import SubIcn from "../assets/img/messages.svg"

const StyledLink = styled.span`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  color: ${vars.color.icons};
  line-height: 0;
  transition: color ${vars.trans.base}, opacity ${vars.trans.base},
    transform ${vars.trans.base};

  &:hover {
    color: ${vars.color.links};
  }

  &:active {
    transform: translateY(2px);
  }

  ${(props) =>
    props.active &&
    css`
      color: ${vars.color.links};

      &:hover {
        opacity: 0.5;
      }
    `}

  ${(props) =>
    props.size == "small" &&
    css`
      width: 16px;
      height: 16px;
    `}


  ${vars.media.desktop} {
    ${(props) =>
      props.variant == "order" &&
      css`
        width: 20px;
        height: 20px;
      `}
  }
`
const StyledIcn = styled(SubIcn)`
  display: inline-block;
  vertical-align: top;
  width: 20px;
  height: 20px;
  flex: 0 0 auto;

  ${(props) =>
    props.size == "small" &&
    css`
      width: 16px;
      height: 16px;
    `}

  ${vars.media.desktop} {
    ${(props) =>
      props.variant == "order" &&
      css`
        width: 20px;
        height: 20px;
      `}
  }
`
const StyledNew = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  right: -3px;
  top: -1px;
  background: ${vars.color.important};
  border: 2px solid ${vars.color.white};
`
const StyledLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
  font-weight: 500;
`

const GoodsSubscribe = ({
  active,
  size,
  onClick,
  variant,
  className,
  children
}) => {
  return (
    <StyledLink
      onClick={onClick}
      className={className}
      size={size}
      active={active}
      variant={variant}
    >
      <StyledIcn size={size} variant={variant} />
      {active && <StyledNew size={size} />}
      {children && <StyledLabel>{children}</StyledLabel>}
    </StyledLink>
  )
}

export default GoodsSubscribe
