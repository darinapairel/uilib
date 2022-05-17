import styled from "styled-components"
import Select, { components } from "react-select"
import { rgba } from "polished"
import * as vars from "./helpers/vars"
import ArrowDown from "./assets/img/arrow-down.svg"
import React, { useRef } from "react"

const StyledBlock = styled.div`
  cursor: pointer;
`
const StyledArrow = styled(ArrowDown)`
  display: inline-block;
  vertical-align: middle;
  color: ${vars.color.brand};
  width: 8px;
  height: 8px;
`

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <StyledArrow />
    </components.DropdownIndicator>
  )
}

const BaseSelect = (props) => {
  const {
    size,
    defaultValue,
    value,
    valueType,
    placeholder,
    options,
    className,
    onChange,
    id,
    isBaseFilter,
    isFilter
  } = props
  const dropdownRef = useRef(null)

  const customStyles = {
    control: (provided, state) => {
      const height = vars.select[size] || vars.select.base
      const minWidth = "100px"
      const cursor = "pointer"
      const transition = `border ${vars.trans.base}`
      const boxShadow = state.isFocused && "none"

      const border = {
        borderColor: state.isFocused ? vars.color.links : vars.color.background,

        "&:hover": {
          borderColor: state.isFocused
            ? vars.color.links
            : vars.color.backgroundDark
        }
      }

      const media = {
        [vars.media.notebook]: {
          height: "40px"
        }
      }

      return {
        ...provided,
        ...border,
        boxShadow,
        transition,
        cursor,
        height,
        minWidth,
        ...media
      }
    },
    valueContainer: (provided) => {
      let padding = "2px 14px"

      if (size == "small") {
        padding = "2px 10px"
      }

      return { ...provided, padding }
    },
    singleValue: (provided) => ({
      ...provided,
      fontWeight: "500",
      color: vars.color.brand
    }),
    indicatorSeparator: () => ({
      display: "none"
    }),
    dropdownIndicator: (provided) => {
      const transition = `transform ${vars.trans.base}`
      let padding = "2px 12px"

      if (size == "small") {
        padding = "1px 8px"
      }

      return { ...provided, transition, padding }
    },
    menu: (provided) => ({
      ...provided,
      borderRadius: "4px",
      boxShadow: `4px 4px 24px ${rgba(vars.color.shadow, 0.16)}`
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "6px"
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: "500",
      fontSize: vars.font.semibase,
      borderRadius: "4px",
      transition: `background ${vars.trans.base}`,
      color: vars.color.text,
      background: state.isSelected
        ? rgba(vars.color.background, 0.5)
        : vars.color.white,
      cursor: state.isSelected ? "default" : "pointer",

      "&:hover": {
        background: state.isSelected
          ? rgba(vars.color.background, 0.5)
          : rgba(vars.color.hover, 0.5)
      }
    })
  }

  return (
    <StyledBlock className={className} ref={dropdownRef}>
      <Select
        onChange={
          isBaseFilter
            ? (e) =>
                onChange(dropdownRef.current?.offsetTop, e, id, isBaseFilter)
            : onChange
        }
        value={value}
        defaultValue={defaultValue}
        isSearchable={false}
        placeholder={placeholder || "---"}
        options={options}
        styles={customStyles}
        className="fselect"
        classNamePrefix="fselect"
        components={{ DropdownIndicator }}
        menuPlacement="auto"
        instanceId={id}
      />
    </StyledBlock>
  )
}

export default BaseSelect
