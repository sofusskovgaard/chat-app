import RoomEntity from 'chat-app.models/entities/room-entity'
import Room from 'chat-app.data/schemas/room-schema'

import BaseEntityService, { IBaseEntityService, Update } from 'chat-app.data/base/base-entity-service'

export interface IRoomsService extends IBaseEntityService<RoomEntity> {
  archive(id: string): Promise<void>
}

export default class RoomsService extends BaseEntityService<RoomEntity> implements IRoomsService {
  async getAll(): Promise<RoomEntity[]> {
    return await Room.find()
  }
  
  async getById(id: string): Promise<RoomEntity | null> {
    return await Room.findById(id)
  }
  
  async create(data: Omit<RoomEntity, 'id' | 'created_at' | 'updated_at' | 'archived'>): Promise<RoomEntity> {
    return await Room.create({
      ...data
    })
  }
  
  async update(entity: Update<RoomEntity>): Promise<void> {
    const { id, ...data } = entity
    await Room.updateOne({ id }, data)
  }
  
  async archive(id: string): Promise<void> {
    await Room.updateOne({ id }, { archived: true })
  }
}
