import { logout } from "../../api/auth";
import { useQueryClient } from "@tanstack/react-query";

export const LogoutButton = () => {
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await logout();
    queryClient.invalidateQueries({ queryKey: ["me"] });
  };

  return <button onClick={handleLogout}>Выйти</button>;
};