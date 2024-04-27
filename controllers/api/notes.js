const Note = require("../../models/note");

const index = async (req, res) => {
  try {
    const userId = req.query.userId;
    const notes = await Note.find({ user: userId }); // Await the resolution of the promise
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { text, user } = req.body;
    const newNote = await Note.create({ text, user });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteOne = async (req, res) => {
  const noteId = req.params.noteId;
  try {
    await Note.deleteOne({ _id: noteId });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  index,
  create,
  delete: deleteOne,
};
