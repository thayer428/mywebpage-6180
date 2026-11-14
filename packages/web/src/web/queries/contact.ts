import { useMutation } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useContactSubmission() {
  return useMutation(orpc.contact.submit.mutationOptions());
}
