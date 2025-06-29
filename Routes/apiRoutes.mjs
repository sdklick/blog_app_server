import express from "express";
import { articlesController } from "../controllers/articlesController.mjs";
import { categoryController } from "../controllers/categoryController.mjs";
import { singlearticleController } from "../controllers/singlearticleController.mjs";
import { categoryTypeController } from "../controllers/categoryTypeController.mjs";
import { writeBlogController } from "../controllers/writeBlogController.mjs";

export const apirouter = express.Router();

apirouter.get("/articles", articlesController);
apirouter.get("/articles/:id", singlearticleController);
apirouter.get("/category", categoryController);
apirouter.get("/category/:id", categoryTypeController);
apirouter.post("/writeblog", writeBlogController);
