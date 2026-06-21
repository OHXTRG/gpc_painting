"use client";

import { useState } from "react";
import type { QuoteFormErrors, QuoteFormValues } from "@/types/forms";
import { projectTypeOptions } from "@/data/form-options";
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

function validate(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.projectType) errors.projectType = "Please select a project type.";
  if (!values.message.trim()) errors.message = "Please describe your project.";

  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Placeholder for future API integration
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
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
          message="Something went wrong while submitting the form. Please try again."
        />
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Submit Quote Request"}
      </Button>
    </form>
  );
}
