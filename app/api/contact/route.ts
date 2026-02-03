import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is not set. Email functionality will not work.");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

    // Send email using Resend
    // IMPORTANT: Resend free tier only allows sending to the account owner's email
    // To send to info@vvhaglobal.com, you must verify your domain with Resend
    // 
    // Environment Variables:
    // - RESEND_API_KEY: Your Resend API key (required)
    // - RESEND_TO_EMAIL: Recipient email (defaults to info@vvhaglobal.com)
    // - RESEND_FROM_EMAIL: Sender email (defaults to onboarding@resend.dev for testing)
    // 
    // For production: Verify domain at resend.com/domains and set RESEND_FROM_EMAIL
    const recipientEmail = process.env.RESEND_TO_EMAIL || process.env.RESEND_TEST_EMAIL || "info@vvhaglobal.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    
    // Validate email addresses are defined
    if (!recipientEmail || !fromEmail) {
      return NextResponse.json(
        { error: "Email service configuration error. Please contact the administrator." },
        { status: 500 }
      );
    }
    
    // Log the request (without sensitive data)
    console.log("Attempting to send email:", {
      to: recipientEmail,
      from: fromEmail,
      subject: `New Contact Form Submission from ${name}`,
      hasApiKey: !!process.env.RESEND_API_KEY,
    });
    
    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the VVHA Global contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the VVHA Global contact form.
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error, null, 2));
      // Return more detailed error in development, generic in production
      const errorMessage = process.env.NODE_ENV === "development" 
        ? `Failed to send email: ${error.message || JSON.stringify(error)}`
        : "Failed to send email. Please try again later.";
      return NextResponse.json(
        { error: errorMessage, details: process.env.NODE_ENV === "development" ? error : undefined },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { 
        error: process.env.NODE_ENV === "development" 
          ? `Internal server error: ${errorMessage}`
          : "Internal server error. Please try again later.",
        details: process.env.NODE_ENV === "development" ? String(error) : undefined
      },
      { status: 500 }
    );
  }
}
