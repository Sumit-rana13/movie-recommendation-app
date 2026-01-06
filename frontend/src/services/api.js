const API_URL = "https://movie-recommendation-app-pkvi.onrender.com/api/recommend";

export async function fetchRecommendation(preference){
    const res = await fetch(API_URL,{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({preference}),
        
    });

    return res.json();
}