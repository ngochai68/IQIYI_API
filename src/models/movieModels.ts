// src/models/movieModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IMovie extends Document {
  id: number;
  title: string;
  genre_ids: number[];
  region_ids: number[];
  year_of_release: number;
  upload_date: string;
  episodes: number[];
  views: number;
  director_ids: number[];
  actor_ids: number[];
  rating: number;
  numberReviews: number;
  producer: string;
  img1: string;
  img2: string;
  score: number;
  total_episodes: number;
  movie_format: number;
  description: string;
}

const movieSchema: Schema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  genre_ids: { type: [Number], required: true },
  region_ids: { type: [Number], required: true },
  year_of_release: { type: Number, required: true },
  upload_date: { type: String, required: true },
  episodes: { type: [Number], required: true },
  views: { type: Number, required: true },
  director_ids: { type: [Number], required: true },
  actor_ids: { type: [Number], required: true },
  rating: { type: Number, required: true },
  numberReviews: { type: Number, required: true },
  producer: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  score: { type: Number, required: true },
  total_episodes: { type: Number, required: true },
  movie_format: { type: Number, required: true },
  description: { type: String, required: true },
});

const Movie = mongoose.model<IMovie>('Movie', movieSchema, 'Movies');

export default Movie;
