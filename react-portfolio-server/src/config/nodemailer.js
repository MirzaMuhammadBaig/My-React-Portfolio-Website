import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "blockchaindeveloper0990@gmail.com",
    pass: "jbmrtaxayqitkzfe",
  },
});
