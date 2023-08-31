import express from "express";
import {getProduct,getProductId,createProduct,updateProduct,deleteProduct} from "../controller/ProductController.js"


const router=express.Router();

router.get('/products',getProduct);
router.get('/products/:id',getProductId);
router.post('/products',createProduct);
router.patch('/products/:id',updateProduct);
router.delete('/products/:id',deleteProduct);

export default router;
