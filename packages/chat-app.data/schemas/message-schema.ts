import mongoose from 'mongoose'

import { IMessageEntity } from 'chat-app.models/entities/message-entity'

const schema = new mongoose.Schema<IMessageEntity>({
  content: {
    required: true,
    type: String
  },
  author_id: {
    required: true,
    type: String
  },
  author_name: {
    required: true,
    type: String
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Message = mongoose.model<IMessageEntity>('Message', schema)

export default Message
