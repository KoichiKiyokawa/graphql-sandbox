"use client"
import { useFormStatus } from "@/lib/form-status"

export const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      disabled={pending}
      className="border border-white p-2 disabled:opacity-25"
    >
      update
    </button>
  )
}
