import BaseEntity, { IBaseEntity } from '../base/base-entity'

export interface IUserEntity extends IBaseEntity  {
  first_name: string
  last_name: string
  email: string
  password: string
}

export default class UserEntity extends BaseEntity implements IUserEntity {
  id!: string
  first_name!: string
  last_name!: string
  email!: string
  password!: string
}