import mongoose, { Schema, Document } from "mongoose";

export interface IVIP extends Document {
  Dev: string[];
  Booster: string[];
  Gamer: string[];
  Supporter: string[];
}

const VIPSchema = new Schema({
  Dev: [String],
  Booster: [String],
  Gamer: [String],
  Supporter: [String]
}, {
  versionKey: false
});

// Only create the model if it doesn't exist already
export const VIP = mongoose.models.VIPs || mongoose.model<IVIP>("VIPs", VIPSchema, "vips");

// Helper function to ensure VIP document exists
export async function ensureVIPDocument() {
  const vipDoc = await VIP.findOne();
  if (!vipDoc) {
    await VIP.create({
      Dev: [],
      Booster: [],
      Gamer: [],
      Supporter: []
    });
  }
  return VIP.findOne();
}