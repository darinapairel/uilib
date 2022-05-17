export default Order
declare function Order({
	title,
	href,
	num,
	id,
	created,
	paymentType,
	paymentStatus,
	paymentDate,
	source,
	status,
	statusCode,
	summ,
	className
}: {
	title: any
	href?: string
	num: any
	id: any
	created: any
	paymentType: any
	paymentStatus: any
	paymentDate: any
	source: any
	status: any
	statusCode: any
	summ: any
	className: any
}): JSX.Element
