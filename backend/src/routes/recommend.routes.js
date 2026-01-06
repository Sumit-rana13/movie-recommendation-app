import express from "express";
import db from "../db/database.js";
import {getRecommendations} from "../services/openai.service.js";

const router = express.Router();

 router.post("/", async(req, res)=>{
    try {
        const {preference} = req.body;
        console.log(preference);
        
        if(!preference){
            return res.status(400).json({error: "Preference is required"});
        }

        const movies = await getRecommendations(preference);

        // Store in database
        db.prepare(
            `INSERT INTO recommendations (user_input, recommended_movies) VALUES (?, ?)`
        ).run(preference, JSON.stringify(movies));

        res.json({movies});

    } catch (error) {
        res.status(500).json({message : "AI recommendation failed", error: error.message});
    }

    
})

export default router;