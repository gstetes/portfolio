const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'gstetes@gmail.com',
    pass: 'Guiih@3527',
  },
});

module.exports = transporter;
