// src/models/genreModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IGenre extends Document {
  id: number;
  name: string;
}

const genreSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});

const Genre = mongoose.model<IGenre>('Genre', genreSchema, 'Genres');

export default Genre;
