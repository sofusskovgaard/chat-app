import UserEntity from 'chat-app.models/entities/user-entity'
import User from 'chat-app.data/schemas/user-schema'

import BaseEntityService, { IBaseEntityService, Update } from 'chat-app.data/base/base-entity-service'

export interface IUsersService extends IBaseEntityService<UserEntity> {
  getByEmail(email: string): Promise<UserEntity | null>
}

export default class UsersService extends BaseEntityService<UserEntity> implements IUsersService {
  async getAll(): Promise<UserEntity[]> {
    return await User.find()
  }

  async getById(id: string): Promise<UserEntity | null> {
    return await User.findById(id)
  }

  async getByEmail(email: string): Promise<UserEntity | null> {
    return await User.findOne({ email })
  }

  async create(data: Omit<UserEntity, 'id' | 'created_at' | 'updated_at'>): Promise<UserEntity> {
    return await User.create({
      ...data
    })
  }

  async update(entity: Update<UserEntity>): Promise<void> {
    const { id, ...data } = entity
    await User.updateOne({ id }, data)
  }
}
