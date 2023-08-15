import express from "express";
import {
  getProductById,
  getProducts,
} from "../Controller/ProductController.js";
import { userSignUp, userLogIn } from "../Controller/UserController.js";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogIn);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
