export interface MasterData {
  id: number
  value: string
  name: string
  type: string
  sequence: number
  description?: string
  isDefault: boolean
  status: string
  nameEn?: string
  nameKh?: string
}

export type MasterDataQuery = {
  type: string
}