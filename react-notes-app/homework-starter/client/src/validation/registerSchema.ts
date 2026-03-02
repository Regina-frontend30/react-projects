import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Введите корректный email"),
  username: z.string().min(5, "Минимум 5 символов"),
  password: z.string().min(8, "Минимум 8 символов"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;