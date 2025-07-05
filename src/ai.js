import { GoogleGenerativeAI } from "@google/generative-ai"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient. Format your response in markdown.
`

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);



export async function getRecipeFromGoogle(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ")
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" })

  try {
    const result = await model.generateContent(
      `${SYSTEM_PROMPT}\n\nI have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
    )
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error("Google PaLM API error:", error)
    return "Sorry, something went wrong generating the recipe."
  }
}
