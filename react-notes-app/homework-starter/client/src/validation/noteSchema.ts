import { z } from "zod";

export const noteSchema = z.object({
  title: z
    .string()
    .min(5, "Минимум 5 символов"),
  text: z
    .string()
    .min(10, "Минимум 10 символов")
    .max(300, "Максимум 300 символов"),
});

export type NoteFormData = z.infer<typeof noteSchema>;