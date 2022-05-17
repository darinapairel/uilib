import { useState, useEffect } from "react"

export default function useWindowDimensions() {
	const [windowSize, setWindowSize] = useState<{
		width: undefined | number
		height: undefined | number
	}>({
		width: undefined,
		height: undefined
	})

	useEffect(() => {
		// only execute all the code below in client side
		if (typeof window !== "undefined") {
			// Handler to call on window resize
			const handleResize = () => {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight
				})
			}

			// Add event listener
			window.addEventListener("resize", handleResize)

			// Call handler right away so state gets updated with initial window size
			handleResize()

			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize)
		}
	}, []) // Empty array ensures that effect is only run on mount
	return windowSize
}

// OLD HOOK
// export default function useWindowDimensionsOld() {
//   const hasWindow = typeof window !== 'undefined'

//   function getWindowDimensions() {
//     const width = hasWindow ? window.innerWidth : null
//     const height = hasWindow ? window.innerHeight : null
//     return {
//       width,
//       height
//     }
//   }

//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   )

//   useEffect(() => {
//     if (hasWindow) {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions())
//       }

//       window.addEventListener('resize', handleResize)
//       return () => window.removeEventListener('resize', handleResize)
//     } else {
//       setWindowDimensions(false)
//     }
//   }, [hasWindow])

//   return windowDimensions
// }
