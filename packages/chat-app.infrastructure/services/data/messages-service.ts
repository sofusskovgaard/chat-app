import MessageEntity from 'chat-app.models/entities/message-entity'
import Message from 'chat-app.data/schemas/message-schema'

import BaseEntityService, { IBaseEntityService, Update } from 'chat-app.data/base/base-entity-service'

export interface IMessagesService extends IBaseEntityService<MessageEntity> {
  getByRoomId(room_id: string): Promise<MessageEntity[]>
  getByAuthorId(author_id: string): Promise<MessageEntity[]>
  getByRoomForAuthorId(room_id: string, author_id: string): Promise<MessageEntity[]>
}

export default class MessagesService extends BaseEntityService<MessageEntity> implements IMessagesService {
  async getAll(): Promise<MessageEntity[]> {
    return await Message.find()
  }

  async getById(id: string): Promise<MessageEntity | null> {
    return await Message.findById(id)
  }

  async create(data: Omit<MessageEntity, 'id' | 'created_at' | 'updated_at'>): Promise<MessageEntity> {
    return await Message.create({
      ...data
    })
  }

  async update(entity: Update<MessageEntity>): Promise<void> {
    const { id, ...data } = entity
    await Message.updateOne({ id }, data)
  }

  async getByRoomId(room_id: string): Promise<MessageEntity[]> {
    return await Message.find({ room_id })
  }

  async getByAuthorId(author_id: string): Promise<MessageEntity[]> {
    return await Message.find({ author_id })
  }

  async getByRoomForAuthorId(room_id: string, author_id: string): Promise<MessageEntity[]> {
    return await Message.find({ room_id, author_id })
  }
}
