import {Router} from "express";
import userModel from "../models/users.js";
import prodModel from "../models/products.js";

const router = Router();

const allUsers = async (req, res) => {
  const users = userModel.allUsers();
  res.render("pages/users", {users: users});
}

router.route("/").get(allUsers);
router.route("/users").get(allUsers);
router.route("/products").get(async (req, res) => {
  const products = prodModel.allProducts();
  res.render("pages/products", {products: products});
});

export default router;