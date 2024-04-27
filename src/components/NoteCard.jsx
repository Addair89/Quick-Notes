const NoteCard = ({ note, handleDelete }) => {
  const dbTimestamp = note.createdAt; // ISO 8601 format
  const dateObject = new Date(dbTimestamp);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  console.log(dateObject.toLocaleString("en-US", options));
  // Output: "April 26, 2024, 8:52:52 PM" (format may vary based on the environment)
  return (
    <div className="max-w-[500px] relative p-4 m-4 bg-slate-900 text-lg text-gray-300 rounded-md ">
      <div className="p-2 underline-offset-8 underline">{note.text}</div>
      <div>{dateObject.toLocaleString("en-US", options)}</div>
      <span
        onClick={() => handleDelete(note._id)}
        className="absolute top-2 right-2 text-gray-600 hover:text-white hover:scale-105 hover:cursor-pointer transition duration-150 ease-in-out "
      >
        <i className="fa-regular fa-rectangle-xmark"></i>
      </span>
    </div>
  );
};

export default NoteCard;
