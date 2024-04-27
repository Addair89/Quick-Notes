import { useState, useEffect } from "react";
import NoteCard from "../../components/NoteCard";
import axios from "axios";

export default function NoteHistoryPage({ user }) {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`/api/notes/?userId=${user._id}`);
        console.log(response.data);
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
        setError("An error occurred while fetching notes.");
      }
    };

    fetchNotes();
  }, [user]);

  const handleDelete = async (noteId) => {
    console.log("handle deltete is running", noteId);
    try {
      await axios.delete(`api/notes/${noteId}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
      console.log("Note Deleted Succesfully");
    } catch (error) {
      console.error("Error Deleting Note: ", error);
    }
  };

  const handleAscOrder = () => {
    const sortedNotesAsc = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    setNotes(sortedNotesAsc);
  };

  const handleDscOrder = () => {
    const sortedNotesDsc = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setNotes(sortedNotesDsc);
  };

  return (
    <>
      <h1 className="text-3xl">Note History</h1>
      {notes.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        <div>
          <button
            className="p-5 rounded-full bg-slate-900 text-white m-5"
            onClick={handleAscOrder}
          >
            ASC Order
          </button>
          <button
            className="p-5 rounded-full bg-slate-900 text-white m-5"
            onClick={handleDscOrder}
          >
            DSC Order
          </button>
          <div className=" m-auto grid grid-cols-3 w-[70vw] justify-center items-center">
            {notes.map((note) => (
              <NoteCard
                note={note}
                key={note._id}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
