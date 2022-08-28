import BaseEntity, { IBaseEntity } from "chat-app.models/base/base-entity";
import UserEntity from "chat-app.models/entities/user-entity";

export type Update<T extends BaseEntity> = {
  [Property in keyof Omit<T, "created_at" | "updated_at">]: Omit<T, "created_at" | "updated_at">[Property]
}

export interface IBaseEntityService<T extends IBaseEntity> {
  getAll(): Promise<T[]>
  getById(id: string): Promise<T | null>
  create(data: Omit<T, "id" | "created_at" | "updated_at">): Promise<T>
  update(data: Update<T>): Promise<void>
}

export default abstract class BaseEntityService<T extends BaseEntity> implements IBaseEntityService<T> {
  abstract getAll(): Promise<T[]>
  abstract getById(id: string): Promise<T | null>
  abstract create(data: Omit<T, "id" | "created_at" | "updated_at">): Promise<T>
  abstract update(data: Update<T>): Promise<void>
}