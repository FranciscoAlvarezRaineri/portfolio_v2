// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require("dotenv").config();
const PASSWORD = process.env.password;

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "FranciscoAlvarezRaineri@gmail.com",
    pass: PASSWORD,
  },
  secure: true,
});

export default function handler(req, res) {
  console.log(req.body);
  const mailData = {
    from: "FranciscoAlvarezRaineri@gmail.com",
    to: "FranciscoAlvarezRaineri@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) res.status(404).send(err);
    else {
      res
        .status(200)
        .send(
          "The e-mail was sent correctly. I'll answer shortly. Thank you for getting in touch!"
        );
    }
  });
}
