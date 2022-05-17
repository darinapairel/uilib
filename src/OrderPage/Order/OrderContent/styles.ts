import styled from "styled-components"
import * as vars from "../../../helpers/vars"
import { fontSemibase, titleH1, titleH2 } from "../../../helpers/mixins"
// import { rgba } from 'polished'
// import ErrorsAlert from 'elements/ErrorsAlert'
// import GoodsSubscribe from 'ui/goods/GoodsSubscribe'
// import GoodsEdit from 'ui/goods/GoodsEdit'
// import GoodsMsg from 'elements/GoodsMsg'
import OrderTimeline from "../OrderTimeline"
// import OrderOptions from '../OrderOptions'

export const Block = styled.div`
	background: ${vars.color.white};
	box-shadow: ${vars.shadow.block};
	border-radius: 4px;
`
export const Header = styled.div`
	margin-bottom: 24px;
	border-bottom: 1px solid ${vars.color.background};
	padding: 32px 30px 24px;

	${vars.media.phablet} {
		padding: 16px 0 20px;
		margin-left: 16px;
		margin-right: 16px;
		margin-bottom: 20px;
	}
`
export const Pre = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	margin-bottom: 12px;

	${vars.media.phablet} {
		flex-wrap: wrap;
		margin-bottom: 12px;
	}
`
export const Title = styled.h1`
	${titleH1}
	text-transform: uppercase;

	${vars.media.phablet} {
		${titleH2}
	}
`
// export const Errors = styled(ErrorsAlert)`
//   margin-left: 14px;
// `
export const Date = styled.div`
	display: inline-block;
	vertical-align: middle;
	font-weight: 500;
	margin-left: auto;
	padding-left: 16px;

	${vars.media.phablet} {
		${fontSemibase}
		margin-bottom: 12px;
		order: -1;
		width: 100%;
		margin-left: 0;
		padding-left: 0;
		color: ${vars.color.muted};
	}
`
export const After = styled.div`
	display: flex;

	${vars.media.phablet} {
		flex-direction: column;
	}
`

export const Name = styled.span`
	display: inline-block;
	vertical-align: middle;
	padding-left: 16px;
	margin-left: auto;
	color: ${vars.color.muted};

	${vars.media.phablet} {
		${fontSemibase}
		margin-left: 0;
		padding-left: 0;
	}
`

export const Body = styled.div`
	padding: 0 30px 28px;

	${vars.media.phablet} {
		padding: 0 16px 16px;
	}
`

export const Actions = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;

	${vars.media.phablet} {
		order: 5;
		margin-top: 8px;
	}
`
export const Action = styled.li`
	margin-right: 20px;

	&:last-child {
		margin-right: 0;
	}

	${vars.media.phabletSmall} {
		margin-right: 12px;
	}
`
// export const Edit = styled(GoodsEdit)`
//   color: ${vars.color.links};

//   &:hover {
//     color: ${rgba(vars.color.links, 0.5)};
//   }
// `
// export const Subscribe = styled(GoodsSubscribe)`
//   color: ${vars.color.links};

//   &:hover {
//     color: ${rgba(vars.color.links, 0.5)};
//   }
// `
export const Controls = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	${vars.media.hd} {
		flex-direction: column;
	}
`
// export const Info = styled(GoodsMsg)`
//   max-width: 364px;
//   width: 100%;

//   ${vars.media.phablet} {
//     max-width: 100%;
//   }
// `
// export const Options = styled(OrderOptions)`
//   margin-left: auto;

//   ${vars.media.hd} {
//     margin-left: 0;
//     margin-top: 12px;
//   }

//   ${vars.media.phabletSmall} {
//     display: none;
//   }
// `
export const TimeLine = styled(OrderTimeline)``
