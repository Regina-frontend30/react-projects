import { useQuery } from "@tanstack/react-query";
import { getMe, User } from "../api/auth";

export function useMe() {
  const { data, isLoading, isFetching, error } = useQuery<User>({
    queryKey: ["me"],
    queryFn: getMe,
  });

  return {
    user: data ?? null,
    isLoading: isLoading || isFetching,
    error: error instanceof Error ? error.message : null,
  };
}