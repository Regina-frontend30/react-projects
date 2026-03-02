import "./LoginForm.css";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { useLogin } from "../../hooks/useLogin";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  LoginFormData,
} from "../../validation/loginSchema";

export const LoginForm = () => {
  const { submit, isLoading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    submit(data);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Email" errorMessage={errors.email?.message}>
        <input {...register("email")} />
      </FormField>
      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input type="password" {...register("password")} />
      </FormField>
      {error && <div className="error">{error}</div>}

      <Button type="submit" isDisabled={isLoading}>
        {isLoading ? "Загрузка..." : "Войти"}
      </Button>
    </form>
  );
};
