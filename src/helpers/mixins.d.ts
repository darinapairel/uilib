export declare const lineHeight: (
  fontSize?: string | number,
  lineHeight?: string | number
) => number
export declare const displayAnimate: import("styled-components").Keyframes
export declare const flexWidth: (width?: string) => {
  width: string
  "max-width": string
  flex: string
}
export declare const textOverflow: () => {
  overflow: string
  "max-width": string
  "white-space": string
  "text-overflow": string
}
export declare const lineClamp: (num: any) => {
  overflow: string
  display: string
  "-webkit-line-clamp": string
  "-webkit-box-orient": string
}
export declare const betterFonts: () => {
  "-webkit-font-smoothing": string
  "-moz-osx-font-smoothing": string
}
export declare const fontSmall: import("styled-components").FlattenSimpleInterpolation
export declare const fontBase: import("styled-components").FlattenSimpleInterpolation
export declare const fontSemibase: import("styled-components").FlattenSimpleInterpolation
export declare const fontMedium: import("styled-components").FlattenSimpleInterpolation
export declare const fontMiddle: import("styled-components").FlattenSimpleInterpolation
export declare const fontLarge: import("styled-components").FlattenSimpleInterpolation
export declare const titleH1: import("styled-components").FlattenSimpleInterpolation
export declare const titleH2: import("styled-components").FlattenSimpleInterpolation
export declare const btnSizeBig: import("styled-components").FlattenSimpleInterpolation
export declare const btnSizeMedium: import("styled-components").FlattenSimpleInterpolation
export declare const btnSizeBase: import("styled-components").FlattenSimpleInterpolation
export declare const btnSizeSmall: import("styled-components").FlattenSimpleInterpolation
export declare const btnSizeSmaller: import("styled-components").FlattenSimpleInterpolation
export declare const btnReset: import("styled-components").FlattenSimpleInterpolation
export declare const btn: import("styled-components").FlattenInterpolation<
  import("styled-components").ThemedStyledProps<
    {
      disabled?: any
      size?: any
    },
    any
  >
>
export declare const inputSizeBase: import("styled-components").FlattenSimpleInterpolation
export declare const fieldDisabled: import("styled-components").FlattenSimpleInterpolation
export declare const fieldError: import("styled-components").FlattenSimpleInterpolation
export declare const link: import("styled-components").FlattenSimpleInterpolation
export declare const hidden: import("styled-components").FlattenSimpleInterpolation
export declare const scrollbar: (
  bg?: string,
  thumbColor?: string,
  size?: number
) => import("styled-components").FlattenSimpleInterpolation
