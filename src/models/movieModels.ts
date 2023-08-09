// src/models/movieModels.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IMovie extends Document {
  _id: string;
  title: string;
  year_of_release: number;
  views: number;
  genre_ids: string[];
  region_id: string;
  directors: string[];
  actors: string[];
  rating: number;
  number_reviews: number;
  producer: string;
  score: number;
  total_episodes: number;
  movie_format: number;
  img1: string;
  img2: string;
  description: string;
}

const movieSchema: Schema = new Schema({
  title: { type: String, required: true },
  year_of_release: { type: Number, required: true },
  views: { type: Number, default: 0 },
  genre_ids: [{ type: String }],
  region_id: { type: String, required: true },
  directors: [{ type: String }],
  actors: [{ type: String }],
  rating: { type: Number, default: 0 },
  number_reviews: { type: Number, default: 0 },
  producer: { type: String },
  score: { type: Number, default: 0 },
  total_episodes: { type: Number },
  movie_format: { type: Number },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  description: { type: String },
});

const Movie = mongoose.model<IMovie>("Movie", movieSchema, "Movies");

export default Movie;
