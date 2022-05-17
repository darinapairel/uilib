import React from "react"
import styled, { css } from "styled-components"
import * as vars from "../helpers/vars"
import EditIcn from "../assets/img/goods-edit.svg"

const StyledLink = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  color: ${vars.color.icons};
  line-height: 0;
  transition: color ${vars.trans.base}, transform ${vars.trans.base};

  &:hover {
    color: ${vars.color.links};
  }

  &:active {
    transform: translateY(2px);
  }

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
const StyledIcn = styled(EditIcn)`
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
const StyledLabel = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
  font-weight: 500;
`

const GoodsEdit = (props) => {
  const { onClick, size, variant, className, children } = props

  return (
    <StyledLink onClick={onClick} className={className} size={size}>
      <StyledIcn size={size} variant={variant} />
      {children && <StyledLabel>{children}</StyledLabel>}
    </StyledLink>
  )
}

export default GoodsEdit
