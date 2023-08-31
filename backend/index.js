import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import ProductRoutes from "./routes/ProductRoutes.js"

dotenv.config();

const app = express();
const port =5003

app.use(cors());
app.use(express.json());
app.use(ProductRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
