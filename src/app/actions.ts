"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Missing fields" };
    }

    try {
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["delivered@resend.dev"], // Using the test email for now as per Resend free tier
            subject: `New Message from ${name}`,
            replyTo: email,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
        });

        if (data.error) {
            return { error: data.error.message };
        }

        return { success: true };
    } catch (error) {
        return { error: "Failed to send email" };
    }
}
