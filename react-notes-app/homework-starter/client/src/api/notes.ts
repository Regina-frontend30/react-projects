export interface Note {
  id: string;
  title: string;
  content: string;
}

export async function getNotes(): Promise<Note[]> {
  const response = await fetch("/api/notes", {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Ошибка получения заметок");
  }

  const data = await response.json();

  return data.list; 
}