const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: "AIzaSyCh17lI04P5XBS-HIVBLsQirG-OjlSlS8g" });

async function main(msg){
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: msg
  });
  return response.text;

}
module.exports = main;

