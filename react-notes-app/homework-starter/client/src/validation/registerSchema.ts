import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(5, "Имя пользователя должно содержать минимум 5 символов"),

  email: z
    .string()
    .email("Введите корректный email"),

  password: z
    .string()
    .min(8, "Пароль должен содержать минимум 8 символов"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;