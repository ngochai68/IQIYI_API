// src/models/genreModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IGenre extends Document {
  name: string;
}

const genreSchema: Schema = new Schema({
  name: { type: String, required: true },
});

const Genre = mongoose.model<IGenre>('Genre', genreSchema, 'Genres');

export default Genre;
