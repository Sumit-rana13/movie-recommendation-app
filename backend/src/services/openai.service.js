import OpenAI from "openai";



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function getRecommendations(preference) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a movie recommendation expert."
      },
      {
        role: "user",
        content: `Recommend 3 to 5 movies for: ${preference}. 
        Return only movie names as a list.`
      }
    ],
  });

  return response.choices[0].message.content;
}