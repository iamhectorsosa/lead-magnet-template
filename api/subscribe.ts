import type { VercelRequest, VercelResponse } from "@vercel/node";
import MailerLite from "@mailerlite/mailerlite-nodejs";

const ALLOWED_ORIGINS = [
  "https://xatruchfitness.com",
  "https://iamhectorsosa.github.io",
  "http://localhost:5173",
];

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, name, groupId, ...fields } = req.body as Record<
    string,
    string
  >;

  if (!process.env.MAILERLITE_API_KEY) {
    return res.status(500).json({ error: "configuration error" });
  }

  const mailerlite = new MailerLite({
    api_key: process.env.MAILERLITE_API_KEY,
  });

  if (!email?.trim() || !name?.trim()) {
    return res.status(400).json({ error: "email and name cannot be empty" });
  }

  try {
    await mailerlite.subscribers.createOrUpdate({
      email,
      fields: { name, ...fields },
      groups: groupId ? [groupId] : undefined,
      status: "active",
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Internal server error",
      success: false,
    });
  }
};

export default handler;
