import { rgba } from "polished"

export const width = {
	full: "1440px"
}

export const color = {
	white: "#fff",
	whiteDarken: "#FAFAFC",
	black: "#000",
	text: "#1D1E21",
	brand: "#181F47",
	accent: "#7FB66B",
	accentLighten: "#BFDBB6",
	accentHover: "#EBF3E8",
	hover: "#EBF2FD",
	hoverDarken: "#BFD6FA",
	price: "#B7B7BD",
	priceLighten: "#DBDBDE",
	muted: "#6A6B70",
	important: "#F16C6C",
	importantBg: "#FCE1E1",
	importantLight: "#F96C85",
	links: "#5895E1",
	linksLighten: "#6AADFF",
	linksHover: "#5498ED",
	linksTransparent: "#DBE7F7",
	border: "#DCE0EA",
	shadow: "#747CA9",
	background: "#E2E4EB",
	backgroundDark: "#C3C5CE",
	page: "#FBFBFD",
	toggler: "#DFE2EB",
	icons: "#C2D2E5",
	inputs: "#FBFBFB",
	empty: "#E2E4EE",
	attention: "#FAA828",
	attentionLighten: "#FFF3E1",
	attentionText: "#FBB13D",
	menu: "#F8F8FA",
	hr: "#D7D8DD",
	conditionId: "#EC960F",
	table: "#F7F8FB",
	special: "#64A54D",
	danger: "#FFC56A",
	dangerText: "#FDB23B",
	dangerLighten: "#FFE3B5",
	warn: "#FF9263",
	warnLighten: "#FCEAE1"
}

export const font = {
	mini: "10px",
	small: "12px",
	smallHeight: "14px",
	semibase: "13px",
	base: "14px",
	baseHeight: "20px",
	middle: "15px",
	middleHeight: "20px",
	medium: "16px",
	mediumHeight: "20px",
	large: "18px",
	largeHeight: "20px"
}

export const title = {
	h1: "24px",
	h1Height: "20px",
	h2: "20px",
	h2Height: "32px"
}

export const shadow = {
	drop: `4px 4px 24px ${rgba(color.shadow, 0.16)}`,
	dropInvert: `4px -4px 24px ${rgba(color.shadow, 0.16)}`,
	filter: `12px 12px 24px ${rgba(color.shadow, 0.16)}`,
	block: `0 10px 24px ${rgba(color.shadow, 0.08)}`
}

export const trans = {
	fast: "0.1s ease",
	base: "0.2s ease",
	medium: "0.3s ease",
	long: "0.5s ease"
}
export const animate = {
	drop: `opacity ${trans.base}, transform ${trans.base}, visibility ${trans.base}`
}

export const zindex = {
	items: 50,
	menu: 99,
	search: 99,
	stickyHeader: 103,
	alert: 104,
	mobpanel: 101,
	preheader: 103,
	sort: 500,
	filter: 500,
	navMobile: 999,
	overlay: 1000
}

export const field = {
	big: "60px",
	medium: "48px",
	base: "40px",
	small: "32px",
	smaller: "28px"
}

export const select = {
	big: "60px",
	medium: "48px",
	base: "40px",
	small: "32px",
	smaller: "28px"
}

export const breakpoint = {
	fullhd: 1200,
	hd: 1100,
	desktop: 1040,
	notebook: 960,
	tablet: 768,
	phablet: 640,
	phabletSmall: 540,
	mobile: 375
}

export const media = {
	phone: "@media screen and (max-width: 340px)",
	mobile: "@media screen and (max-width: 375px)",
	mobileLarge: "@media screen and (max-width: 480px)",
	phabletSmall: "@media screen and (max-width: 540px)",
	phablet: "@media screen and (max-width: 640px)",
	tablet: "@media screen and (max-width: 768px)",
	notebook: "@media screen and (max-width: 960px)",
	desktop: "@media screen and (max-width: 1040px)",
	hd: "@media screen and (max-width: 1100px)",
	fullhd: "@media screen and (max-width: 1200px)",
	preWide: "@media screen and (max-width: 1300px)",
	ultraWide: "@media screen and (max-width: 1400px)",
	megaWide: "@media screen and (max-width: 1500px)"
}
