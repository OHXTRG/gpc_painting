"use client";

import { useCallback, useState } from "react";
import type { QuoteFormErrors, QuoteFormValues } from "@/types/forms";
import { projectTypeOptions } from "@/data/form-options";
import { validateQuoteForm } from "@/lib/validate-quote-form";
import { TurnstileWidget } from "@/components/features/TurnstileWidget";
import { Button } from "@/components/ui/Button";
import { FormMessage } from "@/components/ui/FormMessage";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const initialValues: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export function QuoteForm({ turnstileSiteKey }: { turnstileSiteKey: string }) {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus("idle");
    setErrorMessage("");
  };

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
    setErrorMessage("");
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken("");
    setErrorMessage("Verification failed. Please try again.");
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const resetTurnstile = () => {
    setTurnstileToken("");
    setTurnstileKey((current) => current + 1);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateQuoteForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the verification challenge.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, turnstileToken }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong while submitting the form.");
        resetTurnstile();
        return;
      }

      setStatus("success");
      setValues(initialValues);
      resetTurnstile();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong while submitting the form. Please try again.");
      resetTurnstile();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          name="name"
          label="Full Name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          autoComplete="name"
          required
        />
        <Input
          name="email"
          type="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          name="phone"
          type="tel"
          label="Phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
          required
        />
        <Select
          name="projectType"
          label="Project Type"
          value={values.projectType}
          onChange={handleChange}
          options={projectTypeOptions.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          placeholder="Select project type..."
          error={errors.projectType}
          required
        />
      </div>

      <Textarea
        name="message"
        label="Project Details"
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Tell us about your project, timeline, and any specific requirements."
        required
      />

      {status === "success" && (
        <FormMessage
          type="success"
          message="Thank you! Your request has been received. We'll be in touch shortly."
        />
      )}
      {status === "error" && (
        <FormMessage
          type="error"
          message={
            errorMessage || "Something went wrong while submitting the form. Please try again."
          }
        />
      )}

      {turnstileSiteKey ? (
        <TurnstileWidget
          key={turnstileKey}
          siteKey={turnstileSiteKey}
          onVerify={handleTurnstileVerify}
          onError={handleTurnstileError}
          onExpire={handleTurnstileExpire}
        />
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || !turnstileSiteKey || !turnstileToken}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Submit Quote Request"}
      </Button>
    </form>
  );
}
