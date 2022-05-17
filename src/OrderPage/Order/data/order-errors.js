import { ErrorType } from "stores/ErrorModalsStore"

const errors = [
	{
		title: "Недостаточно резервов",
		data: {
			type: ErrorType.NotEnoughReserves,
			actions: {
				highlightItems: () => console.log("action: Показать строки")
			}
		}
	},
	{
		title: "Продажа только в комплекте",
		data: {
			type: ErrorType.SetOnly,
			currentItem: "B2B_0248113",
			setItems: [
				"B2B_0248113" + "_1",
				"B2B_0248113" + "_2",
				"B2B_0248113" + "_3"
			],
			actions: {
				addAndContinue: () => console.log("action: Добавить и продолжить")
			}
		}
	},
	{
		title: "Вас давно не было!",
		data: {
			type: ErrorType.LongTimeAbsence,
			actions: {
				updateRate: () => console.log("action: Обновить курс"),
				updateRateAndShip: () =>
					console.log("action: Обновить курс и отгрузить")
			}
		}
	},
	{
		title: "Нет цены у товара",
		data: {
			type: ErrorType.NoPriceForGood,
			currentItem: "B2B_0248113",
			actions: {
				continueWithoutThisItem: () =>
					console.log("action: Продолжить без этого товара")
			}
		}
	}
]

export default errors
