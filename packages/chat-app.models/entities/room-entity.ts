import BaseEntity, { IBaseEntity } from '../base/base-entity'

export interface IRoomEntity extends IBaseEntity {
  name: string
  description?: string
  cover_image?: string
  archived: boolean
}

export default class RoomEntity extends BaseEntity implements IRoomEntity {
  id!: string
  name!: string
  description?: string
  cover_image?: string
  archived!: boolean
}