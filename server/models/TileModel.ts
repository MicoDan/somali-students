import mongoose, { Schema, Document } from 'mongoose';

export type TileType = "star" | "dumbbell" | "book" | "trophy" | "fast-forward" | "treasure";

// Define the Tile Schema
export const tileSchema = new Schema({
  type: String,
  description: String,
});

export interface ITile extends Document {
  type: TileType;
  description: string;
}

export const TileModel = mongoose.model<ITile>('Tile', tileSchema);