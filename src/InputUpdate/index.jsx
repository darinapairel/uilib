import React from "react"
import styled from "styled-components"
import * as vars from "../helpers/vars"
import { lineHeight } from "../helpers/mixins"

const StyledBlock = styled.div`
  position: relative;
`
const StyledDrop = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  padding-top: 12px;
  width: 211px;
  z-index: ${vars.zindex.items};
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity ${vars.trans.base}, visibility ${vars.trans.base},
    transform ${vars.trans.base};
  user-select: none;

  ${StyledBlock}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  ${vars.media.mobileLarge} {
    left: -40px;
  }
`
const StyledWrapper = styled.div`
  background: ${vars.color.white};
  font-size: ${vars.font.small};
  line-height: ${lineHeight(vars.font.small, "20px")};
  border-radius: 4px;
  box-shadow: ${vars.shadow.dropInvert};
  text-align: left;
  padding: 10px 14px 12px;
  position: relative;
  letter-spacing: 0.02em;

  &::before {
    content: "";
    position: absolute;
    left: 24px;
    top: -8px;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-bottom-color: ${vars.color.white};
  }

  ${vars.media.mobileLarge} {
    &::before {
      left: 64px;
    }
  }
`
const StyledList = styled.ul``
const StyledItem = styled.li`
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`
const StyledDanger = styled.span`
  color: ${vars.color.important};
`
const StyledLink = styled.span`
  color: ${vars.color.links};
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transition: opacity ${vars.trans.base}, transform ${vars.trans.base};

  &:hover {
    opacity: 0.5;
  }

  &:active {
    transform: translateY(2px);
  }
`

const InputUpdate = ({
  error,
  num,
  children,
  text = "Обновить резерв в заказе?",
  onClick,
  disabled = false
}) => {
  return (
    <StyledBlock>
      {children}

      {!disabled && (
        <StyledDrop>
          <StyledWrapper>
            <StyledList>
              {error && (
                <StyledItem>
                  <StyledDanger>Обеспечено резервом {num} шт.</StyledDanger>
                </StyledItem>
              )}
              <StyledItem>{text}</StyledItem>
              <StyledItem onClick={() => onClick()}>
                <StyledLink>Обновить</StyledLink>
              </StyledItem>
            </StyledList>
          </StyledWrapper>
        </StyledDrop>
      )}
    </StyledBlock>
  )
}

export default InputUpdate
