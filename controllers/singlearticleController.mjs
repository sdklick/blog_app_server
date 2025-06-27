import { articlesModel } from "../model/articlesModel.mjs";
export const singlearticleController = async (req, res) => {
  try {
    const { id } = req.params;
    const singleArticle = await articlesModel.find({ id });
    res.status(200).json(...singleArticle);
  } catch (error) {
    console.error("Error fetching Category:", error);
    res.status(500).json({ message: "Server error while fetching Category" });
  }
};
