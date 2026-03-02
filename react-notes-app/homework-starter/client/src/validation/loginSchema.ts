import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(5, "Минимум 5 символов"),
  password: z.string().min(8, "Минимум 8 символов"),
});

export type LoginFormData = z.infer<typeof loginSchema>;