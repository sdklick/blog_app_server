import { articlesModel } from "../model/articlesModel.mjs";
export const categoryController = async (req, res) => {
  try {
    const category = await articlesModel.aggregate([
      { $group: { _id: "$category", totalPosts: { $sum: 1 } } },
      { $project: { _id: 0, category: "$_id", totalPosts: 1 } },
    ]);
    res.status(200).json({ category });
  } catch (error) {
    console.error("Error fetching Category:", error);
    res.status(500).json({ message: "Server error while fetching Category" });
  }
};
