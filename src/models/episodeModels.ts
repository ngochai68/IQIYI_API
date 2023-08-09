// src/models/episodeModels.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IEpisode extends Document {
  title: string;
  img: string;
  video: string;
  upload_date: Date;
  movie_id: string;
}

const episodeSchema: Schema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  video: { type: String, required: true },
  upload_date: { type: Date, default: Date.now },
  movie_id: { type: String, required: true },
});

const Episode = mongoose.model<IEpisode>("Episode", episodeSchema, "Episodes");

export default Episode;
