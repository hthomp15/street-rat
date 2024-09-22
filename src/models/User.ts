import mongoose, { Document, Schema } from 'mongoose';

// Define an interface representing a document in MongoDB
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  oauthId: string;
}

// Create a schema corresponding to the document interface
const UserSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  oauthId: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

// Export the model and ensure it only gets created once
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
