export interface Note {
  id: string;
  title: string;
  text: string;
  userId: string;
  createdAt: number;
}

export interface NotesResponse {
  list: Note[];
  pageCount: number;
}

export async function getNotes(): Promise<NotesResponse> {
  const response = await fetch("/api/notes", {
  });

  if (!response.ok) {
    throw new Error("Ошибка загрузки заметок");
  }

  return response.json();
}

export interface CreateNoteRequest {
  title: string;
  text: string;
}

export async function createNote(
  data: CreateNoteRequest
): Promise<void> {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Ошибка создания заметки");
  }

}
