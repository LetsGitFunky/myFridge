const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const SavedRecipe = require("../../models/SavedRecipe"); // fixed file path
const User = mongoose.model("User");
const { requireUser } = require("../../config/passport");
const validateSavedRecipeInput = require("../../validations/savedRecipes");
const validateRecipeInput = require("../../validations/recipes");

/* GET savedRecipes listing. */
router.get("/", requireUser, async (req, res) => {
    try {
        const savedRecipes = await SavedRecipe.find({ user: req.user._id }); // finding all recipes for logged-in user
        // Convert array to object
        const savedRecipesObject = savedRecipes.reduce((obj, recipe) => {
            obj[recipe._id] = { ...recipe.recipe, _id: recipe._id }; // Copy all properties of recipe and add _id as a property
            return obj;
        }, {});

        return res.json(savedRecipesObject);
    } catch (err) {
        return res.json([]);
    }
});

//* Get savedRecipe by savedRecipeId *//
router.get("/:savedRecipeId", requireUser, async (req, res, next) => {
    try {
        const savedRecipe = await savedRecipe
            .find(req.params.id)
            .populate("name", "recipes");
        return res.json(savedRecipe);
    } catch (err) {
        const error = new Error("Recipe not found");
        error.statusCode = 404;
        error.errors = { message: "No Recipe found with that id" };
        return next(error);
    }
});

router.post("/", requireUser, validateRecipeInput, async (req, res, next) => {
    try {
        const newSavedRecipe = new SavedRecipe({
            user: req.user._id,
            recipe: req.body,
        });

        let savedRecipe = await newSavedRecipe.save();
        // savedRecipe = await savedRecipe.populate("name");
        console.log(savedRecipe);
        return res.json(savedRecipe);
    } catch (err) {
        next(err);
    }
});

router.delete("/", requireUser, async (req, res, next) => {
    try {
        const savedRecipeId = req.body.savedRecipeId;
        await SavedRecipe.findByIdAndDelete(savedRecipeId);
        res.json({ message: "Recipe deleted successfully!" });
    } catch (err) {
        next(err);
    }
});


module.exports = router;
