// src/models/regionModels.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IRegion extends Document {
  name: string;
}

const regionSchema: Schema = new Schema({
  name: { type: String, required: true },
});

const Region = mongoose.model<IRegion>('Region', regionSchema, 'Regions');

export default Region;
