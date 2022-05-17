import styled, { css } from "styled-components"
import { rgba, darken, math } from "polished"
import * as vars from "./helpers/vars"

const stylesBlock = css`
  cursor: pointer;
  position: relative;
  display: inline-block;
  vertical-align: middle;
`
const StyledBlock = styled.div`
  ${stylesBlock}
  line-height: ${(props) => props.size};
  min-height: ${(props) => props.size};
  flex: 0 0 auto
    ${(props) =>
      props.mod == "lists" &&
      css`
        ${vars.media.phabletSmall} {
          line-height: 16px;
          min-height: 16px;
        }
      `};
`
const StyledLabel = styled.label`
  ${stylesBlock}
  line-height: ${(props) => props.size};
  min-height: ${(props) => props.size};

  ${(props) =>
    props.mod == "lists" &&
    css`
      ${vars.media.phabletSmall} {
        line-height: 16px;
        min-height: 16px;
      }
    `}
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
  display: inline-block;
  vertical-align: top;
  user-select: none;

  ${(props) =>
    props.size == "16px" &&
    css`
      padding-left: ${math("16px + 8px")};
    `}

  ${(props) =>
    props.size == "20px" &&
    css`
      padding-left: ${math("20px + 8px")};

      ${props.mod == "lists" &&
      css`
        ${vars.media.phabletSmall} {
          padding-left: ${math("16px + 8px")};
        }
      `}
    `}

  &:empty {
    padding-left: ${(props) => props.size};

    ${(props) =>
      props.mod == "lists" &&
      css`
        ${vars.media.phabletSmall} {
          padding-left: 16px;
        }
      `}
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 4px;
  }

  ${(props) =>
    props.mod == "lists" &&
    css`
      ${vars.media.phabletSmall} {
        &::before,
        &::after {
          width: 16px;
          height: 16px;
        }
      }
    `}

  &::before {
    background: ${vars.color.white};
    border: 1px solid ${vars.color.background};
    transition: all ${vars.trans.base};
    will-change: auto;
  }

  &::after {
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.00002 1L3.50002 6.5L1.00002 4' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")
      no-repeat center center;
    background-size: 10px 8px;
    opacity: 0;
    transform: translateY(-5px);
    transition: opacity ${vars.trans.base}, transform ${vars.trans.base};
    will-change: opacity, transition;
  }

  /* checked */
  ${StyledInput}:checked ~ &::before {
    background: ${vars.color.links};
    border-color: ${vars.color.links};
  }

  ${StyledInput}:checked ~ &::after {
    opacity: 1;
    transform: translateY(0);
  }

  /* hover */
  ${StyledBlock}:hover ${StyledInput}:not(:checked) ~ &::before {
    border-color: ${vars.color.backgroundDark};
  }

  ${StyledBlock}:hover ${StyledInput}:checked + &::before {
    border-color: ${darken(0.2, vars.color.links)};
  }

  ${StyledLabel}:hover ${StyledInput}:not(:checked) ~ &::before {
    border-color: ${vars.color.backgroundDark};
  }

  ${StyledLabel}:hover ${StyledInput}:checked + &::before {
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

const Checkbox = (props) => {
  const {
    nolabel,
    disabled,
    value,
    checked,
    defaultChecked,
    name,
    onChange,
    variant,
    id,
    className,
    mod,
    ariaLabel,
    children,
    data
  } = props
  let size = "16px"

  if (variant == "medium") {
    size = "20px"
  }

  return (
    <>
      {nolabel ? (
        <StyledBlock
          className={className}
          size={size}
          mod={mod}
          aria-label={ariaLabel}
        >
          <StyledInput
            size={size}
            mod={mod}
            type="checkbox"
            defaultChecked={defaultChecked}
            checked={checked}
            name={name}
            disabled={disabled}
            value={value}
            onChange={onChange}
          />
          <StyledTitle size={size} mod={mod}>
            {children}
          </StyledTitle>
        </StyledBlock>
      ) : (
        <StyledLabel
          htmlFor={id}
          className={className}
          size={size}
          mod={mod}
          aria-label={ariaLabel}
        >
          <StyledInput
            size={size}
            mod={mod}
            type="checkbox"
            defaultChecked={defaultChecked}
            checked={checked}
            name={name}
            id={name}
            disabled={disabled}
            value={value}
            data-checkbox={data}
            onChange={onChange}
          />
          <StyledTitle size={size} mod={mod}>
            {children}
          </StyledTitle>
        </StyledLabel>
      )}
    </>
  )
}

export default Checkbox
