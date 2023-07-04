
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
    recipe: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe',
            required: true
        }
    ],
    note: {
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('SavedRecipe', savedRecipeSchema);