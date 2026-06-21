export type ProjectType =
  | "interior"
  | "exterior"
  | "commercial"
  | "cabinet-refinishing"
  | "new-construction"
  | "other";

export interface QuoteFormValues {
  name: string;
  email: string;
  phone: string;
  projectType: ProjectType | "";
  message: string;
}

export interface QuoteFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

export interface ProjectTypeOption {
  value: ProjectType;
  label: string;
}
