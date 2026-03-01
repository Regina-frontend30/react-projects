export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
}

export async function login(data: LoginRequest): Promise<boolean> {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Ошибка авторизации");
  }

  return true;
}

export async function register(data: RegisterRequest): Promise<User> {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Ошибка регистрации");
  }

  return response.json();
}

export async function getMe(): Promise<User> {
  const response = await fetch("/api/users/me", {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Не авторизован");
  }

  return response.json();
}

export async function logout(): Promise<void> {
  await fetch("/api/logout", {
    method: "POST",
    credentials: "include",
  });
}