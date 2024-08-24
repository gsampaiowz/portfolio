import { sendEmail } from "@/app/utils/mail.utils";

export async function POST() {
  const sender = {
    name: "My Portfolio",
    address: "no-reply@example.com",
  };

  const receipients = [
    {
      name: "Gabriel Sampaio",
      address: "gabrielsampaio1216@gmail.com",
    },
  ];

  try {
    const result = await sendEmail({
      sender,
      receipients,
      subject: "Test Subject",
      message: "This is a test email",
    });

    return Response.json({
      accepted: result.accepted,
    });
  } catch (error) {
    return Response.json(
      { message: "Unable to send email this time" },
      { status: 500 }
    );
  }
}
