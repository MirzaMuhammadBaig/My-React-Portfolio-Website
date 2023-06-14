import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "example@gmail.com",
    pass: "passid",
  },
});
