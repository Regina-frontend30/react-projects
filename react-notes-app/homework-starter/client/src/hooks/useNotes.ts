import { useEffect, useState } from "react";
import { getNotes, Note } from "../api/notes";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    getNotes()
      .then((data) => {
        setNotes(data.list);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e.message);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { notes, isLoading, error };
}