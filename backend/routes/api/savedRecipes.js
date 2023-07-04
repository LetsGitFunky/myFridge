const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const SavedRecipe = mongoose.model('SavedRecipe');
const User = mongoose.model('User');
const { requireUser } = require('../../config/passport');
const validateSavedRecipeInput = require('../../validations/savedRecipes');


/* GET savedRecipes listing. */
router.get('/api/savedRecipes/:userId', requireUser, async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const savedRecipes = await SavedRecipe.find(user.id)
            .populate("name")  // when getting all saved recipes all we want is the name of recipe to show... When clicked on will go to savedRecipe show wich will include the entire recipe object. 
        return res.json(savedRecipes);
    }
    catch(err) {
        return res.json([]);
    }
});

//* Get savedRecipe by savedRecipeId *//
router.get('/api/savedRecipes/:userId/:savedRecipeId', requireUser, async (req, res, next) => {
    try {
        const savedRecipe = await SavedRecipe.find(req.params.id)
            .populate("name", "recipes");
        return res.json(savedRecipe);
    }
    catch(err) {
        const error = new Error('Recipe not found');
        error.statusCode = 404;
        error.errors = { message: "No Recipe found with that id" };
        return next(error);
    }
});

router.post('/api/savedRecipes', requireUser, validateSavedRecipeInput, async (req, res, next) => {

    try {
        const newSavedRecipe = new SavedRecipe({
            user: req.params.userId,
            name: req.recipe.name,
            recipe: req.recipe
        });

        let savedRecipe = await newSavedRecipe.save();
        savedRecipe = await savedRecipe.populate('name');
        return res.json(savedRecipe);
    }
    catch(err) {
        next(err);
    }
});

router.delete('/api/savedRecipes/:savedRecipeId', requireUser, async (req, res, next) => {
    try {
        const savedRecipe = await SavedRecipe.findById(req.params.savedRecipeId)
        await savedRecipe.delete();
    } catch(err) {
        next(err)
    }
});

module.exports = router;