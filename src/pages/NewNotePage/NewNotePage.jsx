import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NewNotePage({ user }) {
  const [noteText, setNoteText] = useState("");
  let navigate = useNavigate();
  const addNote = async (evt) => {
    try {
      evt.preventDefault();
      await axios.post("/api/notes", { text: noteText, user: user._id });
      setNoteText("");
      navigate("/notes");
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <div className="flex flex-col text-xl items-center gap-4">
      <h1>Add Note</h1>
      <form
        className="flex gap-3 p-4 rounded-md bg-slate-800/80 backdrop:blur-md flex-col items-center"
        action=""
        onSubmit={addNote}
      >
        <textarea
          required
          className="bg-black p-5 focus:outline-none rounded-md text-gray-400"
          placeholder="Enter Note Here..."
          value={noteText}
          onChange={(evt) => setNoteText(evt.target.value)}
          rows="4" // You can adjust the number of rows as needed
          cols="50" // You can adjust the number of columns as needed
        />
        <button className="transition ease-in-out delay-100 bg-black/50 text-gray-200 p-5 rounded-lg hover:text-white hover:bg-black/80">
          Add Note
        </button>
      </form>
    </div>
  );
}
