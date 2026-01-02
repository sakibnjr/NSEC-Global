import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

/**
 * Call the Gemini API to generate content using the official SDK.
 * @param {string} prompt - The user prompt.
 * @param {string} systemPrompt - The system instruction.
 * @returns {Promise<string>} - The generated text.
 */
export const callGemini = async (prompt, systemPrompt = "") => {
    // Demo Mode Fallback
    if (!apiKey || apiKey === "YOUR_API_KEY_HERE") {
        console.warn("Gemini API Key missing. Using Demo Mode.");
        await new Promise(res => setTimeout(res, 1000));
        return "Right now I am dealing with too many requests. Try again later.";
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);

        // valid models: gemini-1.5-pro, gemini-1.5-flash, gemini-1.0-pro
        // using 1.5-flash for speed and cost efficiency
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: systemPrompt
        });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();

    } catch (error) {
        console.error("Gemini SDK Error:", error);
        // Return a user-friendly message or throw depending on usage
        // For now, throwing allows the caller to handle specific UI states
        throw new Error(error.message || "Failed to generate content");
    }
};
