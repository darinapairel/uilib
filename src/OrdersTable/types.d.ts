export interface Delivery {
  DeliveryId: string
  Status: string
}
export interface Sum {
  Usd: {
    Value: number
    PriceCurrency: string
  }
  NationalCurrency: {
    Value: number
    PriceCurrency: string
  }
}
export declare enum ActivityType {
  Completed = 1,
  InProgress = 2,
  Waiting = 3
}
export declare enum ShipmentStatus {
  NotShipped = 0,
  PartiallyShipped = 1,
  Shipped = 2
}
export declare enum PaymentStatus {
  NotPaid = 0,
  PartiallyPaid = 1,
  Paid = 2
}
export declare enum SortingId {
  NotSet = 0,
  SalesId = 1,
  ShipmentDate = 2
}
export declare enum SortingDirection {
  ASC = 0,
  DESC = 1
}
export declare enum Ownership {
  All = 0 /**  всех пользователей текущей компании */,
  My = 1 /**  только текущего пользователя */,
  Other = 2 /**  всех пользователей текущей компании, кроме текущего пользователя */
}
export interface Sorting {
  Id: SortingId
  Direction: SortingDirection
}
export interface GetSalesRequest {
  SearchString: string | null
  ShipmentStatus: ShipmentStatus
  PaymentStatus: PaymentStatus
  Ownership: Ownership
  Sorting: Sorting
  PageSize: number
  SkipCount: number
}
export interface GetSalesResponse {
  SalesCount: number
  Sales: Sale[]
}
export interface ShipmentStates {
  Phase: string
  State: string
  Desc: string
  ActivityType: ActivityType
  ModifiedDate: string
}
export interface Shipment {
  ShipmentNo: number
  PickingListId: string
  SalesId: string
  Delivery: Delivery
  OrderItemSum: Sum
  OrderItemCount: number
  ShipmentStates: ShipmentStates[]
  CurrentShipmentState: string
}
export interface Warning {
  Type: number
  ActionType: number
  ShortDesc: string
  FullDesc: string
  OrderItemIds: string[]
}
export interface Sale {
  SalesId: string
  ClientInn: string
  CreatedDate: string
  CreatedBy: string
  Comment: string
  ShipmentDate: string
  OrderItemSum: Sum
  OrderItemCount: number
  Currency: string
  ExchRate: number
  WarehouseName: string
  Warnings: Warning[]
  CompanyName: string
  ContractId: string
  DeliveryType: string
  Shipments: Shipment[]
  ShipmentStatus: ShipmentStatus
  PaymentStatus: PaymentStatus
  Editable: boolean
  EditableItems: boolean
  HasInvoice: boolean
  HasDocs: boolean
  HasWarehousePass: boolean
  ContractUniqKey: string
}
