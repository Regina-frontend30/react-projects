import { Note } from "../../api/notes";
import "./NoteView.css";

interface NoteViewProps {
  note: Note;
}

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString();
};

export const NoteView = ({ note }: NoteViewProps) => {
  return (
    <div className="note-view">
      <div className="note-view__head">
        <p className="note-view__datetime">{formatDate(note.createdAt)}</p>
        <p className="note-view__title">{note.title}</p>
      </div>

      <p className="note-view__text">{note.text}</p>
    </div>
  );
};
