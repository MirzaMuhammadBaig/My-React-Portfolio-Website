import { transporter } from "../config/nodemailer.js";

export const sendMail = async (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: "blockchaindeveloper0990@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      html: `
        <html>
          <head>
            <style>
              /* Add some styles for the email */
              h3 {
                color: #4d4d4d;
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
              }
              p {
                color: #828282;
                font-size: 18px;
                margin-bottom: 20px;
              }
              ul {
                list-style: none;
                padding: 0;
              }
              li {
                color: #4d4d4d;
                font-size: 18px;
                margin-bottom: 10px;
              }
            </style>
          </head>
          <body>
            <p>You have a new contact request.</p>
            <h3>Contact Details</h3>
            <ul>
              <li>Name: ${req.body.name}</li>
              <li>Email: ${req.body.email}</li>
              <li>Subject: ${req.body.subject}</li>
              <li>Message: ${req.body.message}</li>
            </ul>
          </body>
        </html>
      `,
    };

    // console.log(req.body.name, "This is response");

    transporter.sendMail(mailOptions, function (err, info) {
      // console.log("🚀 ~ file: index.js:39 ~ mailOptions", mailOptions);
      if (err) {
        res.status(500).send({
          success: false,
          message: "Something went wrong. Try again later",
        });
      } else {
        res.send({
          success: true,
          message: "Thanks for contacting us. We will get back to you shortly",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
    });
  }
};
