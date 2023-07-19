import mongoose, { Schema, Document } from 'mongoose';

// Định nghĩa các trường của User Schema
export interface IUsers extends Document {
  username: string;
  email: string;
  password: string;
}

// Tạo User Schema
const Users: Schema<IUsers> = new Schema<IUsers>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Export mô hình User và IUser interface
export default mongoose.model<IUsers>('Users', Users);
