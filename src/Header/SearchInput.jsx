import styled from "styled-components"
import * as vars from "../helpers/vars"
import SearchIcn from "../assets/img/search.svg"

// const SearchIcn = () => <img src={searchIcn} alt="logo" height="16" />

const StyledBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const StyledInput = styled.input`
  height: 44px;
  width: 100%;
  flex: 1 0 auto;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 44px 0 16px;
  margin: 0;
  font-weight: 700;
  font-size: ${vars.font.base};
  background: transparent;
  border-radius: 0;
  border: 0;
  color: ${vars.color.text};
  box-sizing: border-box;
  transition: color ${vars.trans.base};
  outline: none;
  -webkit-appearance: none;

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  &::placeholder {
    opacity: 1;
    font-weight: 400;
    color: ${vars.color.price};
  }

  ${vars.media.phabletSmall} {
    height: 34px;
    font-size: ${vars.font.semibase};
  }
`
const StyledSend = styled.button`
  color: ${vars.color.brand};
  border: 0;
  padding: 10px;
  margin: 0;
  flex: 0 0 auto;
  background: transparent;
  transition: color ${vars.trans.base}, top ${vars.trans.base};
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
  line-height: 1;

  &:hover {
    color: ${vars.color.links};
  }

  &:active {
    top: calc(50% + 1px);
  }

  ${vars.media.phabletSmall} {
    padding-top: 8px;
    padding-bottom: 8px;
    right: -1px;
  }
`
const StyledIcn = styled(SearchIcn)`
  display: inline-block;
  vertical-align: top;
  width: 16px;
  height: 16px;
`

const SearchInput = ({
  className,
  value,
  onInput,
  onBlur,
  onFocus,
  onButtonClick,
  onKeyPress,
  isOpened
}) => {
  return (
    <StyledBlock className={className}>
      <StyledInput
        type="search"
        value={value}
        isOpened={isOpened}
        onInput={onInput}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        placeholder="Поиск среди миллионов"
        aria-label="Поиск"
      />

      <StyledSend type="button" aria-label="Искать" onClick={onButtonClick}>
        <StyledIcn />
      </StyledSend>
    </StyledBlock>
  )
}

export default SearchInput
