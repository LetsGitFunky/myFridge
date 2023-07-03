const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        hashedPassword: {
            type: String,
            required: true,
        }, //fridge is an array of ObjectIds, each of which references an Ingredient
        fridge: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredients',
        }],//savedRecipes is an array of ObjectIds, each of which references a Recipe
        savedRecipes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipe',
        }]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
