import { articlesModel } from "../model/articlesModel.mjs";

export const writeBlogController = async (req, res) => {
  try {
    const data = req.body;

    // Required fields (excluding 'date')
    const requiredFields = [
      "id",
      "username",
      "title",
      "excerpt",
      "category",
      "tags",
    ];

    for (const field of requiredFields) {
      if (!data[field] || data[field].toString().trim() === "") {
        return res.status(400).json({ message: `${field} is required` });
      }
    }

    // Custom image using first character of ID
    const imageid = data.id.split(' ')[0];
    const image = `https://placehold.co/400x250/FFF3E0/FB8C00?text=${imageid}`;

    // Create article with image
    const newArticle = new articlesModel({
      ...data,
      image, // assign generated image
    });

    await newArticle.save();

    res.status(201).json({
      message: "Article created successfully",
      article: newArticle,
    });
  } catch (error) {
    console.error("Error creating article:", error);
    if (error.code === 11000) {
      res.status(409).json({
        message: "Duplicate ID: Article with this ID already exists",
      });
    } else {
      res
        .status(500)
        .json({ message: "Server error while creating article" });
    }
  }
};
