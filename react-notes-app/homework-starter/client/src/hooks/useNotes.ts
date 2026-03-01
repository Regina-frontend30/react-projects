import { useQuery } from "@tanstack/react-query";
import { getNotes, Note } from "../api/notes";

export interface UseNotesResult {
  data: Note[] | undefined;
  isLoading: boolean;
  error: string | null;
}

export function useNotes(): UseNotesResult {
  const { data, isLoading, error } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  return {
    data,
    isLoading,
    error: error instanceof Error ? error.message : null,
  };
}