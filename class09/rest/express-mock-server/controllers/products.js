import model from "../models/products.js";
import {Response} from "./util.js";

export async function allProducts(req, res) {
  res.json(Response.ok(model.allProducts()));
}

export async function addProduct(req, res) {
  const prod = model.addProduct(req.body);
  if (prod) {
    res.json(Response.ok(prod));
  } else {
    res.status(505);
    res.json(Response.error(505, "Erreur d'ajout de produit"));
  }
}

export async function findProduct(req, res) {
  let prod = model.find(req.params.prodId);
  if (prod === undefined) {
    res.status(404);
    res.json(Response.error(404, "Produit pas trouvé."));
  } else {
    res.json(Response.ok(prod));
  }
}

export async function updateProduct(req, res) {
  const prod = req.body;
  const prodId = req.params.prodId;
  const updated = model.update(prodId, prod);
  if (updated) {
    res.json(Response.ok(updated));
  } else {
    res.json(Response.error(404, "Produit pas trouvé."));
  }
}

export async function deleteProduct(req, res) {
  const prodId = req.params.prodId;
  const deleted = model.delete(prodId);
  if (deleted) {
    res.json(Response.ok(deleted));
  } else {
    res.json(Response.error(404, "Produit pas trouvé."));
  }
}
