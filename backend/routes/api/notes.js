const express = require("express");
const router = express.Router();
// const { default: mongoose } = require("mongoose");
const Note = require("../../models/Note");
const { requireUser } = require("../../config/passport");

// GET  /api/notes/
router.get("/", requireUser, async (req, res, next) => {
    try {
        // res.json({ message: "GET /api/notes" });
        const { userId, recipeId } = req.body;
        const note = await Note.findOne({ user: userId, recipe: recipeId });
        return res.json(note); // be mindful of the res.json here
    } catch (err) {
        next(err);
    }
});

// POST  /api/notes/
router.post("/", requireUser, async (req, res, next) => {
    try {
        const { userId, recipeId, body } = req.body;
        const newNote = new Note({
            user: userId,
            recipe: recipeId,
            body: body,
        });

        let savedNote = await newNote.save();
        return res.json(savedNote);
    } catch (err) {
        next(err);
    }
});

// DELETE    /api/notes/
router.delete("/", requireUser, async (req, res, next) => {
    try {
        const noteId = req.body.noteId;
        await Note.findByIdAndDelete(noteId);
        // TODO: this is not the full return we want
        // res.json({ message: "Recipe deleted successfully!" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
