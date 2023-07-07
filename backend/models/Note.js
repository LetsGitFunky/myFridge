
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);