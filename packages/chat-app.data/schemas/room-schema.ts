import mongoose from 'mongoose'

import { IRoomEntity } from 'chat-app.models/entities/room-entity'

const schema = new mongoose.Schema<IRoomEntity>({
  name: {
    required: true,
    type: String
  },
  description: String,
  cover_image: String,
  archived: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const Room = mongoose.model<IRoomEntity>('Room', schema)

export default Room
