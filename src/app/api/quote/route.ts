import { NextResponse } from "next/server";
import { sendQuoteEmails } from "@/lib/email/send-quote-emails";
import { getClientIp } from "@/lib/security/get-client-ip";
import { QUOTE_FORM_RATE_LIMIT, rateLimit } from "@/lib/security/rate-limit";
import { verifyTurnstileToken } from "@/lib/security/verify-turnstile";
import { validateQuoteForm } from "@/lib/validate-quote-form";
import type { QuoteFormValues } from "@/types/forms";

interface QuoteRequestBody extends Partial<QuoteFormValues> {
  turnstileToken?: string;
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    const rateLimitResult = await rateLimit(`quote:${clientIp}`, QUOTE_FORM_RATE_LIMIT);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in a few minutes." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as QuoteRequestBody;
    const values: QuoteFormValues = {
      name: body.name ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      projectType: body.projectType ?? "",
      message: body.message ?? "",
    };

    const errors = validateQuoteForm(values);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
    }

    const turnstileToken = body.turnstileToken?.trim();
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Turnstile verification is required." },
        { status: 403 },
      );
    }

    const turnstileValid = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!turnstileValid) {
      return NextResponse.json(
        { error: "Turnstile verification failed. Please try again." },
        { status: 403 },
      );
    }

    await sendQuoteEmails(values);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote submission failed:", error);
    return NextResponse.json(
      { error: "Unable to submit your quote request. Please try again later." },
      { status: 500 },
    );
  }
}
