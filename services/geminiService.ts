
import { GoogleGenAI } from "@google/genai";
import { Candidate } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. Using a mock response.");
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const getChatResponse = async (prompt: string, candidates: Candidate[]): Promise<string> => {
    if (!ai) {
        // Mock response for development if API key is not available
        return new Promise(resolve => setTimeout(() => {
            resolve(`This is a mock response. If you asked for the top candidates, they are probably Elena and Ben. If you asked about skills, React and Python are good ones to have. Your original prompt was: "${prompt}"`);
        }, 1000));
    }

    const candidateContext = candidates.map(c => ({
        id: c.id,
        name: c.name,
        overallScore: c.overallScore,
        skills: c.skills.map(s => s.name),
        location: c.location,
        remoteReady: c.remoteReady,
    }));

    const systemInstruction = `You are HireSense AI, a helpful and concise recruitment assistant. 
    Your role is to answer questions about a list of candidates based ONLY on the provided data. 
    Do not invent information. 
    Keep your answers brief and to the point.
    Format your responses using simple markdown like bolding for names or skills.
    Here is the candidate data: ${JSON.stringify(candidateContext)}`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
            }
        });

        return response.text;
    } catch (error) {
        console.error("Gemini API call failed:", error);
        return "There was an error processing your request. Please check the API configuration and try again.";
    }
};
