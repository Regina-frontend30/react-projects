import "./RegisterForm.css";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { useRegister } from "../../hooks/useRegister";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterFormData,
} from "../../validation/registerSchema";

export const RegisterForm = () => {
  const { submit, isLoading, error } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    submit(data);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Email" errorMessage={errors.email?.message}>
        <input {...register("email")} />
      </FormField>
      <FormField
        label="Имя пользователя"
        errorMessage={errors.username?.message}
      >
        <input {...register("username")} />
      </FormField>
      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input type="password" {...register("password")} />
      </FormField>
      {error && <div className="error">{error}</div>}

      <Button type="submit" isDisabled={isLoading}>
        {isLoading ? "Загрузка..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
};
