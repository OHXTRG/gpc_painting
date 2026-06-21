import { cn } from "@/lib/cn";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, id, className, ...props }: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={textareaId} className="block text-sm font-medium text-brand-900">
        {label}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          "min-h-32 w-full resize-y rounded-xl border border-neutral-300 bg-white px-4 py-3 text-brand-900 placeholder:text-neutral-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className,
        )}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
