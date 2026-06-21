import { cn } from "@/lib/cn";

interface FormMessageProps {
  type: "success" | "error";
  message: string;
}

export function FormMessage({ type, message }: FormMessageProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-xl px-4 py-3 text-sm font-medium",
        type === "success" && "bg-green-50 text-green-800",
        type === "error" && "bg-red-50 text-red-800",
      )}
    >
      {message}
    </div>
  );
}
