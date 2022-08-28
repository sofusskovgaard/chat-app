import mongoose from 'mongoose'

import { IUserEntity } from 'chat-app.models/entities/user-entity'

const schema = new mongoose.Schema<IUserEntity>({
  first_name: {
    required: true,
    type: String
  },
  last_name: {
    required: true,
    type: String
  },
  email: {
    unique: true,
    required: true,
    type: String
  },
  password: String,
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

const User = mongoose.model<IUserEntity>('User', schema)

export default User
