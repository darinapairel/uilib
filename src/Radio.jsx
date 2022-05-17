import styled, { css } from "styled-components"
import { rgba, darken, math } from "polished"
import * as vars from "./helpers/vars"

const SIZE = "16px"

const stylesBlock = css`
  cursor: pointer;
  position: relative;
  display: inline-block;
  vertical-align: middle;
`

const StyledBlock = styled.div`
  ${stylesBlock}
  line-height: ${SIZE};
  min-height: ${SIZE};
`
const StyledLabel = styled.label`
  ${stylesBlock}
  line-height: ${SIZE};
  min-height: ${SIZE};
`
const StyledInput = styled.input`
  vertical-align: top;
  margin: 0 3px 0 0;
  width: 17px;
  height: 17px;

  &:not(checked) {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`
const StyledTitle = styled.span`
  padding-left: ${math(`${SIZE} + 8px`)};
  display: inline-block;
  vertical-align: top;
  user-select: none;

  &:empty {
    padding-left: ${SIZE};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${SIZE};
    height: ${SIZE};
    border-radius: 50%;
  }

  &::before {
    background: ${vars.color.white};
    border: 1px solid ${vars.color.background};
    transition: all ${vars.trans.base};
  }

  &::after {
    width: ${math(`${SIZE} / 2`)};
    height: ${math(`${SIZE} / 2`)};
    left: ${math(`${SIZE} / 2 / 2`)};
    top: ${math(`${SIZE} / 2 / 2`)};
    border-radius: 50%;
    background: ${vars.color.white};
    opacity: 0;
    transform: scale(0);
    transition: opacity ${vars.trans.base}, transform ${vars.trans.base};
  }

  /* checked */
  ${StyledInput}:checked ~ &::before {
    background: ${vars.color.links};
    border-color: ${vars.color.links};
  }

  ${StyledInput}:checked ~ &::after {
    opacity: 1;
    transform: scale(1);
  }

  /* hover */
  ${StyledBlock}:hover ${StyledInput}:not(:checked) ~ &::before,
  label:hover ${StyledInput}:not(:checked) ~ &::before {
    border-color: ${vars.color.backgroundDark};
  }

  ${StyledBlock}:hover ${StyledInput}:checked + &::before,
  label:hover ${StyledInput}:checked + &::before {
    border-color: ${darken(0.2, vars.color.links)};
  }

  /* focus */
  ${StyledInput}:focus + &::before {
    box-shadow: 0 0 0 2px ${rgba(vars.color.links, 0.1)};
  }

  /* disabled */
  ${StyledInput}:disabled ~ & {
    cursor: not-allowed;

    &::before {
      opacity: 0.5;
      filter: grayscale(1);
    }
  }
`

const Radio = (props) => {
  const {
    nolabel,
    disabled,
    value,
    checked,
    defaultChecked,
    name,
    onChange,
    ariaLabel,
    id,
    className,
    children
  } = props

  return (
    <>
      {nolabel ? (
        <StyledBlock aria-label={ariaLabel} className={className}>
          <StyledInput
            type="radio"
            defaultChecked={defaultChecked}
            checked={checked}
            disabled={disabled}
            value={value}
            name={name}
            onChange={onChange}
            id={id}
          />
          <StyledTitle>{children}</StyledTitle>
        </StyledBlock>
      ) : (
        <StyledLabel htmlFor={id} aria-label={ariaLabel} className={className}>
          <StyledInput
            type="radio"
            defaultChecked={defaultChecked}
            checked={checked}
            disabled={disabled}
            value={value}
            name={name}
            onChange={onChange}
            id={id}
          />
          <StyledTitle>{children}</StyledTitle>
        </StyledLabel>
      )}
    </>
  )
}

export default Radio
