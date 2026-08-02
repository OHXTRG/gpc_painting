import { Resend } from "resend";
import { SITE } from "@/constants/site";
import { projectTypeOptions } from "@/data/form-options";
import type { QuoteFormValues } from "@/types/forms";

function getProjectTypeLabel(value: string): string {
  return projectTypeOptions.find((option) => option.value === value)?.label ?? value;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildOwnerEmailHtml(values: QuoteFormValues, projectLabel: string): string {
  return `
    <h2>New Quote Request</h2>
    <p>A new quote request was submitted through ${escapeHtml(SITE.name)}.</p>
    <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(values.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(values.email)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(values.phone)}</td></tr>
      <tr><td><strong>Project Type</strong></td><td>${escapeHtml(projectLabel)}</td></tr>
    </table>
    <h3>Project Details</h3>
    <p style="white-space: pre-wrap;">${escapeHtml(values.message)}</p>
  `.trim();
}

function buildCustomerEmailHtml(name: string): string {
  return `
    <h2>Thank you for your quote request</h2>
    <p>Hi ${escapeHtml(name)},</p>
    <p>
      Thank you for reaching out to ${escapeHtml(SITE.name)}. We have received your quote request
      and will be contacting you shortly to discuss your project.
    </p>
    <p>
      If you have any urgent questions in the meantime, feel free to call us at
      ${escapeHtml(SITE.phone)} or reply to this email.
    </p>
    <p>Best regards,<br />The ${escapeHtml(SITE.name)} Team</p>
  `.trim();
}

export async function sendQuoteEmails(values: QuoteFormValues): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const from = process.env.EMAIL_FROM ?? `${SITE.name} <onboarding@resend.dev>`;
  const resend = new Resend(apiKey);
  const projectLabel = getProjectTypeLabel(values.projectType);

  const [ownerResult, customerResult] = await Promise.all([
    resend.emails.send({
      from,
      to: SITE.email,
      replyTo: values.email,
      subject: `New quote request from ${values.name}`,
      html: buildOwnerEmailHtml(values, projectLabel),
    }),
    resend.emails.send({
      from,
      to: values.email,
      subject: `Thank you for your quote request — ${SITE.name}`,
      html: buildCustomerEmailHtml(values.name),
    }),
  ]);

  if (ownerResult.error || customerResult.error) {
    const message =
      ownerResult.error?.message ??
      customerResult.error?.message ??
      "Failed to send quote emails.";
    throw new Error(message);
  }
}
