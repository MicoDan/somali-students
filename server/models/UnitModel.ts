import mongoose, { Schema, Document } from 'mongoose';
import { ITile, tileSchema } from './TileModel.js';



// Define the Unit Schema
const unitSchema = new Schema({
  unitNumber: Number,
  description: String,
  backgroundColor: String,
  textColor: String,
  borderColor: String,
  tiles: [tileSchema],
});

interface IUnit extends Document {
  unitNumber: number;
  description: string;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  tiles: ITile[];
}

export const UnitModel = mongoose.model<IUnit>('Unit', unitSchema);
