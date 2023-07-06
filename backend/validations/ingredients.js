// validations/ingredients.js

const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');


const validateIngredient = [
    check('name')
        .exists({checkFalsy: true}),
        handleValidationErrors

];

module.exports = validateIngredient;