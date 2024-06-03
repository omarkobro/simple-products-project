import { Router } from "express";

import * as productController from './product.controller.js'

let router = Router()
// =================== addProduct ===========================
router.post("/addProduct", productController.addUProduct)

// =================== get all products ===========================
router.get("/getAllProducts", productController.getAllProducts)

// =================== delete product ===========================
router.delete("/deleteProduct", productController.deleteProduct)
// =================== update product ===========================
router.put("/updateProduct", productController.updateProduct)

// =================== get all products ===========================
router.get("/searchByPrice", productController.searchByPrice)


export default router