import React from "react"
// import Link from 'next/link'
import * as S from "./styles"

const OrderDocsList = ({
	hasInvoice,
	className
}: {
	hasInvoice: boolean
	className?: string
}) => {
	return (
		<S.Block className={className}>
			<S.Title>Документы</S.Title>
			<S.List>
				{/* {files.map((item, index) => {
          return (
            <S.Item key={`files-${index}`}>
              <Link href={item.href} passHref>
                <S.Link>
                  <S.File extention={item.extention} />
                  <S.Name>{item.title}</S.Name>
                  <S.Icn />
                </S.Link>
              </Link>
            </S.Item>
          )
        })} */}
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
