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
      text: body,
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
}

export const send = async (values: emailProps) => {
  await sendEmail({
    to: "gabrielsampaio1216@gmail.com",
    subject: "Portfolio, " + values.name,
    body: `Mensagem de ${values.name} do email: (${values.email}): \n ${values.message}`,
  });
};
