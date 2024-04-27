const express = require("express");
const notesCtrl = require("../../controllers/api/notes");
const router = express.Router();

//all routes start with /api/notes

router.get("/", notesCtrl.index);
router.post("/", notesCtrl.create);
router.delete("/:noteId", notesCtrl.delete);

module.exports = router;
