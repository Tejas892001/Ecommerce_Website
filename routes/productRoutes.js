import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhototController,
  updateProductController,
  productFiltersController,
  productListController,
  productCountController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController
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
router.delete("/delete-product/:pid", requireSignIn, isAdmin, deleteProductController);

// filter product
router.post("/product-filters",productFiltersController);

// product count
router.get("/product-count",productCountController);


// pagination
router.get("/product-list/:page",productListController);

// search product
router.get("/search/:keyword",searchProductController);

// similar product
router.get("/related-product/:pid/:cid",relatedProductController);

// category wise product
router.get("/product-category/:slug",productCategoryController);



// payment routes
// token
router.get("/braintree/token",braintreeTokenController)

// payments
router.post("/braintree/payment",requireSignIn,braintreePaymentController);
export default router;



