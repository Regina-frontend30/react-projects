import { useState } from "react";
import { register, RegisterRequest } from "../api/auth";

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: RegisterRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      await register(data);
      window.location.reload();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submit,
    isLoading,
    error,
  };
}