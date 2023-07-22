// src/models/userModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  id: number;
  user_name: string;
  email: string;
  password: string;
  date_of_birth: string;
  gender: number;
  phone_number: string;
  user_type: number;
  movie_ids: number[];
}

const userSchema: Schema = new Schema({
  id: { type: Number, required: true },
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date_of_birth: { type: String, required: true },
  gender: { type: Number, required: true },
  phone_number: { type: String, required: true },
  user_type: { type: Number, required: true },
  movie_ids: { type: [Number], required: true, default: [] },
});

const User = mongoose.model<IUser>('User', userSchema, 'Users');

export default User;
