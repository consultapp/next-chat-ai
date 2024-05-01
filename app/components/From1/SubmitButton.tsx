"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  console.log("pending", pending);
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Ожидание" : "Submit"}
    </button>
  );
}
