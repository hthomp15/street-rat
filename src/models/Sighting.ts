import mongoose, { Document, Schema } from 'mongoose';

export interface ISighting extends Document {
  userId: string;
  location: {
    lat: number;
    long: number;
  };
  number: number;
  timestamp: Date;
}

const SightingSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  location: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
  number: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Sighting || mongoose.model<ISighting>('Sighting', SightingSchema);
