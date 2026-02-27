export interface User {
  id: string;
  email: string;
  username: string;
}

export async function getMe(): Promise<User> {
  const response = await fetch("http://localhost:4000/users/me", {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Не авторизован");
  }

  return response.json();
}