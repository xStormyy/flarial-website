import mongoose, { Schema, Document } from "mongoose";

export interface IPlayer extends Document {
  _id: mongoose.Types.ObjectId;
  player: string;
  playtime: number;
  firstJoined: number;
  lastbeat: number;
  nth: number;
}

const PlayerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  player: String,
  playtime: Number,
  firstJoined: Number,
  lastbeat: Number,
  nth: Number
}, {
  versionKey: false
});

// Only create the model if it doesn't exist already
// This prevents the "Cannot overwrite model once compiled" error in development
export const Player = mongoose.models.Players || mongoose.model<IPlayer>("Players", PlayerSchema, "players");