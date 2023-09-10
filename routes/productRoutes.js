import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhototController,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();
// create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
// get all products
router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getSingleProductController);

//route to get photo
router.get("/product-photo/:pid", productPhototController);

// delete product
router.delete("/product/:pid", requireSignIn, isAdmin, deleteProductController);
export default router;
