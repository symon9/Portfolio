import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message } = payload || {};

    // Validate inputs
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Please provide your name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Please provide a message." },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (token && chatId) {
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const text = `🔔 New Portfolio Contact Message\n\nFrom: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;

      try {
        await axios.post(url, {
          text,
          chat_id: chatId,
        });
      } catch (tgError) {
        console.error("Telegram notification error:", tgError?.message || tgError);
      }
    } else {
      console.log(`[Contact Form Received] From: ${name} (${email}): ${message.slice(0, 100)}...`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! Simon will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error?.message || error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while sending your message. Please reach out directly to simon.dev.me@gmail.com.",
      },
      { status: 500 }
    );
  }
}