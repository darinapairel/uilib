import React from "react"
// import Link from 'next/link'
import * as S from "./styles"

const OrderDocsList = ({ hasInvoice }: { hasInvoice: boolean }) => {
	return (
		<S.Block>
			<S.Title>Документы</S.Title>
			<S.List>
				{hasInvoice && (
					<>
						<S.Item>
							<S.Link>
								<S.File extention="pdf" />
								<S.Name>Инвойс</S.Name>
								<S.Icn />
							</S.Link>
						</S.Item>
						<S.Item>
							<S.Link>
								<S.File extention="xls" />
								<S.Name>Инвойс</S.Name>
								<S.Icn />
							</S.Link>
						</S.Item>
					</>
				)}
			</S.List>
		</S.Block>
	)
}

export default OrderDocsList
