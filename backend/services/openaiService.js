const axios = require("axios");

const openai = axios.create({
    baseURL: "https://api.openai.com/v1/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    });

    exports.generateRecipe = async (ingredients) => {
    const prompt = `Given the following ingredients: ${ingredients.join(", ")}, generate a recipe.`;

    const response = await openai.post('/engines/davinci-codex/completions', {
        prompt,
        max_tokens: 200,
    });

    return response.data.choices[0].text;
};


