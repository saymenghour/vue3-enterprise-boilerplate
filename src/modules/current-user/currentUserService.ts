import { useQuery } from "vue-query";
import { fetchCurrentUserApi } from "./currentUserApi";
import { useCurrentUserStore } from "./currentUserStore";

export function fetchCurrentUser() {
  const { setCurrentUser } = useCurrentUserStore();
  return useQuery("currentUser", fetchCurrentUserApi, {
    retry: false,
    onSuccess(data) {
      setCurrentUser(data);
    },
  });
}