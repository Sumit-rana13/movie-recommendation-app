import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import recommendRoutes from "./routes/recommend.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/recommend", recommendRoutes );

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})