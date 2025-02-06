import mongoose, { Schema, Document } from "mongoose";

export interface IServer extends Document {
  _id: mongoose.Types.ObjectId;
  server: string;
  players: string[];
}

const ServerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  server: String,
  players: [String]
}, {
  versionKey: false
});

// Only create the model if it doesn't exist already
// This prevents the "Cannot overwrite model once compiled" error in development
export const Server = mongoose.models.Servers || mongoose.model<IServer>("Servers", ServerSchema, "servers");