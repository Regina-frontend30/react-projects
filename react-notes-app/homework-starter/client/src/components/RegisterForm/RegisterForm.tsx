import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { useRegister } from "../../hooks/useRegister";
import { registerSchema, RegisterFormData } from "../../validation/registerSchema";
import "./RegisterForm.css";

export const RegisterForm = () => {
  const { submit, isLoading, error } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await submit(data);
      reset();
    } catch {
      reset();
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Имя" errorMessage={errors.username?.message}>
        <input {...register("username")} />
      </FormField>

      <FormField label="Email" errorMessage={errors.email?.message}>
        <input {...register("email")} />
      </FormField>

      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input type="password" {...register("password")} />
      </FormField>

      {error && <div className="error">{error}</div>}

      <Button type="submit" isLoading={isLoading}>
        Зарегистрироваться
      </Button>
    </form>
  );
};