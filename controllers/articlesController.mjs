import { articlesModel } from "../model/articlesModel.mjs";
export const articlesController = async (req, res) => {
  try {
    const articles = await articlesModel.find({});
    res.status(200).json({articles});
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ message: "Server error while fetching articles" });
  }
};
