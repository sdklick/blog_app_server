import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String },
  excerpt: { type: String },
  date: { type: Date, default: Date.now },
  category: { type: String },
  image: { type: String },
  tags: { type: [String], default: [] },
});

export const articlesModel = mongoose.model("article", articlesSchema);
