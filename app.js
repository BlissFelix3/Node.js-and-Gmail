const express = require("express");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

app.post("/send-email", (req, res) => {
  const { name, email, hazardList } = req.body;
  const mailSubject = "Hazard List";
  const mailText = `Name: ${name}\nHazard List: ${hazardList.join("\n")}`;
  const accessToken = oAuth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_ADDRESS,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: email,
    subject: mailSubject,
    text: mailText,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Something went wrong, please try again later.");
    } else {
      console.log(`Email sent to ${email}: ${info.response}`);
      res.status(200).send("Email sent successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
