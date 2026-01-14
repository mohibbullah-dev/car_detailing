import { useMutation } from "@tanstack/react-query";
import { loginApi, bootstrapAdminApi } from "../api/auth.api";
import { tokenStorage } from "../lib/storage";

export function useLogin() {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      if (data?.token) tokenStorage.set(data.token);
    },
  });
}

export function useBootstrapAdmin() {
  return useMutation({ mutationFn: bootstrapAdminApi });
}

export function useLogout() {
  return () => tokenStorage.clear();
}

export function isAuthed() {
  return Boolean(tokenStorage.get());
}
