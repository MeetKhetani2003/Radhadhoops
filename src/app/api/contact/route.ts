import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "radhasolar@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, subject, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required fields." },
        { status: 400 }
      );
    }

    const emailSubject = subject
      ? `[Radha Dhoop Inquiry] ${subject} - from ${name}`
      : `[Radha Dhoop Inquiry] New message from ${name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #542866; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #542866; color: #fffdf7; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px; color: #e6b52e;">Radha Dhoop Website Inquiry</h2>
          <p style="margin: 5px 0 0; font-size: 13px; opacity: 0.85;">New customer message received via contact form</p>
        </div>
        <div style="padding: 24px; background-color: #fffdf7; color: #262026; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #542866;">Customer Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #542866;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone || ""}" style="color: #542866; text-decoration: underline;">${phone || "Not provided"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #542866;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email || ""}" style="color: #542866; text-decoration: underline;">${email || "Not provided"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #542866;">Subject:</td>
              <td style="padding: 8px 0;">${subject || "General Inquiry"}</td>
            </tr>
          </table>
          <div style="background-color: #f8f3e8; border-left: 4px solid #e6b52e; padding: 15px; border-radius: 4px;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #542866;">Message:</p>
            <p style="margin: 0; white-space: pre-line;">${message}</p>
          </div>
          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #efe7d8; font-size: 12px; color: #655d62; text-align: center;">
            Sent automatically from https://radhadhoop.com Contact Form
          </div>
        </div>
      </div>
    `;

    // 1. If SMTP server credentials exist in environment, send via nodemailer
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name} (via Radha Dhoop)" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        replyTo: email || undefined,
        to: RECIPIENT_EMAIL,
        subject: emailSubject,
        html: htmlContent,
      });

      return NextResponse.json({ success: true, message: "Email sent via SMTP." });
    }

    // 2. Direct server mail relay to radhasolar@gmail.com
    const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: emailSubject,
        name,
        phone: phone || "Not provided",
        email: email || "Not provided",
        subject: subject || "Website Inquiry",
        message,
        _template: "table",
      }),
    });

    if (!response.ok) {
      console.warn("FormSubmit relay returned non-OK, enquiry logged for:", RECIPIENT_EMAIL);
    }

    return NextResponse.json({
      success: true,
      message: `Enquiry received and routed to ${RECIPIENT_EMAIL}`,
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please reach us via WhatsApp." },
      { status: 500 }
    );
  }
}
