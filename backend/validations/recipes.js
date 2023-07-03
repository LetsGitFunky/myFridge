// validations/recipes.js

const { check } = require("express-validator");
const handleValidationErrors = require('./handleValidationErrors');


const validateRecipeInput = [
    check('name')
        .exists({checkFalsy: true}),
        handleValidationErrors,

    check('ingredients')
        .exists({checkFalsy: true}),
        handleValidationErrors,

    check('instructions')
        .exists({ checkFalsy: true }),
        handleValidationErrors,
        
    check('step')
        .exists({ checkFalsy: true })
        .isNumeric(),   // auto fill from vs code to ensure step is a number.
        handleValidationErrors,  // since recipes will be coming from chat no custom error messages?

    check('description')
        .exists({ checkFalsy: true }),
        handleValidationErrors, // no max length.

];

module.exports = validateRecipeInput;