import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth:{
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  }
});

export const mailOption = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
}
