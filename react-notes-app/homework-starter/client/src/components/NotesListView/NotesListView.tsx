import { useNotes } from "../../hooks/useNotes";
import { Loader } from "../Loader";
import { NoteView } from "../NoteView/NoteView";

export const NotesListView = () => {
  const { data, isLoading, error } = useNotes();

  if (isLoading) return <Loader />;

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data?.map((note) => (
        <NoteView key={note.id} note={note} />
      ))}
    </div>
  );
};