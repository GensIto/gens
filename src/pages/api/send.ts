// @ts-nocheck
/* eslint-disable */
import { NextResponse, NextRequest } from "next/server";
export default function handler(req: NextRequest, res: NextResponse) {
  let response = null;

  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_APIKEY);
    const msg = {
      to: req.body.email,
      bcc: "gensito1121@gmail.com",
      from: "gensito1121@gmail.com",
      subject: "お問合せありがとうございました。",
      text: `${req.body.name} 様\nお問合せを受け付けました。回答をお待ちください。\n\n【件名】${req.body.subject}\n${req.body.message}`,
    };
    const notification = {
      to: "gensito1121@gmail.com",
      bcc: "gensito1121@gmail.com",
      from: req.body.email,
      subject: "お問合せがありました",
      text: `${req.body.name} 様から\nお問合せを受け付けました。回答をお願いします。\n\n【件名】${req.body.subject}\n${req.body.message}`,
    };

    (async () => {
      try {
        response = await sgMail.send(msg);
        notificationResponse = await sgMail.send(notification);
      } catch (error) {
        console.error(error);
        if (error.response || error.notificationResponse) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
  res.send(response);
}
