import BaseEntity, { IBaseEntity } from '../base/base-entity'

export interface IMessageEntity extends IBaseEntity {
  content: string
  room_id: string
  author_id: string
  author_name: string
}

export default class MessageEntity extends BaseEntity implements IMessageEntity {
  content!: string
  room_id!: string
  author_id!: string
  author_name!: string
}