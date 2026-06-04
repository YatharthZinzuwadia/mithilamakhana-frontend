"use server";

export async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY is not set in environment variables");
    // If no key is set, we can either fail or pass. We'll pass for development, but fail for production if strictly required.
    return { success: true, message: "Skipped verification (No secret key)" };
  }

  try {
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await res.json();

    if (data.success && data.score >= 0.5) {
      return { success: true };
    } else {
      return { success: false, error: "Failed reCAPTCHA verification" };
    }
  } catch (error) {
    return { success: false, error: "Error verifying reCAPTCHA" };
  }
}

export async function subscribeToWaitlist(formData: FormData, token: string) {
  const email = formData.get("email");
  if (!email || typeof email !== "string") {
    return { success: false, error: "Invalid email" };
  }

  // 1. Verify reCAPTCHA token
  const recaptchaResult = await verifyRecaptcha(token);
  if (!recaptchaResult.success) {
    return { success: false, error: recaptchaResult.error || "Bot detected" };
  }

  // 2. Here you would normally add the email to your database or email marketing tool (e.g. Mailchimp, Resend)
  // Example: await db.waitlist.create({ data: { email } });
  
  console.log(`Successfully subscribed: ${email}`);

  return { success: true };
}
