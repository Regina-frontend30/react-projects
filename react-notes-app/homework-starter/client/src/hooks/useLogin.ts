import { useState } from "react";
import { login, LoginRequest } from "../api/auth";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: LoginRequest) => {
    setIsLoading(true);
    setError(null);

    try {
      await login(data);
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