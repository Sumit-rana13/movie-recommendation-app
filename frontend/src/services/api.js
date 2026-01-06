export async function fetchRecommendation(preference){
    const res = await fetch("http://localhost:5000/api/recommend",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({preference}),
        
    });

    return res.json();
}