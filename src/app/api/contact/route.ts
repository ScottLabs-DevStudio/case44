import { NextRequest, NextResponse } from "next/server";

// Contact form submission endpoint
// In production, you would integrate with an email service (SendGrid, Resend, etc.)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // In production, you would send an email:
    //
    // await sendEmail({
    //   to: "case44rocks@gmail.com",
    //   subject: `[Case44 Website] ${subject} - from ${name}`,
    //   body: `From: ${name} (${email})\n\n${message}`,
    // });

    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}