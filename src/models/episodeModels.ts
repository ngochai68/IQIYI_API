// src/models/episodeModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IEpisode extends Document {
  id: number;
  title: string;
  upload_date: string;
  movie_id: number;
}

const episodeSchema: Schema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  upload_date: { type: String, required: true },
  movie_id: { type: Number, required: true },
});

const Episode = mongoose.model<IEpisode>('Episode', episodeSchema, 'Episodes');

export default Episode;
