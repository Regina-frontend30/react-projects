import { useNotes } from "../../hooks/useNotes";
import { NoteView } from "../NoteView/NoteView";
import { Loader } from "../Loader/Loader";
import "./NotesListView.css";

export const NotesListView = () => {
  const { notes, isLoading, error } = useNotes();

  if (isLoading) return <Loader />;

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <ul className="note-list-view">
      {notes.map((note) => (
        <li key={note.id}>
          <NoteView note={note} />
        </li>
      ))}
    </ul>
  );
};
