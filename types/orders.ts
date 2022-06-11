export interface Order {
  id: number
  type: string
  amount: number
  fee: number
  total: number
  registerDate: string
  finalizedDate: string
  clientName: string
  clientTel: string
  file: string
}
