import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createNote } from "../../api/notes";
import { noteSchema, NoteFormData } from "../../validation/noteSchema";
import { Button } from "../Button";
import "./NoteForm.css";
import { FormField } from "../FormField";

export const NoteForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
  });

  const onSubmit = async (data: NoteFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      await createNote(data);
      reset();
      window.location.reload();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Заголовок" errorMessage={errors.title?.message}>
        <input {...register("title")} />
      </FormField>
      <FormField label="Текст" errorMessage={errors.text?.message}>
        <textarea {...register("text")} />
      </FormField>
      {error && <div className="error">{error}</div>}

      <Button type="submit" isDisabled={isLoading}>
        {isLoading ? "Создание..." : "Создать заметку"}
      </Button>
    </form>
  );
};
