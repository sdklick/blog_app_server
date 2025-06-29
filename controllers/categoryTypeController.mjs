import { articlesModel } from "../model/articlesModel.mjs";
export const categoryTypeController = async (req, res) => {
  try {
    const { id } = req.params;
    const typeArticle = await articlesModel.find({ category:id });
    res.status(200).json(typeArticle);
  } catch (error) {
    console.error("Error fetching Category:", error);
    res.status(500).json({ message: "Server error while fetching Category" });
  }
};