
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
            type: Object,
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

const SavedRecipe = mongoose.model('SavedRecipe', savedRecipeSchema);

module.exports = SavedRecipe;