import nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'davidwiz.one@gmail.com', // generated ethereal user
    pass: 'nlxumiivevwzmjoj', // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log('ready');
});
