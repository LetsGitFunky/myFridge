
const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');


const validateSavedRecipeInput = [
    check('name')
        .exists({checkFalsy: true})
        .notEmpty(),
        handleValidationErrors,

    check('recipes')
        .exists({checkFalsy: true})
        .isArray({min: 1}),
        handleValidationErrors,
];

module.exports = validateSavedRecipeInput;