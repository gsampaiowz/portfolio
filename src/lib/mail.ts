"use server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

async function sendEmail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const accessToken = await oAuth2Client.getAccessToken();

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      type: "OAUTH2",
      user: process.env.GMAIL_USERNAME,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken.token!.toString(),
      expires: 3599,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

type emailProps = {
  name: string;
  email: string;
  message: string;
};
export const send = async (values: emailProps) => {
  await sendEmail({
    to: "gabrielsampaio1216@gmail.com",
    subject: `Portfolio - Message from ${values.name}`,
    body: `
        <html>
          <head>
            <style>
              body {
                background-color: #0c0a09;
                font-family: Arial, sans-serif;
              }
              .container {
                max-width: 600px;
                margin: 40px auto;
                padding: 20px;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Portfolio - Message from ${values.name}</h2>
              <span>Nome: <strong>${values.name}</strong></span>
              <p>Email: ${values.email}</p>
              <p>Mensagem: <br> <br> ${values.message}</p>
            </div>
          </body>
        </html>
      `,
  });
};
