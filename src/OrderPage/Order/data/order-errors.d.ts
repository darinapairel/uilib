export default errors
declare const errors: (
	| {
			title: string
			data: {
				type: any
				actions: {
					highlightItems: () => void
					addAndContinue?: undefined
					updateRate?: undefined
					updateRateAndShip?: undefined
					continueWithoutThisItem?: undefined
				}
				currentItem?: undefined
				setItems?: undefined
			}
	  }
	| {
			title: string
			data: {
				type: any
				currentItem: string
				setItems: string[]
				actions: {
					addAndContinue: () => void
					highlightItems?: undefined
					updateRate?: undefined
					updateRateAndShip?: undefined
					continueWithoutThisItem?: undefined
				}
			}
	  }
	| {
			title: string
			data: {
				type: any
				actions: {
					updateRate: () => void
					updateRateAndShip: () => void
					highlightItems?: undefined
					addAndContinue?: undefined
					continueWithoutThisItem?: undefined
				}
				currentItem?: undefined
				setItems?: undefined
			}
	  }
	| {
			title: string
			data: {
				type: any
				currentItem: string
				actions: {
					continueWithoutThisItem: () => void
					highlightItems?: undefined
					addAndContinue?: undefined
					updateRate?: undefined
					updateRateAndShip?: undefined
				}
				setItems?: undefined
			}
	  }
)[]
