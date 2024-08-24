import { mailOption, transporter } from "../config/nodemailer";

const handler = async (req, res) => {
  
  if (req.method === "POST") {
    const data = req.body;

    try {
      await transporter.sendMail({
        ...mailOption,
        subject: "Test Subject",
        text: "This is a test email",
        html: "<h1>Test Title</h1><p>Some body text</p>"
      });

      return res.status(200).json({  success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }

  }

  return res.status(400).json({ message: "Bad request" });
};

export default handler;
