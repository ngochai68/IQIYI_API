// src/models/actorModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IActor extends Document {
  id: number;
  name: string;
  date_of_birth: string;
  gender: number;
  regions: number;
  profile_picture: string;
}

const actorSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  date_of_birth: { type: String, required: true },
  gender: { type: Number, required: true },
  regions: { type: Number, required: true },
  profile_picture: { type: String, required: true },
});

const Actor = mongoose.model<IActor>('Actor', actorSchema, 'Actors');

export default Actor;
