
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedRecipeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    recipes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe',
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model('SavedRecipe', savedRecipeSchema);