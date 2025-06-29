import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
  tags: { type: [String], required: true, default: [] },
});

export const articlesModel = mongoose.model("article", articlesSchema);
