export default items
declare const items: (
	| {
			title: string
			href: string
			img: string
			img2x: string
			art: string
			brands: {
				title: string
				href: string
			}[]
			cats: {
				title: string
				href: string
			}[]
			id: string
			author: string
			quantity: number
			summ: string
			nums: number
			price: string
			status: {
				index: number
				status: string
				level: string
				nums: string
			}[]
			quantityError?: undefined
			reserves?: undefined
			date?: undefined
			errors?: undefined
			links?: undefined
			helper?: undefined
			conditionId?: undefined
			selected?: undefined
	  }
	| {
			title: string
			href: string
			img: string
			img2x: string
			art: string
			brands: {
				title: string
				href: string
			}[]
			cats: {
				title: string
				href: string
			}[]
			id: string
			author: string
			quantity: number
			quantityError: boolean
			summ: string
			nums: number
			price: string
			reserves: (
				| {
						title: string
						nums: number
						error?: undefined
				  }
				| {
						title: string
						nums: number
						error: boolean
				  }
			)[]
			date: string
			status?: undefined
			errors?: undefined
			links?: undefined
			helper?: undefined
			conditionId?: undefined
			selected?: undefined
	  }
	| {
			title: string
			href: string
			img: string
			img2x: string
			art: string
			errors: {
				title: string
				href: string
			}[]
			brands: {
				title: string
				href: string
			}[]
			cats: {
				title: string
				href: string
			}[]
			id: string
			author: string
			quantity: number
			summ: string
			nums: number
			price: string
			status: {
				index: number
				status: string
				level: string
				nums: string
			}[]
			links: {
				title: string
				href: string
			}[]
			quantityError?: undefined
			reserves?: undefined
			date?: undefined
			helper?: undefined
			conditionId?: undefined
			selected?: undefined
	  }
	| {
			title: string
			href: string
			img: string
			img2x: string
			art: string
			errors: {
				title: string
				href: string
			}[]
			brands: {
				title: string
				href: string
			}[]
			cats: {
				title: string
				href: string
			}[]
			id: string
			author: string
			quantity: number
			summ: string
			nums: number
			price: string
			status: {
				index: number
				status: string
				level: string
				nums: string
			}[]
			reserves: (
				| {
						title: string
						nums: number
						error?: undefined
				  }
				| {
						title: string
						nums: number
						error: boolean
				  }
			)[]
			date: string
			helper: boolean
			conditionId: string
			selected: boolean
			quantityError?: undefined
			links?: undefined
	  }
)[]
