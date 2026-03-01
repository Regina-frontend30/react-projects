import { FC } from "react";
import { Note } from "../../api/notes";
import "./NoteView.css";

interface NoteViewProps {
  note: Note;
}

export const NoteView: FC<NoteViewProps> = ({ note }) => {
  return (
    <div className="note-view">
      <div className="note-view__head">
        <p className="note-view__title">{note.title}</p>
      </div>

      <p className="note-view__text">{note.content}</p>
    </div>
  );
};