export interface IBaseEntity {
  id: string
  created_at: Date
  updated_at: Date
}

export default abstract class BaseEntity implements IBaseEntity {
  id!: string
  created_at!: Date
  updated_at!: Date
}