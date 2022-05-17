import React from "react"
import * as S from "./styles"

const PageStat = (props: { summ: any; className?: any; children: any }) => {
	const { summ, className, children } = props

	return (
		<div className={className}>
			{/* <S.StyledTitle>{title}</S.StyledTitle> */}
			{children}

			{/* <S.StyledStats>
        {data.map((item, index) => {
          return (
            <S.StyledItem key={`stat-${index}`}>
              <span>{item.title}</span>
              <S.StyledVal>
                {item.good ? (
                  <S.StyledPriceGood>{item.price}</S.StyledPriceGood>
                ) : (
                  <S.StyledPrice>{item.price}</S.StyledPrice>
                )}
              </S.StyledVal>
            </S.StyledItem>
          )
        })}
      </S.StyledStats> */}

			{summ && (
				<S.StyledSumm>
					<S.StyledSummLabel>Итого:</S.StyledSummLabel>
					<S.StyledSummPrice>{summ}</S.StyledSummPrice>
				</S.StyledSumm>
			)}
		</div>
	)
}

export default PageStat
