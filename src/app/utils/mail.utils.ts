import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: process.env.NODE_ENV !== "development", //true
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
} as SMTPTransport.Options);

type SendEmaiDto = {
    sender: Mail.Address,
    receipients: Mail.Address[],
    subject: string,
    message: string
}

export const sendEmail = async (dto: SendEmaiDto) => {
    const {sender, receipients, subject, message} = dto;

    return await transport.sendMail({
        from: sender,
        to: receipients,
        subject,
        text: message,
        html: message
    })
}