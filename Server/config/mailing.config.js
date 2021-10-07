const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_HOST,
        pass: process.env.MAIL_SECRET
    }
})

module.exports = transporter